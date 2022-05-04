import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    TextareaAutosize,
    Typography,
    Switch,
    FormControlLabel,
    Alert,
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { connect } from 'react-redux';
import {
    getAllDoctorsAppointments,
    setDoctorsAvailability,
    setGetHelp,
    getProfileData,
} from 'store/actions';
import { objectWithBoolean, formatDate, prettyDate } from "utils/json";

const columns = [
    {
        field: 'time',
        headerName: 'Time',
        flex: 1,
        valueGetter: (params) => prettyDate(params?.value),
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1,
        valueGetter: (params) => {
            const user = params.getValue(params?.id, 'user');
            return `${user?.firstName || ''} ${user?.lastName || ''}`;
        },
    },
    {
        field: 'state',
        headerName: 'State',
        flex: 1,
        valueGetter: (params) => params.getValue(params?.id, 'user')?.address?.state,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        flex: 1,
        valueGetter: (params) => params.getValue(params?.id, 'user')?.userMetaData?.gender,
    },
    {
        field: 'notes',
        headerName: 'notes',
        flex: 1,
    },
];

export const DoctorSchedule = (props) => {
    const [open, setOpen] = React.useState(false);
    const [activeUser, setActiveUser] = React.useState(null);
    const [successAlert, setSuccessAlert] = React.useState('');
    const [available, setAvailable] = React.useState(false);
    React.useEffect(() => {
        props?.id && props.getProfileData({ id: props?.id });
    }, []);
    React.useEffect(() => {
        setAvailable(!!props?.doctor?.availability);
    }, [props?.doctor?.availability]);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleRowClick = ({ row }) => {
        setActiveUser(row);
    };
    const setSuccessAlertWithTimer = (msg) => {
        setSuccessAlert(msg);
        setTimeout(() => {
            setSuccessAlert('');
        }, 6000);
    };
    const handleClose = () => {
        setActiveUser(null);
        setOpen(false);
    };
    const handleToggleAvailability = (e, checked) => {
        setAvailable(checked);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = objectWithBoolean(Object.fromEntries(formData));
        if (!formProps?.available) {
            formProps.availability = '';
        }
        console.log(formProps);
        setDoctorsAvailability({ ...formProps, id: props?.id })
            .then((data) => {
                setAvailable(formProps?.availability);
                setSuccessAlertWithTimer('Updated Availability');
                props?.id && props.getProfileData({ id: props?.id });
                setOpen(false);
            })
            .catch((err) => {
                console.log('Db issue');
            });
    };
    const DataTable = ({ rows }) => {
        if (rows?.length) {
            return (
                <div style={{ height: '100vh', width: '100%' }}>
                    {!rows.length ? (
                        <Typography sx={{ mt: 2, mb: 1 }}>No Appointments</Typography>
                    ) : (
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={15}
                            disableSelectionOnClick
                            onRowClick={handleRowClick}
                        />
                    )}
                </div>
            );
        }
        return null;
        //return <Typography sx={{ mt: 2, mb: 1 }}>Loading</Typography>;
    };
    return (
        <>
            <Helmet>
                <title>WeCare</title>
            </Helmet>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100vh',
                    py: 3,
                }}
            >
                <Container maxWidth={false}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button color="primary" variant="contained" onClick={handleClickOpen}>
                            Update Availibility
                        </Button>
                    </Box>
                    {successAlert && <Alert severity="success">{successAlert}</Alert>}
                    <Box sx={{ pt: 3 }}>
                        <DataTable rows={props?.appointments} />
                    </Box>
                </Container>
            </Box>
            <Dialog open={!!activeUser} onClose={handleClose} fullWidth>
                <DialogTitle>{activeUser?.user?.firstName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Notes</DialogContentText>
                    <form className="" noValidate>
                        <Box sx={{ my: 2 }}>
                            <TextareaAutosize
                                id="datetime-local"
                                minRows={10}
                                defaultValue={activeUser?.user?.notes}
                                className="full-width"
                            />
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open} onClose={handleClose}>
                <form className="" noValidate onSubmit={handleSubmit}>
                    <DialogTitle>Provide Medical Assistance</DialogTitle>
                    <DialogContent>
                        <FormControlLabel
                            control={
                                <Switch
                                    defaultChecked={available}
                                    onChange={handleToggleAvailability}
                                    name="available"
                                    value="true"
                                />
                            }
                            label="Available"
                        />
                        {available && (
                            <>
                                <DialogContentText>Set up your availability</DialogContentText>
                                <Box sx={{ my: 2 }}>
                                    <TextField
                                        id="datetime-local"
                                        name="availability"
                                        label="To"
                                        type="datetime-local"
                                        defaultValue={
                                            (props?.doctor?.availability &&
                                                formatDate(props?.doctor?.availability)) ||
                                            '2017-06-04T10:30'
                                        }
                                        className="mb-2"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Box>
                            </>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Save Details</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

const mapStateToProps = ({ userProfileReducer }) => ({
    ...userProfileReducer,
});

const mapDispatchToProps = { setGetHelp, getProfileData };

const ConnectedDoctorSchedule = connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
export default ConnectedDoctorSchedule;
