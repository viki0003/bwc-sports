import PageTitle from "../../../../Components/Layout/UserDashLyout/PageTitle";
import "./savedpaymentmethod.css";

const SavedPaymentMethod = () => {
  return (
    <>
      <PageTitle
        showDescription={false}
        showButton={true}
        buttonText="Add New Card"
        buttonLink="/AddNewCard"
        title="Saved Payment Method"
      />
      <div className="saved-payment-method">
        <div className="saved-payment-method-list">
          <div className="saved-payment-method-item">
            <h4>Card 1</h4>
            <form>
              <div className="form-group w-full">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" />
              </div>
              <div className="form-group">
                <label htmlFor="cardHolderName">Expiry Date</label>
                <input type="text" id="cardHolderName" />
              </div>
              <div className="form-group">
                <label htmlFor="cardHolderName">Card Code (CVC)</label>
                <input type="text" id="cardHolderName" />
              </div>
              <div className="form-group form-btns">
                <button className="btn black">Update Card Details</button>
                <button className="btn white">Remove Card</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SavedPaymentMethod;
