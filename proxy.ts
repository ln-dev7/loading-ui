import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";
import { DOCS_CONTENT_ROUTE, DOCS_ROUTE } from "@/lib/constants";

const { rewrite: rewriteDocs } = rewritePath(
  `${DOCS_ROUTE}{/*path}`,
  `${DOCS_CONTENT_ROUTE}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `${DOCS_ROUTE}{/*path}.mdx`,
  `${DOCS_CONTENT_ROUTE}{/*path}/content.md`,
);

export default function proxy(request: NextRequest) {
  const result = rewriteSuffix(request.nextUrl.pathname);
  if (result) {
    return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const result = rewriteDocs(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return NextResponse.next();
}
