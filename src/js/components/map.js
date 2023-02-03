  let center = [53.20329997916517, 50.15701081481935];

  function init() {
    let myMap = new ymaps.Map("map", {  // создание карты
      center: center, // Координаты центра карты.
      zoom: 15 // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
    });

    // let myGeoObject = new ymaps.GeoObject({  // создание геообъекта с типом точка (метка).
    //     geometry: {
    //         type: "Point", // тип геометрии - точка
    //         coordinates: center // координаты точки
    //     }
    // });

    let myPlacemark = new ymaps.Placemark(center, {
      balloonContent: `

      <div class="balloon">
        <div class="balloon__address">
          г. Самара, Московское ш. 17, ТЦ "Сила Спорта" 2 этаж
        </div>
      </div>

    `
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/images/svg/mono/map-pin.svg',
      iconImageSize: [30, 30],
      iconImageOffset: [-10, -30],
    });

    // myPlacemark.events.add('dragend', function(e) {
    //   // Получение ссылки на объект, который был передвинут.
    //   let thisPlacemark = e.get('target');
    //   // Определение координат метки
    //   let coords = thisPlacemark.geometry.getCoordinates();
    //   // и вывод их при щелчке на метке
    //   thisPlacemark.properties.set('balloonContent', coords);
    // });

    // myMap.geoObjects.add(myGeoObject);  // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);  // Размещение метки на карте.

    // myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init); // функция ymaps.ready() будет вызвана, когда загрузятся все компоненты API, а также когда будет готово DOM-дерево.
