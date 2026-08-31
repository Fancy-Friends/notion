<?php

declare(strict_types=1);

namespace ParticleAcademy\Notion;

use ParticleAcademy\Connectors\Mode;
use ParticleAcademy\Connectors\PreparedRequest;
use ParticleAcademy\Connectors\SandboxKind;
use ParticleAcademy\Connectors\ServiceDescriptor;

/*
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
 * The PHP twin of the js package's `src/service.ts`.
 *
 * ## The sandbox trap, written down where it is used
 *
 * Install the public connection into a dedicated Notion development workspace
 * and grant it only test pages. Calls use the live API and create or read real
 * content inside that workspace.
 */
final class Notion
{
    // The connector API version this package was GENERATED against. A
    // literal, never imported: an imported constant lets an upgrade rewrite
    // the very claim it exists to detect.
    public const CONNECTOR_API_VERSION = 1;

    public const SERVICE = 'notion';

    public const LIVE_URL = 'https://api.notion.com';
    public const SANDBOX_URL = 'https://api.notion.com';

    /** @var list<string> Credential keys a remote call cannot proceed without. */
    public const REQUIRES = [
        'accessToken',
    ];

    public static function descriptor(): ServiceDescriptor
    {
        return new ServiceDescriptor(
            service: self::SERVICE,
            title: 'Notion',
            sandbox: SandboxKind::SeparateAccount,
            baseUrls: [
                Mode::Live->value => self::LIVE_URL,
                Mode::Sandbox->value => self::SANDBOX_URL,
            ],
            requires: self::REQUIRES,
            authorize: self::authorize(...),
            faker: NotionFaker::respond(...),
        );
    }

    /**
     * Apply Notion's auth scheme to an outgoing request.
     *
     *
     *
     * @param array<string,string> $credentials
     */
    public static function authorize(array $credentials, PreparedRequest $request, Mode $mode): void
    {
        $request->withHeader('Notion-Version', '2026-03-11');

        $request->withHeader('Authorization', 'Bearer '.($credentials['accessToken'] ?? ''));
    }
}
