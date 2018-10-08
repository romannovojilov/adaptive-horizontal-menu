# Примеры

Данный раздел содержит примеры использования компонента.

## Простейшая реализация

Поведение табов ничем не отличается от поведения обычных ссылок.
Для выделения активного таба используйте атрибут `data-ah-tab-active="true"`

```js
$('.ah-tab-wrapper').horizontalmenu();
```

```html
<div class="ah-tab-wrapper">
    <div class="ah-tab">
        <a class="ah-tab-item" data-ah-tab-active="true" href="">Первая вкладка</a>
        <a class="ah-tab-item" href="">Вторая вкладка</a>
        <a class="ah-tab-item" href="">Третья вкладка</a>
        <a class="ah-tab-item" href="">Четвертая вкладка</a>
        <a class="ah-tab-item" href="">Пятая вкладка</a>
    </div>
</div>
```