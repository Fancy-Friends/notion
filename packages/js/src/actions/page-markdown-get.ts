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
 * Retrieve a Notion page's content as enhanced Markdown.
 *
 * GET /v1/pages/{pageId}/markdown —
 * https://developers.notion.com/reference/retrieve-page-markdown
 *
 * Notice what is NOT here: no key, no base URL, no mode check, no retry loop,
 * no fake/real branch. This describes the request; callConnector resolves the
 * connection, picks the estate, and either calls Notion or calls the faker.
 */

import {
  callConnector,
  type ConnectorResult,
  type RequestedMode,
  type Transport,
} from "@particle-academy/fancy-connector-core";
import { NOTION } from "../service.js";

export const PAGE_MARKDOWN_GET_OPERATION = "page_markdown_get";

export type PageMarkdownGetOptions = {
  /** The node's resolved config. Keys: pageId, includeTranscript. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function notionPageMarkdownGet(options: PageMarkdownGetOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.pageId === undefined || config.pageId === null || config.pageId === "") {
    throw new Error(`page_markdown_get: "pageId" is required (Page ID).`);
  }

  return callConnector(NOTION, {
    operation: PAGE_MARKDOWN_GET_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "GET",
      path: `/v1/pages/${encodeURIComponent(String(config.pageId))}/markdown`,
      query: {
        "include_transcript": config.includeTranscript !== undefined && config.includeTranscript !== null && config.includeTranscript !== "" ? Boolean(config.includeTranscript) : false,
      },
    },
  });
}
