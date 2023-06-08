const environment = {
  /* ----------------- production url --------------------- */
  // baseUrl: "",
  // serverUrl: "",
  /* ----------------------------------------------------- */

  /* -------------------- staging url --------------------- */
  baseUrl: 'https://backend.jobboarding.codesorbit.net/api/',
  serverUrl: 'https://backend.jobboarding.codesorbit.net/',
  /* ----------------------------------------------------- */

  appUrl: window.location.origin,
  googleClientId:
    '244211526007-4dsocmh3ljm4cj83uvspv03vusd1eco9.apps.googleusercontent.com',
  facebookAppId: '627799544987034',

  /* ----------------- production Stripe Public Key --------------------- */
  // stripePublicKey: "",
  /* ------------------------------------------------------------------ */

  /* -------------------- Staging Stripe Public Key --------------------- */
  stripePublicKey: '',
  /* ------------------------------------------------------------------- */
  guestToken: '',
};

export default environment;
