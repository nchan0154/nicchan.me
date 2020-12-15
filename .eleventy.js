const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlMinTransform = require('./utils/transforms/htmlmin.js')
const contentParser = require('./utils/transforms/contentParser.js')
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const rssPlugin = require('@11ty/eleventy-plugin-rss')
const fs = require('fs')
const util = require('util');


/**
 * Import site configuration
 */
const siteConfig = require('./src/_data/config.json')

module.exports = function (eleventyConfig) {
  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./bundle/')

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig.addPassthroughCopy({
    './static': '.'
  })
  eleventyConfig.addPassthroughCopy({
    bundle: 'assets'
  })

  /**
   * Add filters
   *
   * @link https://www.11ty.io/docs/filters/
   */
  dayjs.extend(customParseFormat)
  eleventyConfig.addFilter('monthYear', function (date) {
    return dayjs(date).format('MMMM YYYY')
  })
  // robot friendly date format for crawlers
  eleventyConfig.addFilter('htmlDate', function (date) {
    return dayjs(date).format()
  })
  eleventyConfig.addFilter('console', function (value) {
    return util.inspect(value);
  });

  /**
   * Add Transforms
   *
   * @link https://www.11ty.io/docs/config/#transforms
   */
  if (process.env.ELEVENTY_ENV === 'production') {
    // Minify HTML when building for production
    eleventyConfig.addTransform('htmlmin', htmlMinTransform)
  }
  // Parse the page HTML content and perform some manipulation
  eleventyConfig.addTransform('contentParser', contentParser)

  /**
   * Add Plugins
   * @link https://github.com/11ty/eleventy-plugin-rss
   * @link https://github.com/11ty/eleventy-plugin-syntaxhighlight
   * @link https://github.com/okitavera/eleventy-plugin-pwa
   */
  eleventyConfig.addPlugin(rssPlugin)
  eleventyConfig.addPlugin(syntaxHighlightPlugin)

  /**
   * Create custom data collections
   * for blog and feed
   * Code from https://github.com/hankchizljaw/hylia
   */
  // Blog posts collection
  const now = new Date()
  const livePosts = post => post.date <= now && !post.data.draft
  eleventyConfig.addCollection('posts', collection => {
    return [
      ...collection
      .getFilteredByGlob(
        `./${siteConfig.paths.src}/${siteConfig.paths.blogdir}/**/*`
      )
      .filter(livePosts),
    ]
  })

  eleventyConfig.addCollection('projects', collection => {
    return [
      ...collection.getFilteredByTag("projects")
    ].reverse();
  });

  /**
   * Cloudinary Shortcodes
   */
  eleventyConfig.cloudinaryCloudName = 'nicchan'
  eleventyConfig.addShortcode('cloudinaryImage', function (path, alt, width, height, sizes, loading, className, transforms, attributes) {
    const multipliers = [0.25, 0.35, 0.5, 0.65, 0.75, 0.85, 1, 1.1, 1.25, 1.5, 1.75, 2];
    let srcSetArray = []
    multipliers.forEach(multiplier => {
      let currentWidth = Math.round(multiplier * width);
      srcSetArray.push(`https://res.cloudinary.com/${eleventyConfig.cloudinaryCloudName}/image/upload/f_auto,q_auto,c_limit,w_${currentWidth}/${path} ${currentWidth}w`)
    });
    return `
      <img ${className? 'class="' + className + '"' : ''}
        src="https://res.cloudinary.com/${eleventyConfig.cloudinaryCloudName}/image/upload/f_auto,q_auto,c_limit,${transforms ? transforms : ''}/${path}"
        srcset="${srcSetArray.join(', ')}"
        alt="${alt}"
        ${loading ? "loading='" + loading + "'" : ''}
        width="${width}"
        height="${height}"
        sizes="${sizes}"
        ${attributes? attributes: ''}
        >`
  })
  /**
   * Templating Shortcodes
   */
  eleventyConfig.addPairedNunjucksShortcode("projectRow", function(content, color, caption) {
    let tag = 'div';
    let captionMarkup = '';
    if (caption) {
      tag = 'figure'
      captionMarkup = `<figcaption class="project-media__caption h4">${caption}</figcaption>`
    }
    return `<${tag} class="project-media" style="background-color: ${color}">
      ${content}
      ${captionMarkup}
      </${tag}>`;
  });

  eleventyConfig.addPairedNunjucksShortcode("projectColumn", function(content, width) {
    return `<div class="project-media__column--${width}">
      ${content}
      </div>`;
  });

  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: false,
    open: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match
        },
      },
    },
    // Set local server 404 fallback
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {
            'Content-Type': 'text/html'
          });
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  /*
   * Disable use gitignore for avoiding ignoring of /bundle folder during watch
   * https://www.11ty.dev/docs/ignores/#opt-out-of-using-.gitignore
   */
  eleventyConfig.setUseGitIgnore(false);

  /**
   * Eleventy configuration object
   */
  return {
    dir: {
      input: siteConfig.paths.src,
      includes: siteConfig.paths.includes,
      layouts: `${siteConfig.paths.includes}/layouts`,
      output: siteConfig.paths.output,
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
