'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-auth')
      .service('myService')
      .getWelcomeMessage();
  },
});
