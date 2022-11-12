import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Avatar, Box, Toolbar } from "@mui/material";
// import { Logo } from './logo';
import Button from "@mui/material/Button";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar elevation={0} sx={{ backgroundColor: "#1e212a" }}>
      <Toolbar
        disableGutters
        sx={{
          alignItems: "center",
          display: "flex",
          minHeight: 64,
          px: 3,
          py: 1,
        }}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "200px" }}
            alt="icon"
            src="https://res.cloudinary.com/dfsn2ob9s/image/upload/v1667745789/Koinsandkash_wyo6en.png"
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Avatar alt="User" src="/static/user-chen_simmons.png" />

        <Button
        sx={{
          ml: 1
        }}
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
          variant="contained"
          color="error"
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};