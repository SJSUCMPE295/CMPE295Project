import * as React from 'react';
import {
    Alert,
    Box,
    Button,
    Container,
    Stepper,
    Step,
    StepLabel,
    Typography,
    TextField,
    MenuItem,
    Select,
    Avatar,
    CardHeader,
    CardContent,
    Card,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextareaAutosize,
    DialogActions,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import { createAppointment, getAvailableDoctors, setGetHelp, getProfileData } from 'store/actions';
import { getDate, formatDate } from 'utils/json';
const steps = ['Select time', 'Select Doctor', 'Notes', 'Overview'];
export const LookForMedicalAssistance = (props) => {
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedTime, setSelectedTime] = React.useState(getDate(1) + 'T10:30');
    const [doctors, setDoctors] = React.useState([]);
    const [selectedDoctor, setSelectedDoctor] = React.useState(null);
    const [alert, setAlert] = React.useState('');
    const notesInput = React.useRef();
    const [notes, setNotes] = React.useState('');
    const [skipped, setSkipped] = React.useState(new Set());
    const hasDuplicateAppointment = (props?.appointments || []).find(
        (x) =>
            selectedTime === x?.time ||
            selectedTime === formatDate(x?.time) ||
            x?.time?.indexOf(selectedTime) > 0
    );
    const handleClickOpen = () => {
        setActiveStep(0)
        setAlert('')
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        props?.id && props.getProfileData({ id: props?.id });
        setTime();
    }, []);
    const isStepOptional = (step) => {
        return step === 2;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
    const saveNotes = () => {
        // @ts-ignore
        const notesValue = notesInput?.current?.value;
        if (notesValue && notesValue !== notes) {
            setNotes(notesValue);
        }
    };
    const handleNext = () => {
        const last = activeStep === steps.length - 1;
        const setDoctorStep = activeStep === 1;
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        if (last) {
            const data = {
                userId: props?.id,
                time: selectedTime,
                doctorId: selectedDoctor?._id,
                notes,
                status: false,
                appointmentDetails: 'Appointment',
            };
            if (data.userId && data.time && data.doctorId) {
                createAppointment(data)
                    .then((r) => window?.location?.reload())
                    .catch((e) => setAlert('something went wrong'));
            } else {
                setAlert('missing data');
            }
            setAlert('');
        } else {
            if (activeStep === 0 && hasDuplicateAppointment) {
                setAlert('Conflict with another appointment');
                return;
            }
            if (setDoctorStep && !selectedDoctor) {
                setAlert('Please select a diffrent Time');
                return;
            }
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);
            saveNotes();
            setAlert('');
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const setTime = (time = '') => {
        time && setSelectedTime(time);
        getAvailableDoctors({ availability: time ? time : selectedTime })
            .then((response) => setDoctors(response.data))
            .catch(console.log);
    };
    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const StepContainer = ({ step }: any) => {
        switch (step) {
            case 0: {
                return (
                    <TextField
                        id="datetime-local"
                        label="Time"
                        type="datetime-local"
                        defaultValue={selectedTime}
                        className="mb-2"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={({ currentTarget }) => {
                            setTime(currentTarget?.value);
                        }}
                    />
                );
            }
            case 1: {
                if (doctors.length) {
                    return (
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedDoctor?._id || '-1'}
                            label="Doctors"
                            onChange={({ target }) => {
                                setSelectedDoctor(
                                    doctors.find((x) => x?._id === target?.value) || null
                                );
                            }}
                        >
                            <MenuItem disabled value="-1">
                                <em>Select Doctor</em>
                            </MenuItem>
                            {doctors.map((doctor, id) => (
                                <MenuItem key={id} value={doctor?._id}>
                                    {doctor?.firstName}
                                </MenuItem>
                            ))}
                        </Select>
                    );
                }
                return (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        No Doctors Available Please Select a new time
                    </Typography>
                );
            }
            case 2: {
                const props = {
                    ref: notesInput,
                    id: 'datetime-local',
                    rows: 10,
                    defaultValue: notes,
                    className: 'full-width',
                };
                // @ts-ignore
                return <textarea {...props} />;
            }
            case 3: {
                const date = new Date(selectedTime).toLocaleDateString();
                const day = new Date(selectedTime).toLocaleTimeString();
                return (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={<Avatar src="" aria-label="" />}
                            title={selectedDoctor?.firstName}
                            subheader={`${date}  ${day}`}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {notes || 'appointment'}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            }
            default: {
                return null;
            }
        }
    };
    const DataTable = ({ rows }) => {
        const columns = [
            {
                field: 'time',
                headerName: 'Time',
                flex: 1,
                valueGetter: (params) => formatDate(params?.value),
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
        if (rows?.length) {
            return (
                <div style={{ height: '100vh', width: '100%' }}>
                    {!rows.length ? (
                        <Typography sx={{ mt: 2, mb: 1 }}>No Appointments</Typography>
                    ) : (
                        <>
                            <Typography sx={{ mt: 2, mb: 1 }}>Appointments</Typography>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                disableSelectionOnClick
                            />
                        </>
                    )}
                </div>
            );
        }
        return <Typography sx={{ mt: 2, mb: 1 }}>Loading</Typography>;
    };
    return (
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
                <Dialog open={open} onClose={handleClose} fullWidth>
                    <DialogTitle>Make an Appointment</DialogTitle>
                    <DialogContent>
                        {alert && <Alert severity="error">{alert}</Alert>}
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    if (isStepOptional(index)) {
                                        labelProps.optional = (
                                            <Typography variant="caption">Optional</Typography>
                                        );
                                    }
                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false;
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Box sx={{ my: 2, minHeight: '170px' }}>
                                        <StepContainer step={activeStep} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        {isStepOptional(activeStep) && (
                                            <Button
                                                color="inherit"
                                                onClick={handleSkip}
                                                sx={{ mr: 1 }}
                                            >
                                                Skip
                                            </Button>
                                        )}

                                        <Button onClick={handleNext} color="primary">
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Box>
                    </DialogContent>
                </Dialog>
                <Box sx={{ width: '100%' }}>
                    <DataTable rows={props?.appointments} />
                </Box>
            </Container>
        </Box>
    );
};

const mapStateToProps = ({ userProfileReducer }) => ({
    ...userProfileReducer,
});

const mapDispatchToProps = { setGetHelp, getProfileData, createAppointment };

const ConnectedLookForMedicalAssistance = connect(
    mapStateToProps,
    mapDispatchToProps
)(LookForMedicalAssistance);
export default ConnectedLookForMedicalAssistance;
