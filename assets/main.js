// console.log('test')
jQuery.extend(jQuery.expr[':'], {
  focusable: function(el, index, selector){
    return $(el).is('a, button, :input, [tabindex]');
  }
});

window.addEventListener('DOMContentLoaded', (event) => {

  // Set Header Height Offset
  var prevHght = 0;
  var hdrScrolled = 'is-scrolled';
  headerHeight()
  document.addEventListener('DOMContentLoaded', headerHeight);
  window.addEventListener('resize', headerHeight);
  window.addEventListener('scroll', headerHeight);

  function headerHeight() {
    var elementTarget = document.getElementById('top');
    var hdrEl = document.querySelectorAll('header.site-header');
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var elTop = elementTarget.offsetTop + elementTarget.offsetHeight;
    if (hdrEl.length > 0) {
      if (prevHght != hdrHght) {
        var hdrHght = hdrEl[0].clientHeight;
        document.documentElement.style.setProperty('--header-height', hdrHght + 'px');
      }
      if (scrollTop > elTop) {
        hdrEl[0].classList.add(hdrScrolled)
      } else {
        hdrEl[0].classList.remove(hdrScrolled)
      }
    }
  }



  // on load
  thisHash = window.location.hash
  // removes hash from href
  history.pushState(thisHash, '', window.location.pathname);
  if (thisHash) {
    setTimeout(function() {
      clearThis = $('#header').height() + 25;
      $('html, body').animate({
        scrollTop: $(thisHash).offset().top - clearThis
      }, 1000);
    }, 200)
  }
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // Clear whatever is at top of page, usually the header
      clearThis = $('.site-header').height() + 25;
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - clearThis
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


  function Modal(el) {
    el = el;
    act = 'active';
    actMod = 'modal-active';
    initMdl(el)

    function initMdl(el) {
      winWidth = $(window).width();
      thisEl = el;
      type = getDataName($(thisEl)).length ? getDataName($(thisEl)) : 'modal';
      thisMdl = getDataName($(thisEl)).length ? $('[data-modal="' + $(thisEl).data(type) + '"]') : $(thisEl);
      if (type == 'open' || type == 'modal') {
        if (!thisMdl.is('.' + act)) {
          showModal(thisMdl);
        } else {
          hideModal(thisMdl);
        }
      }
      if (type == 'close') {
        hideModal(thisMdl);
      }
    }

    function showModal(el) {
      var lastTop = $(window).scrollTop(),
        el = $(el),
        delay = 0;
      $('body').addClass(actMod).css({ top: -lastTop });
      if (el.is('[style*=display]')) {
        el[0].removeAttribute('style');
        delay = 100; // gives a moment for animation settings to take over
      }
      setTimeout(function() {
        el.addClass(act);
        el.find(':focusable').first().focus();
      }, delay)
    }

    function hideModal(el) {
      var lastTop = Math.abs(parseInt($('body').css('top'))),
        el = $(el);
      $('body').css({ top: 0 }).removeClass(actMod);
      window.scrollTo(0, lastTop);
      el.removeClass(act);
    }

    function getDataName(node) {
      var d = {},
        key = '',
        re_dataAttr = /^data\-(.+)$/;
      $.each(node.get(0).attributes, function(index, attr) {
        if (re_dataAttr.test(attr.nodeName)) {
          key = attr.nodeName.match(re_dataAttr)[1];
        }
      });
      return key;
    }
  }

  $('.modal-action').on('click touch', function (e) {
    e.preventDefault();
    Modal($(this));
    // console.log($(this))
  })

});

