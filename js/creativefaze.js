(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.myCustomBehavior = {
    attach: function (context, settings) {
      if (document.querySelector('.grecaptcha-badge')) {
        document.querySelector('.grecaptcha-badge').style.bottom = '85px';
      }
      const checkboxes = once('pageLoaded', 'input[type="checkbox"]', context)
      Array.from(checkboxes).forEach(function(checkbox){
        checkbox.addEventListener('change', function(e){
          const checkbox_label = document.querySelector('label[for="'+ e.target.id +'"]');
          checkbox_label.classList.toggle('active')
        })
      })
      const reset_btn = document.getElementById('blog-reset');
      if (reset_btn) {
        $(document).ajaxStart(function(){
          reset_btn.querySelector('svg').classList.add('fa-spin');
        })
        reset_btn.addEventListener('click', function(){
          $('.view-blog').trigger('RefreshView');
        })
        $(document).ajaxStop(function(){
          reset_btn.querySelector('svg').classList.remove('fa-spin');
        })
      }
      const search_btn = document.querySelectorAll('a.search');
      Array.from(search_btn).forEach(function(searchBtn){
        searchBtn.addEventListener('click', function(e){
          e.preventDefault();
          document.querySelector('.region-search-overlay').classList.add('overlay-opened');
          document.querySelector('#edit-keys').focus();
        });
      })

      const close_btn = document.querySelector('.overlay-close');
      if (close_btn) {
        close_btn.addEventListener('click', function(e){
          e.preventDefault();
          document.querySelector('.region-search-overlay').classList.remove('overlay-opened');
        });
      }
      $('a.colorbox').each(function(){
        $(this).colorbox({
          iframe: true,
          innerWidth: '100%',
          innerHeight: '100%'
        });
      })
      const main_nav = document.querySelector('.navbar.navbar-default')
      const toolbar_tray = document.getElementById('toolbar-item-administration-tray')
      const admin_toolbar = document.getElementById('toolbar-bar');
      const banner_area = document.querySelector('.landing-page-banner-area') ||
                          document.querySelector('.landing-page-slider-area') ||
                          document.querySelector('.bg-light-blue.page-title') ||
                          document.querySelector('.portfolio-banner-area') ||
                          document.querySelector('.region-content');
      if (main_nav && banner_area) {
        window.onscroll = function() {
          if (window.scrollY > main_nav.offsetHeight) {
            main_nav.classList.add("sticky");
            banner_area.classList.add('margin-top');
            var total_top = -1;
            if (admin_toolbar) {
              total_top = total_top + admin_toolbar.clientHeight;
              main_nav.style.zIndex = 101;
            }
            if (toolbar_tray && !toolbar_tray.classList.contains('toolbar-tray-vertical')) {
              total_top = total_top + toolbar_tray.clientHeight;
            }
            main_nav.style.top = 1 + total_top + "px";
          } else if(window.scrollY < main_nav.offsetHeight) {
            main_nav.classList.remove("sticky");
            banner_area.classList.remove('margin-top');
            main_nav.style.top = "-1px";
          }
        }
      }

      $('.card').click(function(){
        window.location.href =  $(this).find('a').attr("href")
       })

      if((window.location.pathname == '/services/strategic-consultancy') || (window.location.pathname == '/services/design') || (window.location.pathname == '/services/development') || (window.location.pathname == '/services/video-marketing') ){
          function calculateViewportHeight() {
            var viewportHeight;
            var screenWidth = window.innerWidth;
            if (screenWidth >= 768) {
              viewportHeight = window.innerHeight * 0.8;
            } else {
              viewportHeight = window.innerHeight;
            }
            return viewportHeight;
          }
          var viewportHeight = calculateViewportHeight();
          var mainBanner = document.querySelector('.main-banner');
          mainBanner.style.height = viewportHeight + 'px';
      }

      $('.paragraph--view-mode--special-effects').each(function(){
        $(this).hover(function(){
          $(this).find('.tab .inner-wrapper > img').animate({
            'margin-top': 40
          }, 200);
          $(this).find('.more-content').slideDown(200);
        }, function(){
          $(this).find('.tab .inner-wrapper > img').animate({
            'margin-top': 100
          }, 200);
          $(this).find('.more-content').slideUp(200);
        });
      });
      repl = $(".view-portfolio-banner .views-field-nothing img");
      repl.each(function(i, elem) {
        var img = $(elem);
        var div = $("<div class='portfolio-background-banner' />").css({
          background: "url(" + img.attr("src") + ") no-repeat"
        });
        img.replaceWith(div);
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
