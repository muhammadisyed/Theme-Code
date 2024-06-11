(function() {
    setTimeout(function(){
      var cursor = document.querySelector('.custom-cursor');
      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
      });
      document.addEventListener('pointermove', removeclass);
      document.addEventListener('ondrag', dragclass);
      if (document.querySelector('.slick--multiple-view')) {
        document.querySelector('.slick--multiple-view').addEventListener('pointermove', movecursor);
      }
      function movecursor(e) {
        gsap.to(cursor, {
          duration: 0.2,
          x: e.clientX,
          y: e.clientY,
        });
        var el = e.target;
        if (el.tagName === 'P' && el.parentNode.parentNode.parentNode.classList.contains('slick__slide')) {
          cursor.classList.add('show');
        } else if (el.tagName === 'H3' && el.parentNode.parentNode.parentNode.classList.contains('slick__slide')) {
          cursor.classList.add('show');
        } else if (el.tagName === 'DIV' && el.classList.contains('slick__slide')) {
          cursor.classList.add('show');
        } else if (el.tagName === 'DIV' && el.classList.contains('slick-track')) {
          cursor.classList.add('show');
        } else if (el.tagName === 'DIV' && el.classList.contains('field--name-field-body')) {
          cursor.classList.add('show');
        } else {
          cursor.classList.remove('show');
        }
      }
      function removeclass(e) {
        var el = e.target;
        if (el.tagName === 'P' && el.parentNode.parentNode.parentNode.classList.contains('slick__slide')) {
            cursor.classList.add('show');
        } else if (el.tagName === 'H3' && el.parentNode.parentNode.parentNode.classList.contains('slick__slide')) {
            cursor.classList.add('show');
        } else if (el.tagName === 'DIV' && el.classList.contains('slick__slide')) {
            cursor.classList.add('show');
        } else if (el.tagName === 'DIV' && el.classList.contains('slick-track')) {
            cursor.classList.add('show');
        } else if (el.tagName === 'DIV' && el.classList.contains('field--name-field-body')) {
            cursor.classList.add('show');
        } else {
            cursor.classList.remove('show');
        }
      }
      function dragclass(e) {
        cursor.classList.toggle('drag');
      }
    }, 1000)
  })();
