import favicon from "./extensions/WechatIMG5066.jpg";
const config = {
  locales: ["zh-Hans"],
  head: {
    favicon: favicon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
