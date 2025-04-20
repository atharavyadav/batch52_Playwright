module.exports = {
  default: {
    require: ["./step-definitions/**/*.js"],
    format: ["progress"],
    paths: ["./features/**/*.feature"],
    timeout: 90000, // Set global timeout to 60 seconds
  },
};