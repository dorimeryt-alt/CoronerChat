# Security Policy

CoronerChat is designed **local-first**: the HTTP UI binds to `127.0.0.1` by default, platform traffic uses HTTPS/TLS, and sensitive API routes require an explicit deck token when exposed beyond localhost.

## Supported versions

| Version | Supported |
|---------|-----------|
| 2.7.x (Latest) | Yes |
| Legacy archive tags (2.25–2.35) | No — historical builds only |

## Reporting a vulnerability

Please do **not** open a public GitHub issue with exploit details.

Contact the maintainer via Telegram: [@coroner_of_autopsy](https://t.me/coroner_of_autopsy)

Include: affected version, environment (Windows build), reproduction steps, and impact. We will acknowledge and coordinate a fix / release note.

## Security posture (summary)

- OAuth 2.0 to third-party platforms; secrets stored in local `CoronerChat-data`
- Runtime log secret masking; `Cache-Control: no-store` on API responses
- LAN exposure is opt-in (`CORONERCHAT_HOST`) and gated by `CORONERCHAT_DECK_TOKEN`
- Official updates only from `dorimeryt-alt/CoronerChat` GitHub Releases (Latest)

Full statement (RF law + ISO/IEC / GDPR / NIST mapping):  
https://dorimeryt-alt.github.io/CoronerChat/security.html
