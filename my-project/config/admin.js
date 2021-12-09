module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '953df9eb0baa7345fc7e441629ed94f7'),
  },
});
