# React RTK Boilerplate

## Features

В папке `src/features` располагается бизнес-логика приложения. Все файлы в этой папке разбиты по модулям.

Модуль представляет собой изолированную часть приложения, отвечающую за изолированную часть функциональности.

Обычно модуль это раздел сайта, или очень сложная страница на сайте или очень сложная форма на сайте или переиспользуемый виджет.

#### Структура Features

- `components` - компоненты используемые в модуле
- `containers`- "Умные компоненты", которые содержат какую-либо логику для работы с данными
- `constants` - константы
- `redux` - файлы, связанные с redux (slices, selectors и т.д).
- `requests` - файлы с запросами данных к бэкенду для данного модуля
- `hooks` - react-хуки
- `utils / utils.ts` - вспомогательная логика (утилиты)
- `index.ts` - все компоненты, редюсеры и т.д, которые будут использоваться за пределами данного модуля должны быть объявлены и экспортированы здесь.
