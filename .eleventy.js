module.exports = function(eleventyConfig) {

  // Copying in _public files
  eleventyConfig.addPassthroughCopy({'./templates/_public/': './'});

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    dir: {
      input: "templates",
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: "_site"
    }
  }
};