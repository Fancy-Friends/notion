/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/manifest.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/manifest.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- notion
 */

/**
 * Notion, as one service descriptor shared by every Notion operation.
 *
 * @particle-academy/fancy-connector-core carries what is true of ALL
 * connectors. This carries what is true of Notion: its base URL, its auth
 * scheme, its idempotency header, and its faker.
 *
 * ## The sandbox trap, written down where it is used
 *
 * Install the public connection into a dedicated Notion development workspace
 * and grant it only test pages. Calls use the live API and create or read real
 * content inside that workspace.
 */

import type { ConnectorMode, PreparedRequest, ServiceDescriptor } from "@particle-academy/fancy-connector-core";

import { notionFaker } from "./faker.js";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported. An imported constant lets an upgrade rewrite the
 * very claim it exists to detect, after which the copy agrees with itself
 * forever.
 */
export const CONNECTOR_API_VERSION = 1;

export const NOTION_BASE_URLS = {
  "live": "https://api.notion.com",
  "sandbox": "https://api.notion.com"
} as const;

/** Credential keys a remote call cannot proceed without. */
export const NOTION_REQUIRES = [
  "accessToken"
] as const;

/**
 * Apply Notion's auth scheme to an outgoing request.
 *
 *
 *
 * The mode is passed in because for some providers auth and estate are the
 * same decision expressed in the URL; here it is unused, and saying so is
 * cheaper than wondering later whether it was forgotten.
 */
export function notionAuthorize(
  credentials: Record<string, string | undefined>,
  request: PreparedRequest,
  _mode: ConnectorMode,
): void {
  request.headers["Notion-Version"] = "2026-03-11";

  request.headers.Authorization = `Bearer ${credentials.accessToken ?? ""}`;
}

/** The Notion service, for the TypeScript runtime. */
export const NOTION: ServiceDescriptor = {
  service: "notion",
  title: "Notion",
  sandbox: "separate-account",
  baseUrls: { ...NOTION_BASE_URLS },
  requires: [...NOTION_REQUIRES],
  authorize: notionAuthorize,
  faker: notionFaker,
};
