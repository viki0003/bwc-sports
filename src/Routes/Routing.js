import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Public Pages
import Login from "../Pages/Authentication/Login";
import CreateAccount from "../Pages/Authentication/CreateAccount/CreateAccount";
import MOUForm from "../Pages/MOUForm";

// Layouts
import Layout from "../Components/Layout/Layout";
import UserDashLayout from "../Components/Layout/UserDashLyout/UserDashLayout";

// Protected Pages
import Home from "../Pages/Home";
import Preferences from "../Pages/Preferences";
import { ListOfSports } from "../Pages/ListOfSports";
import { TimeSlot } from "../Pages/TimeSlot";
import { BuyPackages } from "../Pages/BuyPackages";
import { ConfirmationPopup } from "../Components/ConfirmationPopup";
import AddAChild from "../Pages/AddAChild";
import AddChildForm from "../Pages/AddChildForm";
import Dashboard from "../Pages/Dashboard";
import MySessions from "../Pages/MySessions";
import Fundraising from "../Pages/Fundraising";
import AfterSchoolProgram from "../Pages/AfterSchoolProgram";
import SummerCamp from "../Pages/SummerCamp";
import SchoolPrograms from "../Pages/SchoolPrograms";

// Sports Pages
import Soccer from "../Pages/Soccer";
import Football from "../Pages/Football";
import Baseball from "../Pages/Baseball";
import Basketball from "../Pages/Basketball";
import TrackAndField from "../Pages/TrackAndField";
import Golf from "../Pages/Golf";
import Fitness from "../Pages/Fitness";
import Bowling from "../Pages/Bowling";
import FieldDays from "../Pages/FieldDays";
import Profile from "../Pages/UserDashboard/Profile/Profile";
import YourPlayers from "../Pages/UserDashboard/YourPlayers/YourPlayers";
import SavedPaymentMethod from "../Pages/UserDashboard/PaymentsBillings/SavedPaymentMethod/SavedPaymentMethod";
import PaymentHistory from "../Pages/UserDashboard/PaymentsBillings/PaymentHistory/PaymentHistory";
import MyPackagesPlans from "../Pages/UserDashboard/MyPackagesPlans/MyPackagesPlans";
import ChangePassword from "../Pages/UserDashboard/ChangePassword/ChangePassword";
import Notifications from "../Pages/UserDashboard/Notifications/Notifications";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/create-an-account" element={<CreateAccount />} />
      <Route path="/mou-form" element={<MOUForm />} />
      <Route
        path="/preferences"
        element={
          <PrivateRoute>
            <Preferences />
          </PrivateRoute>
        }
      />
      <Route
        path="/list-of-sports"
        element={
          <PrivateRoute>
            <ListOfSports />
          </PrivateRoute>
        }
      />
      <Route
        path="/time-slot"
        element={
          <PrivateRoute>
            <TimeSlot />
          </PrivateRoute>
        }
      />
      <Route
        path="/buy-packages"
        element={
          <PrivateRoute>
            <BuyPackages />
          </PrivateRoute>
        }
      />
      <Route
        path="/confirmation-popup"
        element={
          <PrivateRoute>
            <ConfirmationPopup />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-a-child"
        element={
          <PrivateRoute>
            <AddAChild />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-child-form"
        element={
          <PrivateRoute>
            <AddChildForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/self-direction"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-sessions"
        element={
          <PrivateRoute>
            <MySessions />
          </PrivateRoute>
        }
      />
      <Route
        path="/fundraising"
        element={
          <PrivateRoute>
            <Fundraising />
          </PrivateRoute>
        }
      />

      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/soccer" element={<Soccer />} />
        <Route path="/football" element={<Football />} />
        <Route path="/baseball" element={<Baseball />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/track-and-field" element={<TrackAndField />} />
        <Route path="/golf" element={<Golf />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/bowling" element={<Bowling />} />
        <Route path="/field-days" element={<FieldDays />} />
        <Route path="/school-programs" element={<SchoolPrograms />} />
        <Route path="/after-school-programs" element={<AfterSchoolProgram />} />
        <Route path="/summer-camp" element={<SummerCamp />} />
      </Route>
      <Route
        element={
          <PrivateRoute>
            <UserDashLayout />
          </PrivateRoute>
        }
      >
        <Route path="/profile" element={<Profile />} />
        <Route path="/your-players" element={<YourPlayers />} />
        <Route path="/saved-payment-method" element={<SavedPaymentMethod />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/my-package-plans" element={<MyPackagesPlans />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
};

export default Routing;
