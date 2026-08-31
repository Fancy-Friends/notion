"""
Notion — the published PyPI wheel.

GENERATED — do not edit. Fix weaver's template/ and regenerate.

Runs against the PUBLISHED wheel, installed by name into a fresh venv.
Every other test here imports from ../src and cannot see the packaging —
a missing py.typed or an unshipped module passes there and breaks for
every user.
"""

from importlib.metadata import requires

from fancy_notion._fake import FakeValues, seed_for_call
from fancy_notion.faker import respond

GOLDENS = [
    {
        "operation": "page_markdown_get",
        "config": {},
        "expected": {
            "object": "page_markdown",
            "id": "3d7f940f-303c-0dc4-6ba0-886fba9c98bc",
            "markdown": (
                            "# Meeting Notes\n\nDiscussed roadmap priorities.\n\n## Action "
                            "items\n\n- [ ] Draft proposal\n- [ ] Schedule follow-up"
                        ),
            "truncated": False,
            "unknown_block_ids": [],
        },
    },
]


def main() -> None:
    # Zero runtime dependencies is a design constraint, checked on the
    # INSTALLED distribution rather than on the pyproject that claimed it.
    declared = requires("fancy-notion")
    assert not declared, f"expected no runtime dependencies, got {declared}"
    print("  ok   zero runtime dependencies on the installed distribution")

    for golden in GOLDENS:
        operation, config = golden["operation"], golden["config"]
        fake = FakeValues(seed_for_call("notion", operation, config))
        faked = respond(operation, {"config": config, "fake": fake})

        assert faked == golden["expected"], (
            f"the PUBLISHED wheel produced different bytes for {operation} than the repo does"
        )
        print(f"  ok   {operation}")

    print(f"\n  {len(GOLDENS)} operations verified against the published wheel.")


if __name__ == "__main__":
    main()
