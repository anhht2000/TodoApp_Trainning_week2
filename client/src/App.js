import { createTheme, ThemeProvider } from "@material-ui/core";
import { green, orange, red } from "@material-ui/core/colors";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppProvider from "./context/AppProvider";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

export const theme = createTheme({
  color: {
    text: green[500],
  },
  palette: {
    secondary: {
      main: green[500],
    },
    primary: { main: red[400] },
  },
});

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path='*'>
            <MainLayout>
              <HomePage />
            </MainLayout>
          </Route>
        </Switch>
      </ThemeProvider>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppProvider>
  );
}

export default App;
