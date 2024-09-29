
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import { unified } from "unified";
import hljs from "highlight.js";
import protobuf from "highlight.js/lib/languages/protobuf";
import { common } from "lowlight";

hljs.registerLanguage("proto", protobuf);

export async function renderMarkdown(markdown: string): Promise<string> {
    return unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeHighlight, { languages: { ...common, proto: protobuf } })
        .use(rehypeSlug)
        // @ts-expect-error can work?
        .use(rehypeStringify)
        .process(markdown)
        .then((res) => res.toString());
}