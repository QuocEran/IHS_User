module.exports = {
  devServer: {
    port: 8000,
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/IHS_User/" // Thay tên repository của các bạn vào đây nhé
      : "/",
};
