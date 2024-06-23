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
import { useEffect, useState } from "react";
import axios from "services/api";
import useArray from "hooks/useArray";
import Loading from "components/Common/Loading/Loading";

export default function App() {
  const loggedIn = cookie.load("token");
  const notes = useArray([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res = await axios.get("/notes");
      notes.set(res.data);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={loggedIn ? <Outlet /> : <Navigate to="/login" />}>
            <Route path="/edit" element={<Edit notes={notes} />} />
            <Route path="/home" element={<Home notes={notes} />} />
          </Route>

          <Route
            path="/login"
            element={loggedIn ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
