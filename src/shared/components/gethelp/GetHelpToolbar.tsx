import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
} from '@material-ui/core';
import { Search as SearchIcon,Navigation as NavigationIcon,Globe as CircleIcon } from 'react-feather';

const GetHelpToolbar = (props) => (
    <Box {...props}>
       {/* <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}
        >
            <Button>Import</Button>
            <Button sx={{ mx: 1 }}>Export</Button>
            <Button color="primary" variant="contained">
                Add customer
            </Button>
        </Box>*/}
        <Box sx={{ mt: 3}}>
            <Card>
                <CardContent>
                    <Box sx={{ display: 'flex',maxWidth: 1200}}>
                    <Box sx={{ maxWidth: 700 }}>
                        <TextField style = {{width: 600}}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SvgIcon fontSize="small" color="action">
                                            <SearchIcon />
                                        </SvgIcon>
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Search resource/service"
                            variant="outlined"
                        />
                        <br/><br/>
                        <TextField style = {{width: 300}}
                            //fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SvgIcon fontSize="small" color="action">
                                            <NavigationIcon />
                                        </SvgIcon>
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="San Jose,CA"
                            variant="outlined"
                        />
                        <span>                            </span>
                        <TextField style = {{width: 300}}
                            //fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SvgIcon fontSize="small" color="action">
                                            <CircleIcon />
                                        </SvgIcon>
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="within 45 miles"
                            variant="outlined"
                        />
                        
                    </Box>
                    <Box sx={{ display:'flex',width: 200,
            alignItems: 'center'}}>
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/><br/>
            <Button style = {{width: 150,height :50}} color="primary" variant="contained">
            Search
            </Button>
        </Box >
        </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
);

export default GetHelpToolbar;
