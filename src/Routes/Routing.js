import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import MOUForm from "../Pages/MOUForm";
import CreateAccount from "../Pages/Authentication/CreateAccount/CreateAccount";
import Preferences from "../Pages/Preferences";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-an-account" element={<CreateAccount />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/mou-form" element={<MOUForm />} />
        <Route path="/preferences" element={<Preferences/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
