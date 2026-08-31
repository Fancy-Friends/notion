# GENERATED FILE — do not edit.
#
# Emitted from provider/fixtures/ by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/fixtures/ (or weaver's template/) and regenerate:
#
# npm run provider -- notion

"""The Notion faker.

Bit-for-bit identical to the TypeScript and PHP fakers: the same FNV-1a seed
and the same xorshift32 sequence, so a golden fixture asserts the exact
faked payload and ALL THREE runtimes have to produce it. That turns the
faker into a parity test rather than a convenience — which matters, because
cross-runtime drift does not fail loudly. It completes, down one path, with
no error.
"""

from __future__ import annotations

from typing import Any

from ._fake import FakeValues


def _page_markdown_get(config: dict[str, Any], fake: FakeValues) -> Any:
    return {
        "object": "page_markdown",
        "id": "-".join([fake.hex(8), fake.hex(4), fake.hex(4), fake.hex(4), fake.hex(12)]),
        "markdown": (
                        "# Meeting Notes\n\nDiscussed roadmap priorities.\n\n## Action items\n\n- "
                        "[ ] Draft proposal\n- [ ] Schedule follow-up"
                    ),
        "truncated": False,
        "unknown_block_ids": [],
    }


def respond(operation: str, request: dict[str, Any]) -> Any:
    """Dispatch to the fixture for one operation."""
    config: dict[str, Any] = request.get("config") or {}
    fake: FakeValues = request["fake"]

    if operation == "page_markdown_get":
        return _page_markdown_get(config, fake)

    # A faker asked for an operation it has no shape for must SAY so. Making
    # something up would produce a green run whose output silently has none of
    # the fields the author is about to reference.
    raise ValueError(
        f'notion: no fake response is defined for "{operation}". '
        "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker "
        "cannot be developed against, tested, or demonstrated."
    )
