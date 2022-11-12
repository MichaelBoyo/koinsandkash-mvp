import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
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
export default function SimpleBottomNavigation() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          bgcolor: "transparent",
        }}
      >
        <BottomNavigation
          showLabels
          sx={{
            bgcolor: "transparent",
          }}
        >
          {action1.map((action) => {
            return (
              <BottomNavigationAction
                onClick={() => navigate(action.onclick)}
                key={action.name}
                label={action.name}
                icon={
                  <Avatar
                    sx={{ bgcolor: "white" }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                  >
                    {action.icon}
                  </Avatar>
                }
              />
            );
          })}
        </BottomNavigation>
      </Box>
      <Box sx={{ pt: 2 }}></Box>
      <Box
        sx={{
          bgcolor: "transparent",
        }}
      >
        <BottomNavigation
          showLabels
          sx={{
            bgcolor: "transparent",
          }}
        >
          {action2.map((action) => {
            return (
              <BottomNavigationAction
                key={action.name}
                onClick={() => navigate(action.onClick)}
                label={action.name}
                icon={
                  <Avatar
                    sx={{ bgcolor: "white" }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                  >
                    {action.icon}
                  </Avatar>
                }
              />
            );
          })}
        </BottomNavigation>
      </Box>
    </>
  );
}
