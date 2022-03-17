import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid, Pagination } from '@material-ui/core';
import ProductListToolbar from '../components/product/ProductListToolbar';

const ProductList = () => (
    <>
        <Helmet>
            <title>WeCare</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3,
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ pt: 3 }}>
                    {/* <Grid container spacing={3}>
                        {products.map((product) => (
                            <Grid item key={product.id} lg={4} md={6} xs={12}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid> */}
                    <ProductListToolbar />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 3,
                    }}
                >
                    {/* <Pagination color="primary" count={3} size="small" /> */}
                </Box>
            </Container>
        </Box>
    </>
);

export default ProductList;

// import * as React from 'react';
// import { Box, Card } from '@material-ui/core';
// import TextField from '@mui/material/TextField';

// export default function ProductList() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           required
//           id="outlined-required"
//           label="Required"
//           defaultValue="Hello World"
//         />
//         <TextField
//           disabled
//           id="outlined-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//         />
//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         <TextField
//           id="outlined-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField id="outlined-search" label="Search field" type="search" />
//         <TextField
//           id="outlined-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//         />
//       </div>
//       <div>
//         <TextField
//           required
//           id="filled-required"
//           label="Required"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           disabled
//           id="filled-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           id="filled-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="filled"
//         />
//         <TextField
//           id="filled-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//           variant="filled"
//         />
//         <TextField
//           id="filled-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="filled"
//         />
//         <TextField
//           id="filled-search"
//           label="Search field"
//           type="search"
//           variant="filled"
//         />
//         <TextField
//           id="filled-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           required
//           id="standard-required"
//           label="Required"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           disabled
//           id="standard-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           id="standard-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//         />
//         <TextField
//           id="standard-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//           variant="standard"
//         />
//         <TextField
//           id="standard-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="standard"
//         />
//         <TextField
//           id="standard-search"
//           label="Search field"
//           type="search"
//           variant="standard"
//         />
//         <TextField
//           id="standard-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
// }
