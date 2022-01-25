ymaps.ready(init);
function init () {
var myMap = new ymaps.Map("map", {
// Координаты центра карты
center:[59.938790, 30.317904],
// Масштаб карты
zoom: 17,
// Выводим элементы управления
controls: ['zoomControl', 'fullscreenControl']
}, {
// указываем максимальный зум, что бы значёк не терялся при первичной загрузке
maxZoom: 17,
minZoom: 5
});

var myGeoObjects = [];
// Указываем координаты метки
myGeoObjects = new ymaps.Placemark([59.938635, 30.323118], null, {
iconLayout: 'default#image',
// Путь до нашей картинки
iconImageHref: 'img/map-pin.png',
// Размеры иконки
iconImageSize: [113, 106],
// Смещение верхнего угла относительно основания иконки
iconImageOffset: [-56.5, -106],
});
var clusterer = new ymaps.Clusterer({
clusterDisableClickZoom: false,
clusterOpenBalloonOnClick: false,
});

clusterer.add(myGeoObjects);
myMap.geoObjects.add(clusterer);
}
