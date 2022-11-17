
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

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
          <Box component="form" noValidate sx={{ mt: 3 }}>
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
              onClick={() => navigate("/dashboard")}
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
              onClick={() => navigate("/dashboard")}
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
