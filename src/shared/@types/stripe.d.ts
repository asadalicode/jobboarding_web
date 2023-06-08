declare namespace IStripe {
  interface ICheckoutParams {
    plan_id: string;
  }
  interface CheckoutPayload {
    id: string;
    stripeUrl: string;
  }
}
