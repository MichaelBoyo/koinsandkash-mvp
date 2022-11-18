import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";

export const Navbar = () => {
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
      </Toolbar>
    </AppBar>
  );
};
