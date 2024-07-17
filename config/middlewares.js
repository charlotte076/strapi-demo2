module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  // 添加 CORS 配置对象
  {
    name: "cors",
    config: {
      enabled: true,
      origin: [
        "https://radiant-frogs-686c42c943.strapiapp.com",
        "https://h5-t3.noahgrouptest.com",
      ], // 允许访问的域名
      credentials: true, // 允许携带 cookies
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
