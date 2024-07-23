module.exports = {
  "preview-button": {
    config: {
      contentTypes: [
        // 例如，为你的 "Article" 内容类型添加预览按钮：
        {
          uid: "api::title2.title2", // 替换成你的内容类型 UID
          draft: {
            url: "https://noah-live.noahgrouptest.com/#/strapi-demo",
            query: {
              type: "post",
              slug: "{id}",
            },
          },
        },
      ],
    },
  },
};
