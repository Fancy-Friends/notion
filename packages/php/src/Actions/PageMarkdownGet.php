<?php

declare(strict_types=1);

namespace ParticleAcademy\Notion\Actions;

use ParticleAcademy\Notion\Notion;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
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
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls Notion or calls the faker.
 */
final class PageMarkdownGet
{
    public const OPERATION = 'page_markdown_get';
    public const METHOD = 'GET';
    public const PATH = '/v1/pages/{pageId}/markdown';
    public const SIDE_EFFECTS = 'none';

    /**
     * Build the form body for one call.
     *
     * Validation fails loudly and specifically here, rather than three frames
     * later as an "invalid request" from Notion.
     *
     * @param array<string,mixed> $config
     * An EMPTY body is `{}`, not `[]` — and PHP cannot tell those apart, because
     * both are `array()` and `json_encode` picks the list. So an empty one is
     * returned as an object. TypeScript and Python have no such ambiguity, which
     * is why this is a difference only the byte-parity suite can see.
     *
     * @return array<string,mixed>|\stdClass
     */
    public static function body(array $config): array|\stdClass
    {
        if (($config['pageId'] ?? null) === null || ($config['pageId'] ?? null) === '') {
            throw new ConnectorConfigException('page_markdown_get: "pageId" is required (Page ID).');
        }

        $body = [];

        $value = $config['includeTranscript'] ?? null;
        $body['include_transcript'] = ($value !== null && $value !== '') ? (bool) $value : false;

        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }

    /**
     * The request path, with each config value URL-ENCODED into it.
     *
     * `PATH` above is the TEMPLATE, which is what the descriptor advertises;
     * this is what a caller sends. A value interpolated raw changes which URL
     * is called — a range like `Sheet1!A:B` or a sheet named `Q1/Q2` — and the
     * provider answers 404 about the document rather than about the encoding.
     *
     * @param array<string,mixed> $config
     */
    public static function path(array $config): string
    {
        return '/v1/pages/'.rawurlencode((string) ($config['pageId'] ?? '')).'/markdown';
    }
}
