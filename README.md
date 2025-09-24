# 🚀 Velzewu1's Portfolio

Интерактивное портфолио-сайт с игрой, созданное с использованием React, Phaser.js и Tailwind CSS.

## ✨ Особенности

- 🎮 **Интерактивная игра** - Исследуйте мир с персонажем, используя WASD или стрелки
- 🎨 **Современный дизайн** - Темная тема с неоновыми эффектами
- 📱 **Адаптивный интерфейс** - Работает на всех устройствах
- ⚡ **Быстрая загрузка** - Оптимизировано с Vite
- 🎯 **Интерактивные элементы** - Кликабельные объекты в игре

## 🛠️ Технологии

- **Frontend**: React 19, React Router DOM
- **Игровой движок**: Phaser.js 3.88
- **Стилизация**: Tailwind CSS
- **Сборка**: Vite
- **Деплой**: GitHub Pages

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

### Сборка для продакшена

```bash
npm run build
```

### Предварительный просмотр сборки

```bash
npm run preview
```

### Деплой на GitHub Pages

```bash
npm run deploy
```

## 📁 Структура проекта

```
src/
├── components/          # React компоненты
│   ├── AboutMe.jsx     # Компонент "О себе"
│   ├── GameScene.jsx   # Игровая сцена
│   └── WhoAmI.jsx      # Компонент контактов
├── pages/              # Страницы приложения
│   ├── HomePage.jsx    # Главная страница
│   ├── GamePage.jsx    # Страница игры
│   ├── AboutPage.jsx   # Страница "О себе"
│   └── WhoAmIPage.jsx  # Страница контактов
├── App.jsx             # Главный компонент
├── main.jsx           # Точка входа
├── phaserConfig.js    # Конфигурация Phaser
└── index.css          # Глобальные стили
```

## 🎮 Игровые возможности

- **Управление**: WASD или стрелки клавиатуры
- **Анимации**: Плавные анимации персонажа в 4 направлениях
- **Камера**: Следует за персонажем
- **Интерактивность**: Кликабельные объекты с эффектами
- **Большой мир**: Исследуйте просторную карту

## 🎨 Дизайн

Проект использует темную цветовую схему с неоновыми акцентами:
- Основной фон: `#1A0A2E` (темно-фиолетовый)
- Акценты: `#0ff` (циан)
- Карточки: `#2A1240` (фиолетовый)

## 📦 Зависимости

### Основные
- `react` - UI библиотека
- `react-dom` - DOM рендеринг
- `react-router-dom` - Маршрутизация
- `phaser` - Игровой движок

### Разработка
- `vite` - Сборщик
- `tailwindcss` - CSS фреймворк
- `eslint` - Линтер
- `gh-pages` - Деплой на GitHub Pages

## 🔧 Настройка

### Изменение GitHub Pages URL

В `package.json` обновите поле `homepage`:

```json
{
  "homepage": "https://yourusername.github.io/your-repo-name/"
}
```

### Настройка Vite

В `vite.config.js` обновите `base`:

```javascript
export default defineConfig({
  base: "/your-repo-name/"
})
```

## 📝 Скрипты

- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка для продакшена
- `npm run preview` - Предварительный просмотр сборки
- `npm run lint` - Проверка кода линтером
- `npm run deploy` - Деплой на GitHub Pages

## 🌐 Демо

Посетите живой сайт: [https://Velzewu1.github.io/velzewu1-s_portfolio/](https://Velzewu1.github.io/velzewu1-s_portfolio/)

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

## 👨‍💻 Автор

**Velzewu1**
- GitHub: [@Velzewu1](https://github.com/Velzewu1)

---

⭐ Если вам понравился проект, поставьте звезду!