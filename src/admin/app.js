const config = {
  locales: ["zh-Hans"],
  translations: {
    "zh-Hans": {
      "Auth.form.welcome.title": "诺亚CMS内容平台",
      "Auth.form.welcome.subtitle": "登录到您的账户",
      "app.components.LeftMenu.navbrand.title": "亚CMS内容平台",
      "app.components.LeftMenu.navbrand.workplace": "我的工作区",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
