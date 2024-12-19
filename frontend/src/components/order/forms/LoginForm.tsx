import { Button, Grid, TextField, Typography } from "@mui/material";

function LoginForm() {
  return (
    <Grid container sx={{ displa: "flex", justifyContent: "space-between" }}>

      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          m: "1rem",
        }}
      >
        <TextField id="standard-basic" label="Enter Email" variant="standard" />
        <TextField
          id="standard-basic"
          label="Enter Mobile Number"
          variant="standard"
        />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: "small" }}
        >
          By continuing, you agree to Sinnchem's Terms of Use and Privacy
          Policy.{" "}
        </Typography>
        <Button variant="contained">CONTINUE</Button>
      </Grid>

      <Grid
        item
        md={5}
        sx={{
          display: { xs: "none", md: "block" },
          m: "1rem",
          // display: "flex",
          // flexDirection: "column",
          // gap: "1rem",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: "small" }}
        >
          Advantages of our secure login{" "}
        </Typography>
        <Typography variant="body1">Advantages of our secure login </Typography>
        <Typography variant="body1">Advantages of our secure login </Typography>
        <Typography variant="body1">Advantages of our secure login </Typography>
      </Grid>
      
    </Grid>
  );
}

export default LoginForm;
