import ReactDOM from "react-dom/client";
import Login from "./pages/LoginPage/LoginPage";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Edit from "pages/EditPage/EditPage";
import { useEffect } from "react";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";
import { Provider, useSelector } from "react-redux";
import store from "store/store";
import authService from "services/authService";
import Loading from "components/Loading/Loading";
import "bootstrap/dist/css/bootstrap.css";
import "index.css";

export default function App() {
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    authService.checkAuth();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Edit />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
