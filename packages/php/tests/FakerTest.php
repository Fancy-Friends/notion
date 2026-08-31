<?php

declare(strict_types=1);

use ParticleAcademy\Notion\NotionFaker;
use ParticleAcademy\Connectors\FakeValues;

/*
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
 * The golden fixtures — the SAME values the TypeScript and Python packages
 * assert.
 *
 * Bit-for-bit identical is the claim, and this is what checks it.
 * Cross-runtime drift does not fail loudly on its own: it completes, down one
 * path, with no error.
 */

it('page_markdown_get fakes the shape Notion publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('notion', 'page_markdown_get', $config));

    $faked = NotionFaker::respond('page_markdown_get', ['config' => $config, 'fake' => $fake]);

    expect($faked)->toBe([
        'object' => 'page_markdown',
        'id' => '3d7f940f-303c-0dc4-6ba0-886fba9c98bc',
        'markdown' => '# Meeting Notes

Discussed roadmap priorities.

## Action items

- [ ] Draft proposal
- [ ] Schedule follow-up',
        'truncated' => false,
        'unknown_block_ids' => [],
    ]);
});

it('throws for an operation with no fixture rather than inventing a shape', function () {
    $fake = new FakeValues(FakeValues::seedForCall('notion', 'no_such_operation', []));

    expect(fn () => NotionFaker::respond('no_such_operation', ['config' => [], 'fake' => $fake]))
        ->toThrow(InvalidArgumentException::class);
});
