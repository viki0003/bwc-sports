import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import MOUForm from "../Pages/MOUForm";
import CreateAccount from "../Pages/Authentication/CreateAccount/CreateAccount";
import Preferences from "../Pages/Preferences";
import { BuyPackages } from "../Pages/BuyPackages";
import { ListOfSports } from "../Pages/ListOfSports";
import Basketball from "../Pages/Basketball";
import { TimeSlot } from "../Pages/TimeSlot";
import { ConfirmationPopup } from "../Components/ConfirmationPopup";

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
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/list-of-sports" element={<ListOfSports />} />
        <Route path="/time-slot" element={<TimeSlot />} />
        <Route path="/buy-packages" element={<BuyPackages />} />
        <Route path="/confirmation-popup" element={<ConfirmationPopup />} />
        <Route element={<Layout />}>
          <Route path="/basketball" element={<Basketball />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
