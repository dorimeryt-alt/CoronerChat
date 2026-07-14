# Документация CoronerChat

Локальный каталог пользовательской и технической документации. Публичный сайт: [GitHub Pages](https://dorimeryt-alt.github.io/CoronerChat/).

Комплект выстроен по **международным** стандартам программной инженерии (ISO/IEC/IEEE), а не по ЕСПД/ГОСТ 19 как основному каркасу.

| Документ | Норматив / роль | Назначение |
|----------|-----------------|------------|
| [index.html](index.html) | Product site | Neon Arcade лендинг |
| [guide.html](guide.html) | ISO/IEC 26514 | User Guide (расширенный) |
| [security.html](security.html) | ISO/IEC 27001 · 29100 · РФ | Information security statement |
| [tech/index.html](tech/index.html) | ISO/IEC/IEEE 15289 | Реестр техкомплекта |
| [coronerchat-architecture-print.html](coronerchat-architecture-print.html) | ISO/IEC/IEEE 42010 | Architecture description |
| [coronerchat-operation-print.html](coronerchat-operation-print.html) | ISO/IEC 26514 | Operator documentation |
| [install.html](install.html) · [update.html](update.html) · [platforms.html](platforms.html) · [faq.html](faq.html) | Support pages | Быстрые гайды сайта |
| [updates-and-releases.md](updates-and-releases.md) | ISO/IEC 12207 maintenance | Политика обновлений |
| [i18n.md](i18n.md) | Product support | Локализации UI |

```bash
npm run export:doc:architecture-pdf
npm run export:doc:operation-pdf
```
