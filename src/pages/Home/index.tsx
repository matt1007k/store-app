import { Header } from "../../layout";
import { Products } from "../../components";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button, { ButtonProps } from "@mui/material/Button";
import { amber, orange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "350px",
  maxWidth: "100%",
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(amber[500]),
  backgroundColor: amber[500],
  "&:hover": {
    backgroundColor: amber[700],
  },
}));
const ColorButton2 = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[900]),
  backgroundColor: "transparent",
  border: "1px solid",
  borderColor: amber[500],
  minWidth: 120,
  "&:hover": {
    backgroundColor: amber[600],
  },
}));

const HomePage = () => {
  return (
    <>
      <Header />

      <Box sx={{ flexGrow: 1, margin: 5 }}>
        <Grid container marginBottom={5}>
          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginBottom={3}
          >
            <Typography variant="h2" component="h3">
              Experience Results-Driven Success
            </Typography>
            <p>
              It is a long established fact that a reader will distracted by the
              readable content of a page when looking.
            </p>
            <Grid item display="flex" gap={1} flexDirection="row" marginTop={4}>
              <Grid item xs={6}>
                <ColorButton variant="contained">Shop Now</ColorButton>
              </Grid>
              <Grid item xs={6}>
                <ColorButton2 variant="contained">View More</ColorButton2>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Img
              alt="imgdd"
              src="https://www.formulatv.com/images/series/posters/000/45/dest_1.jpg"
            />
          </Grid>
        </Grid>

        <h3>Products</h3>
        <Grid container spacing={2}>
          <Products />
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
