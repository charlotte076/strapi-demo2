module.exports = {
  "preview-button": {
    config: {
      contentTypes: [
        // 例如，为你的 "Article" 内容类型添加预览按钮：
        {
          uid: "api::title2.title2", // 替换成你的内容类型 UID
          draft: {
            url: "https://h5-t3.noahgrouptest.com/subapps/noah-chat-h5/index.html#/strapi",
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
