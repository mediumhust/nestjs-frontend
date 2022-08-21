import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import usePaymentForm from "./usePaymentForm";
import useSubscriptionConfirmation from "./useSubscriptionsConfirmation";

const PaymentForm = () => {
  const { handleSubmit } = usePaymentForm();
  const { confirmSubscription } = useSubscriptionConfirmation();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button>Pay</button>
      </form>
      <div>
        <a href="https://stripe.com/docs/testing#cards">Tesing card</a>
      </div>
      <div>
        <button onClick={confirmSubscription}>Subscription</button>
      </div>
    </div>
  );
};

export default PaymentForm;
