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
    TextareaAutosize
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { connect } from 'react-redux';
import { getHelp, setGetHelp } from 'store/actions';

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

const rows = [
    {
        id: 1,
        lastName: 'Snow',
        firstName: 'Jon',
        age: 35,
        gender: 'Male',
        notes: 'allergies',
        time: 'Mar 09 9:00pm',
    },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const availableTimesInput = [
    { text: 'Sunday', value: '', selected: false },
    { text: 'Monday', value: '' },
    { text: 'Tuesday', value: '' },
    { text: 'Wednesday', value: '' },
    { text: 'Thursday', value: '' },
    { text: 'Friday', value: '' },
    { text: 'Saturday', value: '' },
];

const formInputs = [
    {
        margin: 'dense',
        id: 'name',
        label: 'Email Address',
        type: 'email',
        variant: 'standard',
    },
];
export const ProductList = (props) => {
    const [open, setOpen] = React.useState(false);
    const [availableTimes, setAvailableTimes] = React.useState(availableTimesInput);
    const [activeUser, setActiveUser] = React.useState();

    React.useEffect(() => {
        getHelp()
            .then((response) => props.setGetHelp(response.data))
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
    const handleOnClickAvailablityBtn = (i) => {
        availableTimes[i].selected = !availableTimes[i].selected;
        console.log(availableTimes);
        setAvailableTimes([...availableTimes]);
    };
    const DataTable = () => {
        return (
            <div style={{ height: 800, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} disableSelectionOnClick onRowClick={handleRowClick} />
            </div>
        );
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
                        <DataTable />
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
                <DialogTitle>Provide Medical Assistance</DialogTitle>
                <DialogContent>
                    <DialogContentText>Set up your availability</DialogContentText>
                    <form className="" noValidate>
                        <Box sx={{ my: 2 }}>
                            <TextField
                                id="datetime-local"
                                label="To"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                className="mb-2"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save Details</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

const mapStateToProps = ({ user }) => ({
    user,
});

const mapDispatchToProps = { setGetHelp };

const ConnectedProductList = connect(mapStateToProps, mapDispatchToProps)(ProductList);
export default ConnectedProductList;
