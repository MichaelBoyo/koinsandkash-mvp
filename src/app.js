import { useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { routes } from "./routes";
import WhatsApp from "./components/Whatsapp";
import AuthProvider from "./store/AppContext";

const App = () => {
  const content = useRoutes(routes);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {content}
        <WhatsApp />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
