# Changelog

## 2.7.15

- 7TV: отдельное поле прокси (API + CDN + prefetch), формат как у YouTube.
- YouTube browser-чат: опрос `live_chat` через прокси (`ytInitialData`) — чат больше не «подключён, но пуст».
- YouTube эмодзи: картинки через локальный `/api/youtube/emote-asset` (ggpht через прокси приложения).
- YouTube зрители: `updated_metadata` / `originalViewCount`.
- YouTube: в ленту только сообщения не раньше старта приложения.
- Прокси Electron: кнопка «Применить прокси», автоперебор HTTP/SOCKS при ошибке -111.

## 2.7.14

- Иконка медведя снова вшита в exe / ярлык / Setup.
- Планшет: touch-UI + превью стрима под чатом; LAN `0.0.0.0` + `*.sslip.io` для Twitch-embed.
- Ачивки: прогресс из `CoronerChat-data` не обнуляется при смене папки.
- Windows Media Session / Twitch mod logs / офлайн Light TTS.

## 2.7.13

- Chat TTS: локальные движки Piper / Silero / RHVoice / Supertonic / XTTS-v2 (sidecar + prefetch в `CoronerChat-data`); кнопка ▶ у выбора голоса; команда по умолчанию `!say` (в режиме команды префикс срезается); эмоуты Twitch/7TV не читаются вслух.
- Chat TTS hotfixes: sidecar материализуется из `app.asar` на диск (pip/Python больше не падают на asar); лёгкий пакет Piper голосов вшит в установщик (`resources/tts-bundle-light`); кнопка «Сохранить настройки озвучки»; в режиме `!say` свои команды читаются; латинские ники для Silero/Piper транслитом; прогресс prefetch; soft-fail Silero SSL / Supertonic.
- 7TV: paints на никах, scale/spacing эмоутов, effect-префиксы и zero-width stacking.
- Документация TTS: https://dorimeryt-alt.github.io/CoronerChat/tts.html

## 2.7.12

- VK Video Live: удалённые в чате ВКВЛ сообщения сразу пропадают в CoronerChat (разбор `chat_message.id`/глубокой вложенности Centrifugo, legacy `channel-chat`, poll fallback).
- Kick: в событие удаления сообщения добавлены `source`/`channel` для корректного сопоставления.

## 2.7.11

- TikTok LIVE: чат + gifts/follow/share/join/like/sub; зрители в шапке; отправка пока недоступна.
- UX-алерты / OBS: follow + gifts (💎); фильтры событий (join/like выкл. по умолчанию).
- Звуки алертов (пики follow/sub/raid/донат) **выключены по умолчанию**; включить — UX → «Звук алертов».
- Быстрее восстановление чата после обвала сети: короче backoff, сброс таймера при online/resume, авто-reconnect TikTok.
- Защита настроек при БСОД/отключении питания: атомарная запись с `fsync`, сериализация записей, `.bak` и автоматическое восстановление повреждённого состояния.
- Панель ввода: аббревиатура **TT**, значок у сообщений, вкладка настроек, вкл/выкл поля, пресеты UX.

## 2.7.10

Сводка всего, что вошло поверх 2.7.9 (промежуточные теги свёрнуты сюда):

### Обновление / установщик (критично)
- Overlay-update: при обновлении бинарники не сносятся до копирования новых.
- Setup стартует отдельно от Electron (`Start-Process` с PID); после скачивания — уведомление закрыть CoronerChat вручную, затем подтверждение запуска.
- Скачивание: Electron `net` + ретраи; в `CoronerChat-data/updates` и TEMP хранится только актуальный Setup (старые `.exe` чистятся).
- Hotfix UI: путь updates больше не ломает клиентский скрипт (`\u` escape).

### Чат UX
- Gorji Time: часы в шапке отрисованы как LED-матрица (pill); цифры по центру капсулы.
- Панель ввода: кнопка «Открыть» снова раскрывает composer (починен обрыв clientScript).
- Значки Kick / YouTube / Rutube перед сообщениями; в панели ввода — аббревиатуры YT / KK / RT (как TW / VK).
- Фокус (F10): панель ввода больше не пустеет, если активная строка ещё не выбрана.
- Поля ввода по площадкам сохраняются после перезапуска.

### Достижения
- Разделение на треки **стример** / **зритель·модер** / общие: сравнение auth-аккаунта и подключённого канала.
- Новые категории: часы в чужом зале, чужой чат; расширена модерация (~247 ачивок).

## 2.7.9

Сводка всего, что вошло поверх 2.7.8 (промежуточные номера после 2.7.8 были свёрнуты сюда же):

### Обновления приложения
- Баннер «Найдена новая версия»: Download / Defer / Skip-version.
- Прогрессбар скачивания; после старта Setup desktop CoronerChat закрывается сам.

### Чат UX
- Действия по сообщению: только ПКМ (контекстное меню); кнопки по наведению убраны.
- Ready strip (TW·VK·…): сворачивание из меню «Ещё» или ▴; настройка сохраняется.
- Шапка: блок «Зрителей» выровнен с кнопками (без вертикального перескока из‑за колонки OBS).
- Ужатая шапка: счётчики TW/VK/Kick снова видны рядом с «Зрителей всего» (не уезжают за край).
- Цифровые часы: выровнены по центру блока, цифры крупнее на всю высоту.

### VK Video Live
- Клипы/ссылки: разворот rich-кортежей `["url",0,[]]` / объектов — без сырого JSON и без `[object Object]`.
- Упоминания: строки и вложенные объекты; fallback `@id…`; пустые дыры после фиксов убраны.
- Centrifugo `api-channel-chat`: nested `{mention|smile|text:{…}}` разворачиваются как web `channel-chat` (гонка каналов больше не глотает @mention).
- Цвета ников: палитра как на live.vkvideo.ru (индексы 0–15); читается и `nickColor`, и `nick_color`.

## 2.7.8

- Added a visual notice format constructor (all Twitch event kinds + live preview and placeholder chips).
- Unified notice templates for points, streak, sub/gift, bits, raid, follow, and Hype Train; migrated legacy CP/Hype fields.
- Improved watch-streak and channel-points cards in the feed; wired UX alerts for follow/sub/raid/points.
- Expanded VK Video Live toward Twitch parity: Centrifugo `channel_points` subscribe, follow/sub/gift/points event normalization into the same categories/filters/templates.

## 2.7.7

- Added custom chat commands, timers, and named counters (`!death`, `{user}`, `{points}`, `{uptime}`).
- Added Relay 2.0 with manual/auto/both modes, from→to rules, prefix/keyword excludes, and a relay log.
- Added cross-platform spam filters and an open moderation queue.
- Added local-first viewer loyalty points, reward redeem API, and `!join` giveaways.
- Added OBS overlay event/command filters, queued TTS, testers page, and readiness-strip toggle (from unreleased work).

## 2.7.5

- Fixed language switching so localized text no longer removes nested controls.
- Updated the documentation site, user guide, security posture, and international technical-document references.
- Improved platform diagnostics and recovery behavior.

Release binaries and authoritative release notes are published in [GitHub Releases](https://github.com/dorimeryt-alt/CoronerChat/releases).
