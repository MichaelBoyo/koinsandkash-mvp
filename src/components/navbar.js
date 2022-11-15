import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Avatar, Box, Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
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
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <NotificationsIcon color="secondary" />
          </StyledBadge>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

        <Button
          endIcon={<LogoutIcon />}
          sx={{
            ml: 1,
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
