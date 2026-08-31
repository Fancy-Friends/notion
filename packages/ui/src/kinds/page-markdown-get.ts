/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/page-markdown-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/page-markdown-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- notion
 */

/**
 * Notion page Markdown — Retrieve a Notion page's content as enhanced
 * Markdown.
 *
 * https://developers.notion.com/reference/retrieve-page-markdown
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { notionMeta } from "../service.js";

export const NOTION_PAGE_KIND = "@particle-academy/notion_page";
export const NOTION_PAGE_OPERATION = "page_markdown_get";

export const NOTION_PAGE_META = notionMeta("action", "retrieve page Markdown", "https://developers.notion.com/reference/retrieve-page-markdown");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const NOTION_PAGE_OUTPUT: OutputField[] = [
  {
    "path": "data.object",
    "type": "string",
    "description": "The literal response object type, page_markdown."
  },
  {
    "path": "data.id",
    "type": "string",
    "description": "The page UUID."
  },
  {
    "path": "data.markdown",
    "type": "string",
    "description": "The page content in Notion enhanced Markdown."
  },
  {
    "path": "data.truncated",
    "type": "boolean",
    "description": "Whether the returned Markdown was truncated."
  },
  {
    "path": "data.unknown_block_ids",
    "type": "array",
    "description": "Block ids whose types could not be represented in Markdown."
  }
];

export const notionPageKind: NodeKindDefinition = defineConnectorKind(NOTION_PAGE_META, {
  name: NOTION_PAGE_KIND,
  aliases: ["notion_page"],
  label: "Notion page Markdown",
  description: "Retrieve a Notion page's content as enhanced Markdown.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: NOTION_PAGE_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "pageId",
      "label": "Page ID",
      "required": true,
      "description": "The Notion page UUID, with or without hyphens. The connection must have Read content capability and access to this page."
    },
    {
      "type": "switch",
      "key": "includeTranscript",
      "label": "Include transcript",
      "default": false,
      "description": "Include meeting-note transcripts when the connection and caller are permitted to read them."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(NOTION_PAGE_META, config as Record<string, unknown>, "retrieve page Markdown"),
});
