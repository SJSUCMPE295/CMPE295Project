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
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { connect } from 'react-redux';
import { getAllDoctorsAppointments, setGetHelp } from 'store/actions';
import { objectWithBoolean } from 'utils/json';

const columns = [
    {
        field: 'time',
        headerName: 'Time',
        flex: 1,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
    },
    {
        field: 'age',
        headerName: 'Age',
        flex: 1,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        flex: 1,
    },
    {
        field: 'notes',
        headerName: 'notes',
        flex: 1,
        editable: true,
    },
];

export const DoctorSchedule = (props) => {
    const [open, setOpen] = React.useState(false);
    const [activeUser, setActiveUser] = React.useState(null);
    const [available, setAvailable] = React.useState();
    const [appointments, setAppointments] = React.useState();

    React.useEffect(() => {
        setAvailable(props?.userMetaData?.isDoctor);
        getAllDoctorsAppointments(props?.id)
            .then((response) => setAppointments(response.data))
            .catch(console.log);
    }, []);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleRowClick = ({ row }) => {
        setActiveUser(row);
    };
    const handleClose = () => {
        setActiveUser(null);
        setOpen(false);
    };
    const handleToggleAvailability = (e) => {
        const value = e?.current?.value;
        setAvailable(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = objectWithBoolean(Object.fromEntries(formData));
        console.log(formProps, available);
    };
    const DataTable = ({ rows }) => {
        if (rows) {
            return (
                <div style={{ height: '100vh', width: '100%' }}>
                    {!rows.length ? (
                        <Typography sx={{ mt: 2, mb: 1 }}>No Appointments</Typography>
                    ) : (
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            disableSelectionOnClick
                            onRowClick={handleRowClick}
                        />
                    )}
                </div>
            );
        }
        return <Typography sx={{ mt: 2, mb: 1 }}>Loading</Typography>;
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
                            Add product
                        </Button>
                    </Box>
                    <Box sx={{ pt: 3 }}>
                        <DataTable rows={appointments} />
                    </Box>
                </Container>
            </Box>
            <Dialog open={!!activeUser} onClose={handleClose} fullWidth>
                <DialogTitle>{activeUser?.firstName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Notes</DialogContentText>
                    <form className="" noValidate>
                        <Box sx={{ my: 2 }}>
                            <TextareaAutosize
                                id="datetime-local"
                                minRows={10}
                                defaultValue={activeUser?.notes}
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
                                        defaultValue="2017-05-24T10:30"
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

const mapDispatchToProps = { setGetHelp };

const ConnectedDoctorSchedule = connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
export default ConnectedDoctorSchedule;
