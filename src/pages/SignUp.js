import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://koinsandkash.vercel.app">
        Koins&Kash
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              Create A Free account
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              in less than 1 minute
            </Typography>
          </div>
        </AppBar>
      </Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  fullWidth
                  focused
                  id="firstName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  focused
                  type="text"
                  label="email"
                  name="Email"
                  id="email"
                  autoComplete="example@mail.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  focused
                  name="phone"
                  label="Phone Number"
                  type="text"
                  id="phone"
                  autoComplete="+234000000"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                focused
                  fullWidth
                  name="country"
                  label="Country"
                  type="text"
                  id="country"
                  autoComplete="Nigeria"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  focused
                  name="refferalCode"
                  label="Referral Code (optional)"
                  type="text"
                  id="referralCode"
                  autoComplete="0000"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  focused
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to Koins&Kash terms of acceptable use"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
