import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Divider,
    FormControlLabel,
    FormGroup
} from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';


const states = [
    {
        value: 'california',
        label: 'California',
    },
    {
        value: 'new-york',
        label: 'New York',
    },
    {
        value: 'oregon',
        label: 'Oregon',
    },
    {
        value: 'arizona',
        label: 'Arizona',
    },
    {
        value: 'Texas',
        label: 'Texas',
    },
    {
        value: 'Utah',
        label: 'Utah',
    }
];

const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};


const AddServiceCard = (props) => (
    <Box {...props}>
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width:500,
                height:700,
                p: 1
                }}
        >
        <form autoComplete="off" noValidate {...props}>
            <Card 
                sx={{
                height: 700,
                width:900,
                justifyContent:'center',
                }}
            >
                    <CardHeader 
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                        titleTypographyProps={{ variant: 'h2' }} subheader="update the resource/service details you would like to provide" title="Give Help"
                    />
                    <Divider />
                    <CardContent>
                        <Box 
                        sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',       
                        }}
                        >
                            <TextField
                                id="filled-basic"
                                label="Type"
                                variant="filled"
                                sx={{ m: 1, width: '50ch' }}
                                value="Service"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Service Name"
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                                helperText="Car pool, Accomodation etc. "
                                value=""
                            />
                        </Box>
                        <Box>
                            <TextField
                                required
                                id="outlined-required"
                                label="Category Name"
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                                value=""
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Availability"
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                                value=""
                            />
                        </Box>
                        <Box>
                            <TextField
                                id="outlined-decsription-input"
                                label="Description"
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ m: 1, width: '102ch' }}
                                value=""
                            />
                        </Box>
                        <Box sx={{ pt: 2 }}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox/>} label="Use my profile address" />
                            </FormGroup>
                        </Box>
                        <Box sx={{ pt: 2 }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Address"
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                                value=""
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="City"
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                                value=""
                            />
                        </Box>
                        <Box>
                            <TextField
                                required
                                id="outlined-required-input"
                                label="Select State"
                                variant="outlined"
                                select
                                SelectProps={{ native: true }}
                                sx={{ m: 1, width: '50ch' }}
                            >
                                {states.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                required
                                id="outlined-required-input"
                                label="Country"
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                                value=""
                            />
                        </Box>
                        <Box>
                            <TextField
                                required
                                id="outlined-required-input"
                                label="Zipcode"
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                                value=""
                            />
                            <TextField
                                required
                                id="outlined-required-input"
                                label="Phone Number"
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                                value=""
                            />
                        </Box>
                        <Divider sx={{ pt: 2 }} />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 1,
                            }}
                        >
                            <Button type="submit" color="primary" variant="contained">
                                Save details
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </form>
        </Box>
    </Box>
);

export default AddServiceCard;