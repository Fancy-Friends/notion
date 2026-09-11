<?php

declare(strict_types=1);

namespace ParticleAcademy\Notion\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\Notion\Actions\PageMarkdownGet;
use ParticleAcademy\Notion\Notion;

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
 * Notion page Markdown, run on a fancy-flow-php host.
 *
 * The PHP twin of `notionPageExecutor` in @particle-academy/notion-js: the
 * same request, built from the node's config by the same
 * `Actions\PageMarkdownGet` a host would call directly, and the same value on
 * `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than Notion. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/notion_page',
    aliases: [
        'notion_page',
    ],
    category: 'io',
    label: 'Notion page Markdown',
    description: 'Retrieve a Notion page\'s content as enhanced Markdown.',
    inputs: [
        [
            'id' => 'in',
        ],
    ],
    outputs: [
        [
            'id' => 'out',
        ],
    ],
    sideEffects: 'none',
    outputShape: [
        [
            'path' => 'data.object',
            'type' => 'string',
            'description' => 'The literal response object type, page_markdown.',
        ],
        [
            'path' => 'data.id',
            'type' => 'string',
            'description' => 'The page UUID.',
        ],
        [
            'path' => 'data.markdown',
            'type' => 'string',
            'description' => 'The page content in Notion enhanced Markdown.',
        ],
        [
            'path' => 'data.truncated',
            'type' => 'boolean',
            'description' => 'Whether the returned Markdown was truncated.',
        ],
        [
            'path' => 'data.unknown_block_ids',
            'type' => 'array',
            'description' => 'Block ids whose types could not be represented in Markdown.',
        ],
    ],
)]
final class PageExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            Notion::descriptor(),
            PageMarkdownGet::OPERATION,
            $config,
            [
                'method' => PageMarkdownGet::METHOD,
                'path' => PageMarkdownGet::path($config),
                'query' => PageMarkdownGet::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'notion page_markdown_get'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
