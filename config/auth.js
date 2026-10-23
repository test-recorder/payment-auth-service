/**
 * Payment Service Authentication Configuration
 * Handles cryptographic keys and downstream gateway access tokens
 */

module.exports = {
  serviceName: 'PaymentAuthMicroservice',
  environment: 'production',
  stripeSecretKey: 'sk_live_51Mz9qKL8v0X2bA4YQ9w8e7r6t5y4u3i2o1p',
  webhookSigningSecret: 'whsec_908f2e4b6c8a1d3e5f7a9b0c2d4e6f8a',
  tokenExpirySeconds: 3600
};
