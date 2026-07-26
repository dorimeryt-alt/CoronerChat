# CoronerChat

Десктоп-приложение для стримеров: **один чат** с Twitch, VK Video Live, Kick, YouTube, Rutube, TikTok LIVE + донаты (DonationAlerts / MemeAlerts), OBS overlay, алерты и очередь озвучки (Chat TTS).

## Этот репозиторий

Публичный **feed обновлений** и архив установщиков (GitHub Releases).

| Что здесь | Чего нет |
|-----------|----------|
| `CoronerChat Setup x.y.z.exe` в Releases | Исходный код приложения |
| Changelog в notes релиза | Issues по разработке (по желанию) |
| Wiki и сайт-документация | Полная OSS-лицензия на код |

Исходники **не публикуются** в этом репо (приложение private). Репо нужно приложению для кнопки «Проверить обновления».

## Скачать

Актуальная сборка: [Releases → Latest](https://github.com/dorimeryt-alt/CoronerChat/releases/latest) — **v2.7.13**.

Файл вида `CoronerChat.Setup.x.y.z.exe` (или с пробелами в имени) — обычный NSIS-установщик. Папка данных **`CoronerChat-data`** при обновлении сохраняется.

## Озвучка (Chat TTS)

- System (Windows) · cloud: [OpenAI](https://platform.openai.com/docs/guides/text-to-speech), [ElevenLabs](https://elevenlabs.io/), [Google](https://cloud.google.com/text-to-speech), [Azure](https://learn.microsoft.com/azure/ai-services/speech-service/)
- Local: [Piper](https://github.com/OHF-Voice/piper1-gpl), [Silero](https://github.com/snakers4/silero-models), [RHVoice](https://github.com/RHVoice/RHVoice), [Supertonic](https://github.com/supertone-inc/supertonic), [XTTS-v2](https://github.com/coqui-ai/TTS)

Страница со ссылками и prefetch: https://dorimeryt-alt.github.io/CoronerChat/tts.html

Встроенный TTS алертов DonationAlerts **нельзя** вытащить через их публичный API (отдаётся текст доната, не URL движка).

## Обновление из приложения

1. Настройки → Обновления  
2. Репозиторий по умолчанию: `dorimeryt-alt/CoronerChat`  
3. «Проверить» → «Скачать и установить»

## Платформы

- Twitch (чат, мод, рейды, категория/тайтл)
- VK Video Live
- Kick
- YouTube Live
- Rutube
- TikTok LIVE (чат и события; отправка пока нет)
- DonationAlerts / MemeAlerts (донаты в ленту)
- OBS Browser Source (`?overlay=1`, `?recap=1`, alerts/goal/vote)

## Документация

- Сайт: https://dorimeryt-alt.github.io/CoronerChat/
- Wiki: https://github.com/dorimeryt-alt/CoronerChat/wiki
- Discussions (баги / идеи / вопросы): https://github.com/dorimeryt-alt/CoronerChat/discussions
- Автор: [C0R0N3R (Eugene)](docs/wiki/Author.md) · Telegram [@coroner_of_autopsy](https://t.me/coroner_of_autopsy) · [DonationAlerts](https://www.donationalerts.com/r/coroner_of_autopsy)

### Discussions — куда писать

| Тема | Категория | Форма |
|------|-----------|--------|
| Баг | **General** | «Сообщить о баге» |
| Идея / фича | **Ideas** | «Предложение / фича» |
| Помощь / настройка | **Q&A** | «Вопрос / помощь» |
| Сетап / скрин | **Show and tell** | «Сетап / Show and tell» |
| Новости | **Announcements** | — |
| Голосование | **Polls** | — |

Стартовые посты: [#1](https://github.com/dorimeryt-alt/CoronerChat/discussions/1), [#2](https://github.com/dorimeryt-alt/CoronerChat/discussions/2), [#3](https://github.com/dorimeryt-alt/CoronerChat/discussions/3), [#4](https://github.com/dorimeryt-alt/CoronerChat/discussions/4).

## Ветки

- `main` — описание feed
- `releases/update-feed` — зеркало для update-канала

## Лицензия / код

Бинарные релизы распространяются для установки CoronerChat.  
**Исходный код в этот репозиторий не выкладывается.** Если понадобится отдельный OSS-репозиторий — это отдельное решение автора.
