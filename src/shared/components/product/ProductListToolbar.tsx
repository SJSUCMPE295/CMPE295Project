import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    InputAdornment,
    SvgIcon,
    Divider,
    FormControlLabel,
    FormGroup,
} from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const ProductListToolbar = (props) => (
    <Box {...props}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: 500,
                height: 700,
                p: 1,
            }}
        >
            <form {...props}>
                <Card
                    sx={{
                        //display: 'flex',
                        height: 700,
                        width: 900,
                        justifyContent: 'center',
                        //justifyContent: 'flex-start'
                    }}
                >
                    <CardHeader
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                        subheader="update the resource/service details you would like to provide"
                        title="Give Help"
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
                                required
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                                helperText="Is it a Resource/Service Type?"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Resource/Service Name"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                required
                                id="outlined-required"
                                label="Category Name"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Availability"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                id="outlined-decsription-input"
                                label="Description"
                                variant="outlined"
                                sx={{ m: 1, width: '102ch' }}
                            />
                        </Box>
                        <Box sx={{ pt: 2 }}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Use my profile address"
                                />
                            </FormGroup>
                        </Box>
                        <Box sx={{ pt: 2 }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Address"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="City"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                required
                                id="outlined-required-input"
                                label="Select State"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                            />
                            <TextField
                                required
                                id="outlined-required-input"
                                label="Country"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                required
                                id="outlined-required-input"
                                label="Zipcode"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                            />
                            <TextField
                                required
                                id="outlined-required-input"
                                label="Phone Number"
                                variant="outlined"
                                sx={{ m: 1, width: '50ch' }}
                            />
                        </Box>
                        <Divider sx={{ pt: 2 }} />
                        <Button variant="contained">Save Details</Button>
                    </CardContent>
                </Card>
            </form>
        </Box>
    </Box>
);

export default ProductListToolbar;
