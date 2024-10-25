import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const notes = await getCollection("notes");
  return rss({
    // `<title>` field in output xml
    title: "Sammy Samkough's Notes",
    // `<description>` field in output xml
    description: "A place where I store all my thoughts.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    trailingSlash: false,

    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: notes.map((note) => {
      const obj = {
        title: note.data.title,
        description: note.data.description,

        // must be valid date
        pubDate: new Date(note.data.publishedDate),

        // Compute RSS link from post `slug`
        link: `/notes/${note.slug}`,

        // Note: this will not process components or JSX expressions in MDX files.
        // content: sanitizeHtml(parser.render(post.body), {
        //   allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        // }),
      };
      console.log("opbk", obj);
      return obj;
    }),

    // (optional) inject custom xml
    // customData: `<language>en-us</language>`,
  });
}
