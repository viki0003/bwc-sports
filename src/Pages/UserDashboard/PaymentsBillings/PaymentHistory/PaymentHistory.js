import { Link } from "react-router-dom";
import PageTitle from "../../../../Components/Layout/UserDashLyout/PageTitle";
import "./paymenthistory.css";

const PaymentHistory = () => {
  return (
    <>
      <PageTitle
        showDescription={false}
        showButton={false}
        title="Payment History"
      />
      <div className="payment-history">
        <h3>Payment History</h3>
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
                  <td>Apr 10, 2025</td>
                  <td>1-on-1</td>
                  <td>$240</td>
                  <td>Paid</td>
                  <td>
                    <Link to="/invoice">Download PDF</Link>
                  </td>
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
export default PaymentHistory;
