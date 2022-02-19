module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '85edd239e964283a8af62877fb8d518e'),
  },
});
