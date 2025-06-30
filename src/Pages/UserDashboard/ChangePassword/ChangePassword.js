import PageTitle from "../../../Components/Layout/UserDashLyout/PageTitle";
import "./changepassword.css";

const ChangePassword = () => {
  return (
    <>
      <PageTitle
        showDescription={false}
        showButton={false}
        title="Change Your Password"
      />
      <div className="change-password">
        <form>
          <div className="form-group">
            <label htmlFor="currentPassword">
              Current password (leave blank to leave unchanged)
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          <button type="submit" className="btn black">
            Update Password
          </button>
        </form>
      </div>
    </>
  );
};
export default ChangePassword;
