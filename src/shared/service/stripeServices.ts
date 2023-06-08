import { backendCall } from '../utils/backendService/backendCall';

export const getStripeCheckout = async (data: IStripe.ICheckoutParams) => {
  const _url = 'employer/subscription/checkout';
  let _response: IAPIResponse = { success: false, data };
  await backendCall({ url: _url, method: 'POST', data }).then(
    (response: any) => {
      const _data: IStripe.CheckoutPayload = {
        id: response.data.id,
        stripeUrl: response.data.url,
      };
      _response = {
        success: !response.error,
        data: _data,
      };
    }
  );

  return _response;
};
