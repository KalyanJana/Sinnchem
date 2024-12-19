import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import LoginForm from "./forms/LoginForm";

function LoginDetails() {
  return (
    <Card>      
        <LoginForm />
        <Grid container sx={{m: '1rem'}}>

            <Grid item xs={9} sx={{display: 'flex', justifyContent: 'flex-start', gap: '1rem'}}>
                <Typography variant="subtitle1">1</Typography>
                <Box>
                    <Typography variant="body1">
                            LOGIN{" "}
                            <CheckIcon
                                sx={{
                                fontSize: "inherit",
                                verticalAlign: "center",
                                color: "blue",
                                ml: "0.3rem",
                                }}
                            />
                    </Typography>
                    <Typography>
                        Name - +91 9733241500
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={3}>
                <Button variant="outlined">CHANGE</Button>
            </Grid>

        </Grid>

    </Card>
  );
}

export default LoginDetails;
