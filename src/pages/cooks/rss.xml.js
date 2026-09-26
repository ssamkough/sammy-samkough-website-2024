import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitize from "sanitize-html";
const parser = new MarkdownIt();

export async function GET(context) {
  const cooks = await getCollection("cooks");
  return rss({
    // `<title>` field in output xml
    title: "Sammy Samkough's Cooks",
    // `<description>` field in output xml
    description: "A place where I catalog my journey of cooking.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    trailingSlash: false,

    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: cooks.map((cook) => {
      const obj = {
        title: cook.data.title,
        description: cook.data.description,

        // must be valid date
        pubDate: new Date(cook),

        // Compute RSS link from post `slug`
        link: `/cooks/${cook.slug}`,

        // Note: this will not process components or JSX expressions in MDX files.
        content: sanitize(parser.render(cook.body), {
          allowedTags: sanitize.defaults.allowedTags.concat(["img"]),
        }),
      };
      return obj;
    }),

    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
