# Attribution / Notices

CoronerChat and this update feed use or integrate with third-party technologies. Names are trademarks of their respective owners. **No affiliation or endorsement** is implied unless stated otherwise.

## Runtime & packaging

| Component | Use |
|-----------|-----|
| [Electron](https://www.electronjs.org/) | Desktop shell |
| [electron-builder](https://www.electron.build/) / NSIS | Windows installer |
| [Node.js](https://nodejs.org/) | Application runtime |
| [TypeScript](https://www.typescriptlang.org/) | Build toolchain |
| [socket.io-client](https://socket.io/) | MemeAlerts realtime |
| [ws](https://github.com/websockets/ws) | WebSocket server / clients |
| [qrcode](https://github.com/soldair/node-qrcode) | QR helpers |
| [dotenv](https://github.com/motdotla/dotenv) | Env loading |

## Platform APIs & services

| Service | Use in CoronerChat |
|---------|-------------------|
| Twitch (Helix / IRC) | Chat, auth, moderation, stream info |
| VK Video Live | Chat |
| Kick | Chat |
| YouTube | Live chat |
| Rutube | Live chat |
| DonationAlerts | Donations (OAuth / API) |
| MemeAlerts | Donations & stickers (OBS token / Socket.IO) |
| 7TV | Emotes |
| OBS Studio (Browser Source / WebSocket) | Overlay & telemetry |
| GitHub Releases API | In-app update checks |

## Scripts & tooling in this feed

- Publish / bulk upload scripts for GitHub Releases (`scripts/publish-github-release.mjs`, etc.)
- Wiki / docs content under `docs/wiki`

## Donate

If CoronerChat helps your streams: [donationalerts.com/r/coroner_of_autopsy](https://www.donationalerts.com/r/coroner_of_autopsy)
