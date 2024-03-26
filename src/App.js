import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles";
import Router from "./router/Router";

function App() {
  const { router } = Router();
  return (
        <GlobalStyles>
            <RouterProvider router={router}/>
        </GlobalStyles>
  );
}

export default App;
