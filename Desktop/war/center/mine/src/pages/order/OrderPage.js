import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckoutPage = () => {
  // State for all input fields
  const [name, setName] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="row w-100">
        {/* Left Section - 60% Width */}
        <div className="col-md-7">
          {/* Delivery Details - 80% Width Card */}
          <div className="card p-5 mb-4 mx-auto" style={{ width: "80%" }}>
            <h3 className="fw-bold">Delivery Details</h3>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Order Details</label>
              <input
                type="text"
                className="form-control"
                value={orderDetails}
                onChange={(e) => setOrderDetails(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+91 ____ ____"
              />
            </div>
          </div>

          {/* Payment Method with Dropdown */}
          <div className="card p-5 mx-auto" style={{ width: "80%" }}>
            <h3 className="fw-bold">Payment Method</h3>
            <div className="mt-3">
              <label className="form-label">Choose Payment Method</label>
              <select
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="online">Online Payment</option>
                <option value="offline">Cash on Delivery</option>
              </select>
            </div>

            {/* Payment Selection Text */}
            <div className="mt-4">
              {paymentMethod === "online" ? (
                <h5 className="text-success">You have selected Online Payment.</h5>
              ) : (
                <h5 className="text-danger">You have selected Cash on Delivery.</h5>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="col-md-5">
          <div className="card p-4">
            <h4 className="fw-bold">Order Summary</h4>
            <p>Subtotal (8 items): <strong>$71.70</strong></p>
            <p>Saving: <span className="text-danger">-$2.79</span></p>
            <h5 className="fw-bold">Estimated total: <span className="text-primary">$68.91</span></h5>

            <div className="alert alert-warning mt-3">
              There is a weighted product in the cart. The actual amount may differ from the indicated amount.
            </div>

            <div className="form-check mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                checked={isConfirmed}
                onChange={() => setIsConfirmed(!isConfirmed)}
              />
              <label className="form-check-label">
                I confirm that I am at least <strong>18 years old</strong>.
              </label>
            </div>

            <button className="btn btn-danger w-100 mt-3">Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
