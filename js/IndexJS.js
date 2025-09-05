  document.addEventListener('DOMContentLoaded', () => {
      if (window.innerWidth >= 768) {
        startMarquee();
      }

      function startMarquee() {
        const marquee = document.querySelector('.marquee');
        let left = 0;
        let timer;

        const firstImg = marquee.querySelector('img');
        firstImg.onload = () => startScroll();
        if (firstImg.complete) startScroll();

        function startScroll() {
          function getImgWidth() {
            return marquee.querySelector('img').clientWidth;
          }

          function move() {
            clearInterval(timer);
            const imgWidth = getImgWidth();
            const duration = 30000; 
            const interval = 20;
            const step = imgWidth / (duration / interval);

            timer = setInterval(() => {
              left -= step;
              if (left <= -imgWidth) left = 0;
              marquee.style.left = `${left}px`;
            }, interval);
          }

          move();

          window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
              left = 0;
              marquee.style.left = '0px';
              move();
            } else {
              clearInterval(timer);
            }
          });
        }
      }
    });