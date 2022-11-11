import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                style={{
                width: "100px"
                }}
                src="https://res.cloudinary.com/dfsn2ob9s/image/upload/v1668165833/K_K_logo_6_cg6ira.png"
                alt="KoinsAndKash"
              />
            </Typography>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button onClick={()=> navigate(`/${window.location.pathname === "/" ? "login" : ""}`)} sx={{
                backgroundColor: "white",
                font: "bold",
                color :"#1976d2"
          }} variant="contained">
            {window.location.pathname === "/" ? "Login" : "Register"}
         
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
