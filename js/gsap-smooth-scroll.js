// Smooth scroll con GSAP
// Requiere GSAP y ScrollToPlugin

// Scroll suave global con GSAP ScrollSmoother
(function() {
    function loadGSAPandSmoother(callback) {
        function loadScript(src, onload) {
            var s = document.createElement('script');
            s.src = src;
            s.onload = onload;
            document.head.appendChild(s);
        }
        if (typeof gsap === 'undefined') {
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js', function() {
                if (typeof ScrollSmoother === 'undefined') {
                    loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollSmoother.min.js', callback);
                } else {
                    callback();
                }
            });
        } else if (typeof ScrollSmoother === 'undefined') {
            loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollSmoother.min.js', callback);
        } else {
            callback();
        }
    }

    function initSmoother() {
        if (typeof ScrollSmoother !== 'undefined') {
            ScrollSmoother.create({
                smooth: 1.2,
                effects: true
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadGSAPandSmoother(initSmoother);
        });
    } else {
        loadGSAPandSmoother(initSmoother);
    }
})();

