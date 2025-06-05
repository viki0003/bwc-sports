import PageTitle from "../../../Components/Layout/UserDashLyout/PageTitle";

const MyPackagesPlans = () => {
  return (
    <>
      <PageTitle
        showDescription={true}
        description="Manage your current packages, view usage, and stay on top of renewals."
        showButton={false}
        title="My Packages & Plans"
      />
      <div className="payment-history">
        <h3>Active Subscription Overview</h3>
        <div className="trainer-management-table">
          <div className="trainer-management-table-body">
            <table>
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Package</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="payment-history">
        <h3>Usage Tracker</h3>
        <div className="trainer-management-table">
          <div className="trainer-management-table-body">
            <table>
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Package</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPackagesPlans;
