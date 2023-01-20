(function() {

  if (window.matchMedia('(min-width: 576.02px)').matches) {
    return;
  }

  let more = document.getElementById('more');
  let show = document.getElementById('show')

  if (more.style.display === "none") {
    more.style.display="none"
    show.innerHTML="подробнее"
  } else {
    more.style.display="inline"
    show.innerHTML="скрыть"
  }
})

readMore();
