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

## Переключение табов без перехода по ссылке

При нажатии на таб, он станет активным `data-ah-tab-active="true"`, все остальные табы деактивируются.

```js
$('.ah-tab-wrapper').horizontalmenu({
    //событие нажатия на таб, происходит перед тем как табу присваевается атрибут data-ah-tab-active="true"
    itemClick : function(item) { //item - таб на который нажали
        return false; //останановка стандартного перехода по ссылке
    }
});
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

## Переключение табов без перехода по ссылке с отображением контента активного таба

При нажатии на таб, он станет активным `data-ah-tab-active="true"`, все остальные табы деактивируются.
Отобразится контент относящийся к активному табу.

```js
$('#tab').horizontalmenu({
    itemClick : function(item) {
        $('#tab_content .ah-tab-content').removeAttr('data-ah-tab-active'); //скрытие содержимого контента всех табов
        $($(item).attr('href')).attr('data-ah-tab-active', 'true'); //отображение контента принадлежащего текущему табу
        return false; //останановка стандартного перехода по ссылке
    }
});
```

```html
<div id="tab" class="ah-tab-wrapper">
    <div class="ah-tab">
        <a class="ah-tab-item" href="#tab1" data-ah-tab-active="true">Первая вкладка</a>
        <a class="ah-tab-item" href="#tab2">Вторая вкладка</a>
        <a class="ah-tab-item" href="#tab3">Третья вкладка</a>
    </div>
</div>

<div id="tab_content" class="ah-tab-content-wrapper">
    <div id="tab1" class="ah-tab-content" data-ah-tab-active="true">
        <h2>Я контент первой вкладки</h2>
    </div>
    <div id="tab2" class="ah-tab-content">
        <h2>Я контент второй вкладки</h2>
    </div>
    <div id="tab3" class="ah-tab-content">
        <h2>Я контент третьей вкладки</h2>
    </div>
</div>
```