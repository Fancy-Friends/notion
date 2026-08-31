/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- notion
 */

/**
 * The golden fixtures.
 *
 * Deterministic on purpose: the same seed produces the same bytes in
 * TypeScript, PHP and Python, so this file and its twins in the other packages
 * assert the SAME values. That turns the faker into a parity test rather than
 * a convenience — which matters, because cross-runtime drift does not fail
 * loudly. It completes, down one path, with no error.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

import { notionFaker } from "../src/faker.js";

test("page_markdown_get fakes the shape Notion publishes", () => {
  const config = {};

  const faked = notionFaker("page_markdown_get", fakeRequest("notion", "page_markdown_get", config));

  assert.deepEqual(faked, {
    "object": "page_markdown",
    "id": "3d7f940f-303c-0dc4-6ba0-886fba9c98bc",
    "markdown": "# Meeting Notes\n\nDiscussed roadmap priorities.\n\n## Action items\n\n- [ ] Draft proposal\n- [ ] Schedule follow-up",
    "truncated": false,
    "unknown_block_ids": []
  });
});

test("an operation with no fixture throws rather than inventing a shape", () => {
  assert.throws(() => notionFaker("no_such_operation", fakeRequest("notion", "no_such_operation", {})), /no fake response/);
});
