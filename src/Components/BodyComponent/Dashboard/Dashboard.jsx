import React from "react";
// import { Box, Card, Grid, Typography, Button } from "@material-ui/core";

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Grid from '@mui/material/Grid';


export default function Dashboard() {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1180,
          height: 280,
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
          borderRadius: 5,
          
        }
      }}
    >
      
      <Paper />
      
    </Box>
    <br/>
   
    {/* <Grid container rowSpacing={1} >
        <Grid item xs={6}  >
             <Button variant="contained"> <DownloadIcon/> Download play store</Button>
        </Grid>
        <Grid item xs={6} >
            <Button variant="contained"> <DownloadIcon/> Download App store</Button>
          </Grid>
    </Grid> */}

<Box
  m={5}
  display="flex"
  flexDirection="row"
  justifyContent="right"
  alignItems="right"
>
        <Grid item xs={6} sx={{top: 0,left: -300}} p={1} m={1} container justifyContent="flex-end" >
             <Button variant="contained"> <AndroidIcon/>  Download play store</Button>
        </Grid>
        
        <Grid item xs={6} p={1} m={1} >
             <Button variant="contained"> <AppleIcon/> Download App store</Button>
        </Grid>
  
</Box>


<Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 5,
          width:300,
          height: 400,
          backgroundColor: "#222222",
          opacity: [0.2, 0.3, 0.4],
          borderRadius: 8,
          
        },
      }}
    >
     
      <Paper variant="outlined"  square  sx={{alignItems:"center"}}/>
    
    </Box>



<Box
    sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 5,
          width:300,
          height: 400,
          backgroundColor: "#222222",
          opacity: [0.2, 0.3, 0.4],
          borderRadius: 8
        },
      }}
    >
     
      <Paper variant="outlined"  square  sx={{alignItems:"center"}}/>
    
    </Box>
    </>
  );
}