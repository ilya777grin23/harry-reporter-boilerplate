## Как запустить приложение
```sh
git clone git@github.com:dima117/shri-testing-homework.git
cd shri-testing-homework.git
npm i
npm start
```

### Логирование
Для просмотра результата, запуска тестов, установки пакетов и т.д., можно посмотреть unit-test.log или integratio-test.log
Для обновления логов, нужно запустить:
```
npm run unit-testlog
npm run integration-testlog
```

## Интеграционные тесты
### Сценарии для интеграционных тестов
- на всех страницах (история коммитов, просмотр файловой системы, просмотр содержимого файла) правильно отображается их содержимое;
- правильно работают переходы по страницам
  - из списка коммитов на список файлов
  - из списка файлов во вложенную папку
  - из списка файлов на страницу отдельного файла
  - переходы по хлебным крошкам
### Для запуска тестов
В отдеьных вкладках
#### Загружаем тестируемый репозиторий
```sh
git submodule update --init --recursive
```
#### Selenium part
```sh
node ./node_modules/.bin/selenium-standalone install
npm run selenium
```
#### Hermione part
```sh
npm run integration-test
```

## Модульные тесты
### Сценарии для модульных тестов
- contentControlle, filesController, indexController
    - в рендер уходят правильные аргументы
- git
    - gitHistory
        - возвращает историю, в корректном формате
    - gitFileTree
        - возвращает файловую структуру коммита, в корректном формате
- navigation
    - buildFolderUrl
        - возвращает путь по хешу к файлам
    - buildFileUrl
        - возвращает путь по хешу к файлу
    - buildBreadcrumbs
        - возвращает корректный формат для вложенности в один уровень
        - возвращает корректный формат для вложения более чем в один уровень
        - возвращает заглушку в случае отсутствия аргументов
### Для запуска тестов
```sh
npm run unit-test
```

## Для запуска всех тестов
В отдельных вкладках
### Submodule
```sh
git submodule update --init --recursive
```
### Selenium
```sh
npm run selenium
```
### Tests
```sh
npm test
```