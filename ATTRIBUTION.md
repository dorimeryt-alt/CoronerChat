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

## Chat TTS engines

CoronerChat can call these engines when the operator selects them. Links are upstream projects; **no affiliation**.

| Engine | Role | Upstream |
|--------|------|----------|
| System (Windows / Chromium) | Local OS voices | OS / browser |
| OpenAI-compatible TTS | Cloud or local endpoint | [OpenAI TTS docs](https://platform.openai.com/docs/guides/text-to-speech) |
| ElevenLabs | Cloud | [elevenlabs.io](https://elevenlabs.io/) |
| Google Cloud Text-to-Speech | Cloud | [cloud.google.com/text-to-speech](https://cloud.google.com/text-to-speech) |
| Azure AI Speech | Cloud | [Azure Speech](https://learn.microsoft.com/azure/ai-services/speech-service/) |
| Piper | Local ONNX (light prefetch) | [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) |
| Silero | Local neural (light prefetch) | [snakers4/silero-models](https://github.com/snakers4/silero-models) |
| RHVoice | Local (system install) | [RHVoice/RHVoice](https://github.com/RHVoice/RHVoice) |
| Supertonic | Local heavy (on-demand) | [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) |
| Coqui XTTS-v2 | Local heavy (on-demand) | [coqui-ai/TTS](https://github.com/coqui-ai/TTS) |

Product page: https://dorimeryt-alt.github.io/CoronerChat/tts.html

DonationAlerts built-in alert TTS is **not** redistributed or scraped; DA OAuth donations API does not expose their synthesizer URL.

## Scripts & tooling in this feed

- Publish / bulk upload scripts for GitHub Releases (`scripts/publish-github-release.mjs`, etc.)
- Wiki / docs content under `docs/wiki`

## Donate

If CoronerChat helps your streams: [donationalerts.com/r/coroner_of_autopsy](https://www.donationalerts.com/r/coroner_of_autopsy)
