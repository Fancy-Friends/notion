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
 * Notion's identity on the authoring surface, shared by every Notion node.
 *
 * This file must import nothing from the js package: a PHP or Python project
 * installs the ui package and never that one, and the import would be a
 * dangling module the moment it did.
 *
 * ## The sandbox trap
 *
 * Install the public connection into a dedicated Notion development workspace
 * and grant it only test pages. Calls use the live API and create or read real
 * content inside that workspace.
 */

import type { ConnectorDomain, ConnectorMeta } from "@particle-academy/fancy-flow/connectors";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported — an imported constant lets an upgrade rewrite the
 * very claim it exists to detect.
 */
export const CONNECTOR_API_VERSION = 1;

/** The parts of a connector's identity that belong to the SERVICE, not the node. */
export const NOTION_SERVICE = {
  service: "notion",
  serviceTitle: "Notion",
  domain: "productivity",
  sandbox: "separate-account",
} as const satisfies Pick<ConnectorMeta, "service" | "serviceTitle" | "domain" | "sandbox">;

/**
 * Every connector domain weaver knows, pinned against fancy-flow's union.
 *
 * A closed set copied into three codebases stays correct only while something
 * MAKES it: this line fails to compile the moment weaver carries a value
 * fancy-flow does not, including the values no provider uses yet.
 */
const WEAVER_DOMAINS: readonly ConnectorDomain[] = [
  "payments",
  "commerce",
  "messaging",
  "email",
  "crm",
  "support",
  "storage",
  "calendar",
  "productivity",
  "database",
  "devtools",
  "analytics",
  "marketing",
  "ai",
  "forms",
  "hr",
  "geo"
];
void WEAVER_DOMAINS;

/** The credentials a Notion connection holds. */
export const NOTION_CREDENTIALS = [
  {
    "key": "clientId",
    "label": "OAuth client ID",
    "scope": "provider",
    "secret": false,
    "help": "The public connection's OAuth client ID from its Configuration tab."
  },
  {
    "key": "clientSecret",
    "label": "OAuth client secret",
    "scope": "provider",
    "secret": true,
    "help": "The matching secret used by the host for code exchange and token refresh."
  },
  {
    "key": "accessToken",
    "label": "Access token",
    "scope": "account",
    "secret": true,
    "help": "The bearer token for one user's installation in one Notion workspace."
  },
  {
    "key": "refreshToken",
    "label": "Refresh token",
    "scope": "account",
    "secret": true,
    "help": "The rotating refresh token. Replace it atomically with the new value returned by every refresh."
  }
] as const;

/**
 * The OAuth2 exchange Notion requires — DECLARED here, performed by the host.
 *
 * A consent screen needs a browser, a redirect URI and somewhere to persist
 * the result, and all three belong to the host; a package that ran the dance
 * itself would have to own a web server. So this says precisely enough for a
 * host to do it.
 *
 * The provider does not document an access-token lifetime. The host must
 * retain the refresh token and react to expiry rather than scheduling refresh
 * from an invented TTL.
 *
 * Its refresh tokens ROTATE, and they are single use. Every refresh returns a
 * new one and spends the one submitted, so REPLAYING a spent token revokes the
 * entire grant — the user is signed out, with nothing in the failure that says
 * why.
 *
 * Two consequences, both of which a host gets wrong by default. Do not RETRY a
 * failed refresh with the same token: a response that arrived but was not
 * persisted — a crash between the reply and the write — makes the retry a
 * replay. And do not refresh concurrently, because two workers refreshing at
 * once means one of them replays. Persist the returned token BEFORE using the
 * access token it came with.
 */
export const NOTION_OAUTH = {
  "flow": "authorization_code",
  "authorizeUrl": "https://api.notion.com/v1/oauth/authorize",
  "tokenUrl": "https://api.notion.com/v1/oauth/token",
  "scopes": null,
  "capabilities": [
    "Read content"
  ],
  "accessTokenCredential": "accessToken",
  "refreshTokenCredential": "refreshToken",
  "refreshTokenRotates": true,
  "accessTokenTtlSeconds": null
} as const;

/** Build a Notion node's connector metadata from the operation it performs. */
export function notionMeta(
  role: ConnectorMeta["role"],
  operation: string,
  docs: string,
): ConnectorMeta {
  return { ...NOTION_SERVICE, role, operation, docs };
}
