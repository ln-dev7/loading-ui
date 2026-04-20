import { InferPageType, loader } from "fumadocs-core/source";
import { docs } from "collections/server";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { DOCS_CONTENT_ROUTE, DOCS_ROUTE } from "./constants";

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: DOCS_ROUTE,
  plugins: [lucideIconsPlugin()],
});

export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: `${DOCS_CONTENT_ROUTE}/${segments.join("/")}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
