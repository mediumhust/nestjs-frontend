import { useStripe } from "@stripe/react-stripe-js";

function useSubscriptionConfirmation() {
  const stripe = useStripe();

  const confirmSubscription = async () => {
    /*     await fetch(
      `${process.env.REACT_APP_API_URL}/subscriptions/monthly`,
      {
        method: "POST",
        //credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
        },
      }
    ); */

    const subscriptionResponse = await fetch(
      `${process.env.REACT_APP_API_URL}/subscriptions/monthly`,
      {
        method: "GET",
        //credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
        },
      }
    );

    const subscriptionResponseJson = await subscriptionResponse.json();

    if (subscriptionResponseJson.status === "incomplete") {
      const secret =
        subscriptionResponseJson.latest_invoice.payment_intent.client_secret;

      await stripe?.confirmCardPayment(secret);
    }
  };

  return {
    confirmSubscription,
  };
}

export default useSubscriptionConfirmation;
