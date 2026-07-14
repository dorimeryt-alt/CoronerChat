# Обновления и релизы

## Источник

Приложение проверяет релизы в репозитории **`dorimeryt-alt/CoronerChat`** (значение зашито; поле repo в UI скрыто).

- API: `GET https://api.github.com/repos/dorimeryt-alt/CoronerChat/releases/latest` для канала «стабильные».
- Установщик: asset вида `CoronerChat Setup x.y.z.exe` / `CoronerChat.Setup.x.y.z.exe`.
- Данные пользователя: папка **`CoronerChat-data`** сохраняется при обновлении NSIS.

## Поведение в приложении (2.7.5+)

1. При запуске (если включено «Проверять при запуске») — принудительная проверка.
2. Баннер: **Скачать и установить** / **Пропустить эту версию** / **Напомнить позже**.
3. «Пропустить» пишется в `dismissedUpdateVersions` в app-state.

## Нумерация версий

В архиве Releases есть старые теги **2.25.x–2.35.x** (историческая нумерация). Они **не** должны предлагаться как обновление поверх линии **2.5–2.7**.

Правило в коде (`fetchGithubRelease`):

- канал `latest` → релиз, помеченный GitHub как **Latest**;
- fallback по списку пропускает «legacy» minor ≥ 20, если есть современные теги.

## Публикация

```bash
npm run pack:win:installer
npm run release:github
# или
node scripts/publish-github-release.mjs --version 2.7.5
```

Notes берутся из блока `=== x.y.z ===` в `build/installer.nsh`.
