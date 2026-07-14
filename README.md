# CoronerChat

Десктоп-приложение для стримеров: **один чат** с Twitch, VK Video Live, Kick, YouTube, Rutube + донаты (DonationAlerts / MemeAlerts), OBS overlay и алерты.

## Этот репозиторий

Публичный **feed обновлений** и архив установщиков (GitHub Releases).

| Что здесь | Чего нет |
|-----------|----------|
| `CoronerChat Setup x.y.z.exe` в Releases | Исходный код приложения |
| Changelog в notes релиза | Issues по разработке (по желанию) |
| Wiki: установка и обновление | Полная OSS-лицензия на код |

Исходники **не публикуются** в этом репо (приложение private). Репо нужно приложению для кнопки «Проверить обновления».

## Скачать

Актуальная сборка: [Releases → Latest](https://github.com/dorimeryt-alt/CoronerChat/releases/latest)

Файл вида `CoronerChat.Setup.x.y.z.exe` (или с пробелами в имени) — обычный NSIS-установщик. Папка данных **`CoronerChat-data`** при обновлении сохраняется.

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
- DonationAlerts / MemeAlerts (донаты в ленту)
- OBS Browser Source (`?overlay=1`, `?recap=1`)

## Ветки

- `main` — описание feed
- `releases/update-feed` — зеркало для update-канала

## Лицензия / код

Бинарные релизы распространяются для установки CoronerChat.  
**Исходный код в этот репозиторий не выкладывается.** Если понадобится отдельный OSS-репозиторий — это отдельное решение автора.


## Документация

Страницы: [docs/wiki](docs/wiki/Home.md) (Home, Install, Update, Platforms, FAQ, Releases).
