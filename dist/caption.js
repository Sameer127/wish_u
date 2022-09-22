;(function () {

    setTimeout(function () {
      var cstyle =
      "line-height:2;background:#2B2E31;color:#FFB909;font-family:monospace;";
      console.log("%c     made by the @keyframers     ", cstyle);
      console.log("https://twitter.com/keyframers  https://youtube.com/keyframers");
    }, 100);
  
    var el = document.querySelector('[data-keyframers-credit]');
  
    if (el) {
  
  
      el.className += ' kf_credit';
  
      var hasText = el.innerHTML.length;
  
      el.insertAdjacentHTML('afterbegin', `
  <div class="kf_credit_logo">

  </div>`);
  
      if (!hasText) {
        el.insertAdjacentHTML('afterbegin', '<span style="color:blue;text-align:center;font-size:20px">😁 It\'s me for you (click vroni)</span> ');
      }
  
      document.head.insertAdjacentHTML('beforeend', `<style>
  .kf_credit {
    position: fixed;
    bottom: 0.5em;
    left: 0;
    right: 0;
    z-index: 999;
    margin: auto;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    font-size: 10px;
    line-height: 1;
    text-align: center;
    transition: all 0.4s cubic-bezier(.84,.01,.14,.98);
    animation: kf_credit_slide-in 0.8s cubic-bezier(.06,.44,0,.98) 0.4s both;
  }
  @keyframes kf_credit_slide-in { from { transform: translateY(100%); opacity: 0; } }
  
  .kf_credit_logo { 
    position: relative;
    width: 6em;
    height: 3em;
    padding: .5em;
    perspective: 400px;
    transform-style: preserve-3d;
  }
  
  </style>`);
  
      el.onclick = function () {
        if (ga) {
          var url = this.getAttribute('href');
          ga('send', 'event', 'keyframers', 'click', url, {
            'transport': 'beacon',
            'hitCallback': function () {window.open(url);} });
  
          return false;
        }
      };
  
    }
  
  })();
  
  
  (function (i, s, o, g, r, a, m) {i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);}, i[r].l = 1 * new Date();a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-6412794-6', 'auto');
  ga('send', 'pageview');
  ga('send', 'event', 'keyframers');
  
  
  