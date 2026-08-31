# GENERATED FILE — do not edit.
#
# Emitted from provider/fixtures/ by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/fixtures/ (or weaver's template/) and regenerate:
#
# npm run provider -- notion

"""The golden fixtures — the SAME values the TypeScript and PHP packages
assert.

Bit-for-bit identical is the claim, and this is what checks it for Python.
Cross-runtime drift does not fail loudly on its own: it completes, down one
path, with no error.
"""

import pytest

from fancy_notion._fake import FakeValues, seed_for_call
from fancy_notion.faker import respond


def test_page_markdown_get_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("notion", "page_markdown_get", config))

    faked = respond("page_markdown_get", {"config": config, "fake": fake})

    assert faked == {
        "object": "page_markdown",
        "id": "3d7f940f-303c-0dc4-6ba0-886fba9c98bc",
        "markdown": (
                        "# Meeting Notes\n\nDiscussed roadmap priorities.\n\n## Action items\n\n- "
                        "[ ] Draft proposal\n- [ ] Schedule follow-up"
                    ),
        "truncated": False,
        "unknown_block_ids": [],
    }


def test_an_operation_with_no_fixture_raises_rather_than_inventing_a_shape() -> None:
    fake = FakeValues(seed_for_call("notion", "no_such_operation", {}))

    with pytest.raises(ValueError, match="no fake response"):
        respond("no_such_operation", {"config": {}, "fake": fake})
