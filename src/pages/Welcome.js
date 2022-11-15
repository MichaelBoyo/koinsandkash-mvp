import React, { useContext } from "react";
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
import { firebase } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { emailValidator, passwordValidator } from "../utils/validators";
import { authContest } from "../store/AppContext";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        style={{
          textDecoration: "none",
        }}
        to="/forgot-password"
      >
        Koins&Kash
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const context = useContext(authContest);
  const [emailhelper, setEmailHelper] = React.useState("");
  const [passwordhelper, setPasswordHelper] = React.useState("");
  const [validInputs, setValidInputs] = React.useState(false);
  const [error, setError] = React.useState(false);
  const validateEmail = (email) => {
    if (emailValidator(email)) {
      setEmailHelper("");
      setValidInputs(true);
    } else {
      setEmailHelper("Invalid Email");
      setValidInputs(false);
    }
  };
  const validatePassword = (email) => {
    if (passwordValidator(email)) {
      setPasswordHelper("");
      setValidInputs(true);
    } else {
      setPasswordHelper(
        "Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
      );
      setValidInputs(false);
    }
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validInputs) {
      const data = new FormData(event.currentTarget);
      const user = {
        email: data.get("email"),
        password: data.get("password"),
      };

      const res = await firebase
        .post("/accounts:signInWithPassword", {
          ...user,
          returnSecureToken: true,
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        });

      if (res.status === 200) {
        navigate("/dashboard");
        localStorage.setItem("user", JSON.stringify(res.data));
        context.login(res.data.idToken);
      } else {
        setError(!error);
      }
    }
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
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              WHo owns this account
            </Typography>

            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              you can have a business or personal account
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                pt: 2,
                pb: 2,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              I am creating for my business
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                pt: 2,
                pb: 2,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              I am creating for myself
            </Button>
            <Grid
              sx={{
                position: "fixed",
                right: 0,
                bottom: 0,
                left: 0,
              }}
              container
            >
              <Grid
                sx={{
                  mr: 4,
                  ml: 4,
                }}
                item
              >
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to="/forgot-password"
                >
                  {"(©)  koins&kash"}
                </Link>
              </Grid>
              <Grid
                sx={{
                  ml: 5,
                }}
                item
              >
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to="/forgot-password"
                >
                  Terms & conditions
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
