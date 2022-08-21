import "./App.css";
import GoogleButton from "./GoogleButton";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

function App() {
  return (
    <div className="App">
      <GoogleButton />
      <hr />
      <div>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
    </div>
  );
}

export default App;
