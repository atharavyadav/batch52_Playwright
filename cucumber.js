module.exports = {
  default: {
    require: ["./step-definitions/**/*.js"], // Path to step definitions
    format: ["progress"], // Output format
    paths: ["./features/**/*.feature"], // Path to feature files
    tags: process.env.TAGS || "", // Use the TAGS environment variable or default to no tags
    timeout: 90000, // Set global timeout to 90 seconds
  },
};