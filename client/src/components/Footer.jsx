import React from "react";
import {Typography, Link ,Box ,Grid ,List, createTheme, ThemeProvider, Divider} from "@mui/material";
import  MUIListItemButton from '@mui/material/ListItemButton'
import '@fontsource/poppins';
import  { styled } from "@mui/material";



const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, san-serif',
  },

});

const ListItemButton = styled(MUIListItemButton)({
    paddingLeft: 0,
    fontFamily: 'Poppins, san-serif',
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box component="footer"
      sx={{
        paddingTop: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 5,
      }}
    >
        {/* <Divider /> */}
        <Grid container gap={5} 
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>

            {/* first grid item  */}
            <Grid items  sx={{}}>
                <Typography  variant="h5"> About</Typography>
                <List>
                  <ListItemButton>
                    About Us
                  </ListItemButton>
                  <ListItemButton>
                    Privacy Policy
                  </ListItemButton>
                  <ListItemButton>
                    Partnerships
                  </ListItemButton>
                  <ListItemButton>
                    Terms & Services
                  </ListItemButton>
                </List>
              
            </Grid>
            {/* second grid item */}
            <Grid items sx={{}}>
              <Typography   variant="h5"> Support</Typography>
                <List>
                  <ListItemButton>
                    Help & Support
                  </ListItemButton>
                  <ListItemButton>
                    Trust & Sagety
                  </ListItemButton>
                  <ListItemButton>
                    Products
                  </ListItemButton>
                </List>
              
            </Grid>

            {/* third grid item */}
            <Grid items sx={{}}>
              <Typography  variant="h5">Community</Typography>
                <List>
                  <ListItemButton>
                    Customer Success Stories
                  </ListItemButton>
                  <ListItemButton>
                    Community Hub
                  </ListItemButton>
                  <ListItemButton>
                    Forum 
                  </ListItemButton>
                  <ListItemButton>
                    Events
                  </ListItemButton>
                  <ListItemButton>
                    Invite a Friend
                  </ListItemButton>
                </List>
            </Grid>

            {/* fourth grid item */}
            <Grid items sx={{}}>
              <Typography  variant="h5">Contact </Typography>
                <List>
                  <ListItemButton>
                    Contact Us
                  </ListItemButton>

                </List>
              
            </Grid>
        </Grid>
      </Box>
      </ThemeProvider>
  );
};

export default Footer;
