import React from "react";
import "./LandingPage.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import MyButtons from "./MyButtons";

const textProps = {
  color: "white",
  textAlign: "center",
  backgroundColor: "#1976d2",
  margin: "auto",
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

const LandingPage = () => {
  return (
    <div className="landing">
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh", pt:7  }}>
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

            <Box sx={{ pb: 5 }}></Box>
            <MyButtons />
          </CardContent>
        </Box>
      </Container>
    </div>
  );
};

export default LandingPage;
