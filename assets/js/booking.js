// Онлайн-запись через YCLIENTS.
//
// Пока адрес виджета не указан, кнопки «Забронировать» открывают
// запасное окно #popup:myform с телефоном (блок rec718107717 в index.html).
// Как только адрес вписан, те же кнопки открывают окно записи YCLIENTS:
// выбор тарифа, даты, свободного времени, имя, телефон и согласие на обработку ПДн.
(function () {
  // Адрес скрипта виджета из кабинета YCLIENTS
  // («Онлайн-запись» → «Виджет для сайта»), например:
  // 'https://w123456.yclients.com/widgetJS'
  var WIDGET_SRC = '';

  if (!WIDGET_SRC) return;

  // Кнопки «Телеграм» и «Макс» в подвале — это мессенджеры, их не трогаем
  var SKIP_INSIDE = '#rec707672740';

  function switchButtonsToWidget() {
    var links = document.querySelectorAll('a[href="#popup:myform"]');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.closest(SKIP_INSIDE)) continue;
      // Tilda открывает поп-ап по href в момент клика, поэтому достаточно сменить href
      link.setAttribute('href', '#yclients');
      link.classList.add('ms_booking');
    }
  }

  function loadWidget() {
    var script = document.createElement('script');
    script.src = WIDGET_SRC;
    script.charset = 'UTF-8';
    document.body.appendChild(script);
  }

  function init() {
    switchButtonsToWidget();
    loadWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
