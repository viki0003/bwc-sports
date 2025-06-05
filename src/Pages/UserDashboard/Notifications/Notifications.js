import PageTitle from "../../../Components/Layout/UserDashLyout/PageTitle";
import './notifications.css';

const Notifications = () => {
  return (
    <>
      <PageTitle
        showDescription={true}
        description="Manage your current packages, view usage, and stay on top of renewals."
        showButton={false}
        title="Notifications"
      />
      <div className="notifications">
        <h2>Notification Preferences</h2>
        <div className="np-lists">
          <div className="np-list-item">
            <p>Email Updates</p>
            <div className="np-toggle">
              <input type="checkbox" className="checkboxInput" id="checkboxInput" />
              <label for="checkboxInput" class="toggleSwitch"></label>
            </div>
          </div>

          <div className="np-list-item">
            <p>SMS Reminders</p>
            <div className="np-toggle">
              <input type="checkbox" className="checkboxInput" />
              <label for="checkboxInput" class="toggleSwitch"></label>
            </div>
          </div>

          <div className="np-list-item">
            <p>Email Updates</p>
            <div className="np-toggle">
              <input type="checkbox" className="checkboxInput" />
              <label for="checkboxInput" class="toggleSwitch"></label>
            </div>
          </div>

          <div className="np-list-item">
            <p>Session Booking Confirmations</p>
            <div className="np-toggle">
              <input type="checkbox" className="checkboxInput" />
              <label for="checkboxInput" class="toggleSwitch"></label>
            </div>
          </div>

          <div className="np-list-item">
            <p>Session Modification / Cancel Alerts</p>
            <div className="np-toggle">
              <input type="checkbox" className="checkboxInput" />
              <label for="checkboxInput" class="toggleSwitch"></label>
            </div>
          </div>

          <div className="np-list-item">
            <p>Birthday Campaigns</p>
            <div className="np-toggle">
              <input type="checkbox" className="checkboxInput" />
              <label for="checkboxInput" class="toggleSwitch"></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Notifications;
