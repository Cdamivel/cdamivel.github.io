(function () {
  // Menú móvil accesible
  var navToggle = document.querySelector("[data-nav-toggle]");
  var siteNav = document.getElementById("site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      siteNav.classList.toggle("is-open", !expanded);
    });
  }

  // Filtro de noticias por categoría (noticias.html)
  var filterButtons = document.querySelectorAll("[data-filter]");
  var newsCards = document.querySelectorAll("[data-category]");
  if (filterButtons.length && newsCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cat = btn.getAttribute("data-filter");
        filterButtons.forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });
        newsCards.forEach(function (card) {
          var match = cat === "todas" || card.getAttribute("data-category") === cat;
          card.style.display = match ? "" : "none";
        });
      });
    });
  }

  // Lightbox accesible (galeria.html)
  var lightbox = document.getElementById("gallery-lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector(".lightbox-img");
    var lbCaption = lightbox.querySelector(".lightbox-caption");
    var lbClose = lightbox.querySelector(".lightbox-close");
    var lastTrigger = null;

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lbImg.removeAttribute("src");
      if (lastTrigger) lastTrigger.focus();
    }

    document.querySelectorAll("[data-lightbox-src]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        lastTrigger = trigger;
        lbImg.src = trigger.getAttribute("data-lightbox-src");
        lbImg.alt = trigger.getAttribute("data-lightbox-alt") || "";
        lbCaption.textContent = trigger.getAttribute("data-lightbox-caption") || "";
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        lbClose.focus();
      });
    });

    lbClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }
})();
