import {createEditor, LineBreakNode, ParagraphNode, TextNode} from "lexical";
import {ListItemNode, ListNode} from "@lexical/list";
import {AutoLinkNode, LinkNode} from "@lexical/link";
import {OverflowNode} from "@lexical/overflow";
import {HeadingNode, QuoteNode, registerRichText} from "@lexical/rich-text";
import {MarkNode} from "@lexical/mark";
import {CodeHighlightNode, CodeNode} from "@lexical/code";
import {registerMarkdownShortcuts, TRANSFORMERS} from "@lexical/markdown";


const editor = createEditor({
    nodes: [
        LineBreakNode,
        ParagraphNode,
        TextNode,
        LinkNode,
        HeadingNode,
        QuoteNode,
        ListNode,
        ListItemNode,
        CodeHighlightNode,
        CodeNode,
        MarkNode,
        OverflowNode,
        AutoLinkNode
    ],
    onError: console.error,
});

registerRichText(editor);
registerMarkdownShortcuts(editor, TRANSFORMERS)

let elementById = document.getElementById("editor")
editor.setRootElement(elementById)
