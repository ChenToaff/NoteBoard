import ReactDOM from "react-dom/client";
import cookie from "react-cookies";
import Login from "./pages/LoginPage/LoginPage";
import "index.css";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import Navbar from "components/Common/Navbar/Navbar";
import Edit from "pages/EditPage/EditPage";
import Home from "pages/ViewPage/ViewPage";
import ProtectedRoute from "components/Common/ProtectedRoute/ProtectedRoute";
import { Provider, useSelector } from "react-redux";
import store from "store/store";
import authService from "services/authService";

export default function App() {
  const loggedIn = cookie.load("token");
  const notes = useArray([]);

  useEffect(() => {
    async function loadData() {
      const res = await axios.get("/notes");
      notes.set(res.data);
    }
    loadData();
  }, []);

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route
            path="/edit"
            element={
              <ProtectedRoute>
                <Edit />
              </ProtectedRoute>
            }
          />
            <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
