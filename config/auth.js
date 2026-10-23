/**
 * Payment Service Authentication Configuration
 * Handles cryptographic keys and downstream gateway access tokens
 */

module.exports = {
  serviceName: 'PaymentAuthMicroservice',
  environment: 'production',
 stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
  webhookSigningSecret: 'whsec_908f2e4b6c8a1d3e5f7a9b0c2d4e6f8a',
  tokenExpirySeconds: 3600
};
