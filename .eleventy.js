module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/resources");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
