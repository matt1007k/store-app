import { Header } from "../../layout"
import { MediaCard } from "../../components"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import Typography from "@mui/material/Typography";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  width: '350px',
  maxWidth: '100%',
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const index = () => {

  return (
    <>
      <Header />

      <Box sx={{ flexGrow: 1, margin:5 }} >
        <Grid container marginBottom={5} >
          <Grid item xs={6} display='flex' flexDirection='column' justifyContent='center' >
            <Typography variant="h2" component="h3">
              Experience Results-Driven Success
            </Typography>
            <p>It is a long established fact that a reader will distracted by the readable content of a page when looking.</p>
            <Grid item display='flex' flexDirection="row" marginTop={4}>
              <Grid item xs={6}>
                <ColorButton variant="contained">Shop Now</ColorButton>
              </Grid>
              <Grid item xs={6}>
              <Button variant="contained" color="success">Success</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Img alt="imgdd" src="https://www.formulatv.com/images/series/posters/000/45/dest_1.jpg" />
          </Grid>
          
        </Grid>
        
        <h3>Products</h3>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
        </Grid>

      </Box>
      
    </>
  )
}

export default index