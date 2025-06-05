import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import MOUForm from "../Pages/MOUForm";
import CreateAccount from "../Pages/Authentication/CreateAccount/CreateAccount";
import Preferences from "../Pages/Preferences";
import { BuyPackages } from "../Pages/BuyPackages";
import { ListOfSports } from "../Pages/ListOfSports";
import Basketball from "../Pages/Basketball";
import Football from "../Pages/Football";
import Soccer from "../Pages/Soccer";
import Baseball from "../Pages/Baseball";
import TrackAndField from "../Pages/TrackAndField";
import Golf from "../Pages/Golf";
import Fitness from "../Pages/Fitness";
import AddAChild from "../Pages/AddAChild";
import Bowling from "../Pages/Bowling";
import FieldDays from "../Pages/FieldDays";
import { TimeSlot } from "../Pages/TimeSlot";
import { ConfirmationPopup } from "../Components/ConfirmationPopup";
import SchoolPrograms from "../Pages/SchoolPrograms";
import AfterSchoolProgram from "../Pages/AfterSchoolProgram";
import SummerCamp from "../Pages/SummerCamp";
import Dashboard from "../Pages/Dashboard";
import MySessions from "../Pages/MySessions";
import Fundraising from "../Pages/Fundraising";
import UserDashLayout from "../Components/Layout/UserDashLyout/UserDashLayout";
import Profile from "../Pages/UserDashboard/Profile/Profile";
import YourPlayers from "../Pages/UserDashboard/YourPlayers/YourPlayers";
import SavedPaymentMethod from "../Pages/UserDashboard/PaymentsBillings/SavedPaymentMethod/SavedPaymentMethod";
import PaymentHistory from "../Pages/UserDashboard/PaymentsBillings/PaymentHistory/PaymentHistory";
import MyPackagesPlans from "../Pages/UserDashboard/MyPackagesPlans/MyPackagesPlans";
import ChangePassword from "../Pages/UserDashboard/ChangePassword/ChangePassword";
import Notifications from "../Pages/UserDashboard/Notifications/Notifications";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-an-account" element={<CreateAccount />} />
        <Route path="/mou-form" element={<MOUForm />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/list-of-sports" element={<ListOfSports />} />
        <Route path="/time-slot" element={<TimeSlot />} />
        <Route path="/buy-packages" element={<BuyPackages />} />
        <Route path="/confirmation-popup" element={<ConfirmationPopup />} />
        <Route path="/add-a-child" element={<AddAChild />} />
        <Route path="/dashboard/self-direction" element={<Dashboard />} />
        <Route path="/my-sessions" element={<MySessions />} />
        <Route path="/fundraising" element={<Fundraising />} />
        <Route element={<Layout />}>
          <Route path="/soccer" element={<Soccer />} />
          <Route path="/football" element={<Football />} />
          <Route path="/baseball" element={<Baseball />} />
          <Route path="/track-and-field" element={<TrackAndField />} />
          <Route path="/golf" element={<Golf />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/home" element={<Home />} />
          <Route path="/school-programs" element={<SchoolPrograms />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/bowling" element={<Bowling />} />
          <Route path="/field-days" element={<FieldDays />} />
          <Route
            path="/after-school-programs"
            element={<AfterSchoolProgram />}
          />
          <Route path="/summer-camp" element={<SummerCamp />} />
        </Route>
        <Route element={<UserDashLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/your-players" element={<YourPlayers />} />
          <Route path="/saved-payment-method" element={<SavedPaymentMethod />} />
          <Route path="/payment-history" element={<PaymentHistory />} />
          <Route path="/my-package-plans" element={<MyPackagesPlans />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
