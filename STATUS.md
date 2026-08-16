# Product status

CoronerChat **2.7.16** is a Windows-focused Electron application with a local web UI and OBS Browser Source endpoints. Chat TTS includes system/cloud/local engines; light Piper voices ship in the installer; default speak command is `!say` (own commands are voiced; Latin nicks transliterated for Silero/Piper); Twitch/7TV emotes are not read aloud.

Public site: https://dorimeryt-alt.github.io/CoronerChat/  
Latest release: https://github.com/dorimeryt-alt/CoronerChat/releases/latest

## Platform capability

- Twitch: chat read/send, stream metadata, viewer count, moderation and supported channel actions; format constructor for event lines (points, streak, sub, gift, bits, raid, follow, hype).
- VK Video Live: chat read/send, stream state and reconnect recovery; delete sync (WS + poll); channel points / follow / sub event ingest where Centrifugo emits them.
- Kick: chat read/send and stream state where the configured API/browser session permits it; delete events with source/channel.
- YouTube Live: chat via browser/`get_live_chat` (proxy) or authenticated Data API / Google; viewer count is concurrent/live, not total views.
- Rutube: chat read/send through a user-provided cookie session.
- TikTok LIVE: chat + gifts/follow/share/join/like/sub (send not available).
- DonationAlerts and MemeAlerts: donation/event sources in the unified feed (DA built-in alert TTS is not exposed via their OAuth API).
- OBS: overlays, telemetry, WebSocket control, goals, votes and alerts.

## Chat TTS

Queued message TTS in **Эфир → Озвучка сообщений**:

| Kind | Engines / links |
|------|-----------------|
| System | Windows / Chromium voices |
| Cloud | [OpenAI TTS](https://platform.openai.com/docs/guides/text-to-speech), [ElevenLabs](https://elevenlabs.io/), [Google Cloud TTS](https://cloud.google.com/text-to-speech), [Azure Speech](https://learn.microsoft.com/azure/ai-services/speech-service/) |
| Local | [Piper](https://github.com/OHF-Voice/piper1-gpl), [Silero](https://github.com/snakers4/silero-models), [RHVoice](https://github.com/RHVoice/RHVoice), [Supertonic](https://github.com/supertone-inc/supertonic), [Coqui XTTS-v2](https://github.com/coqui-ai/TTS) |

Local runtime: Python sidecar (copied out of asar on first use) + models under `CoronerChat-data/tts-runtime` and `tts-cache`; light Piper ONNX bundle ships in `resources/tts-bundle-light`. Details: [TTS page](https://dorimeryt-alt.github.io/CoronerChat/tts.html).

## Known constraints

- Platform APIs, scopes and anti-bot behavior can change without a CoronerChat update.
- Some YouTube, Kick, Rutube and VK flows require the desktop browser session and are not equivalent in plain web mode.
- Cloud TTS requires the user's own provider credentials and may be billed by that provider.
- Local neural TTS needs Python 3.10+; heavy engines (XTTS / Supertonic) are slow on CPU and download on first select.
- RHVoice needs a system install; Piper current line is GPL.
- DonationAlerts does not return their alert-TTS engine URL over the public donations API — only donation text (and optional donor audio message type).
- Portable data and credentials remain in `CoronerChat-data` until the user removes that directory.

See the [platform guide](https://dorimeryt-alt.github.io/CoronerChat/platforms.html), [security posture](https://dorimeryt-alt.github.io/CoronerChat/security.html), and [roadmap](ROADMAP.md).
