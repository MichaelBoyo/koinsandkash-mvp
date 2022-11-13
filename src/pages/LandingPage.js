import React from "react";
import "./LandingPage.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import Paper from "@mui/material/Paper";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LanguageIcon from "@mui/icons-material/Language";
import BottomNavigation from "@mui/material/BottomNavigation";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
const textProps = {
  color: "white",
  textAlign: "center",
  backgroundColor: "#1976d2",
  m: "auto",
  mt: 2,
  pr: 1,
  pl: 1,
  pt: 1,

  borderRadius: "10px",
};
const texts = [
  { text: "Perform all types of financial transactions in one place" },
  { text: " Reach your finance goal through our agents around you" },
  { text: "  More payment options to customers & do more with money" },
];

const action1 = [
  {
    icon: <PersonAddAltIcon color="primary" />,
    name: "Sign up",
    onclick: "app/sign-up",
  },
  {
    icon: <HowToRegIcon color="primary" />,
    name: "Sign in",
    onclick: "app",
  },
  {
    icon: <SearchIcon color="primary" />,
    name: `Agents`,
    onclick: "app/agents",
  },
];
const action2 = [
  {
    icon: <LanguageIcon color="primary" />,
    name: "visit Site",
    onClick: "app",
  },
  { icon: <LiveHelpIcon color="primary" />, name: "FAQs", onClick: "app/faq" },
  {
    icon: <SupportAgentIcon color="primary" />,
    name: "Help center",
    onClick: "app/support",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <CardMedia
            component="img"
            image="https://res.cloudinary.com/dfsn2ob9s/image/upload/v1667745789/Koinsandkash_wyo6en.png"
            alt="koins&kash"
          />
          <CardContent>
            {texts.map((text) => {
              return (
                <Typography
                  key={text.text}
                  sx={{ ...textProps }}
                  variant="h4"
                  gutterBottom
                >
                  {text.text}
                </Typography>
              );
            })}

            <Paper
              sx={{
                mt: 4,

                position: "fixed",
                bottom: 10,
                left: 0,
                right: 0,
                backgroundColor: "transparent",
              }}
              elevation={3}
            >
              <BottomNavigation
                showLabels
                sx={{ backgroundColor: "transparent" }}
              >
                {action1.map((action) => {
                  return (
                    <BottomNavigationAction
                      onClick={() => navigate(action.onclick)}
                      key={action.name}
                      label={action.name}
                      icon={
                        <Avatar sx={{ bgcolor: "white" }}>{action.icon}</Avatar>
                      }
                    />
                  );
                })}
              </BottomNavigation>
              <BottomNavigation
                showLabels
                sx={{ backgroundColor: "transparent" }}
              >
                {action2.map((action) => {
                  return (
                    <BottomNavigationAction
                      onClick={() => navigate(action.onClick)}
                      key={action.name}
                      label={action.name}
                      sx={{
                        mt: 1,
                      }}
                      icon={
                        <Avatar sx={{ bgcolor: "white" }}>{action.icon}</Avatar>
                      }
                    />
                  );
                })}
              </BottomNavigation>
            </Paper>
          </CardContent>
        </Box>
      </Container>
    </div>
  );
};

export default LandingPage;
