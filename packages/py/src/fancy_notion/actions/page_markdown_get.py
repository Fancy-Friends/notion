# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/page-markdown-get.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/page-markdown-get.json (or weaver's template/) and
# regenerate:
#
# npm run provider -- notion

"""Retrieve a Notion page's content as enhanced Markdown.

GET /v1/pages/{pageId}/markdown —
https://developers.notion.com/reference/retrieve-page-markdown

This describes the request. `call` resolves the connection, picks the
estate, and either calls Notion or calls the faker.
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "page_markdown_get"
METHOD = "GET"
PATH = "/v1/pages/{pageId}/markdown"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    if config.get("pageId") is None or config.get("pageId") == "":
        raise ConnectorConfigError(
            "page_markdown_get: \"pageId\" is required (Page ID)."
        )

    out: dict[str, Any] = {}
    _value = config.get("includeTranscript")
    out["include_transcript"] = bool(_value) if _value is not None and _value != "" else False

    return out



def path(config: dict[str, Any]) -> str:
    """The request path, with each config value URL-ENCODED into it.

    `PATH` above is the TEMPLATE, which is what the descriptor advertises;
    this is what a caller sends. A value interpolated raw changes WHICH URL is
    called — a range like `Sheet1!A:B`, or a sheet named `Q1/Q2` — and the
    provider answers 404 about the document rather than about the encoding.
    """
    return (
        "/v1/pages/"
        + quote(str(config.get("pageId") or ""), safe="")
        + "/markdown"
    )

def page_markdown_get(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Retrieve a Notion page's content as enhanced Markdown."""
    return call(
        descriptor(),
        operation=OPERATION,
        method=METHOD,
        path=PATH,
        form=body(config),
        config=config,
        credentials=credentials,
        mode=mode,
        connection_id=connection_id,
        attempts=attempts,
    )
