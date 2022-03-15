module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0b0d21165660d95e0a3bd707e6f9711b'),
  },
});
