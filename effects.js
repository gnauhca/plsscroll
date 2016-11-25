var effects = [
    {
        name: 'pull',
        effect: function($current, $next, dir, done) {
            var dur = 1400;
            if (dir > 0) {
                $current.addClass('pull-pos-current-final');
                $next.addClass('pull-pos-next-init');
            } else {
                $current.addClass('pull-neg-current-final');
                $next.addClass('pull-neg-next-init');       
            }

            setTimeout(function() {
                if (dir > 0) {
                    $next.addClass('pull-pos-next-final');
                } else {
                    $next.addClass('pull-neg-next-final');       
                }
            }, 10);
            $next
            .emulateTransitionEnd(dur)
            .one('bsTransitionEnd', function() {
                done();
            });
        }
    },
    {
        name: 'rotate',
        effect: function($current, $next, dir, done) {
            var dur = 1000;
            if (dir > 0) {
                $current.addClass('rotate-pos-current-final');
                $next.addClass('rotate-pos-next-init');
            } else {
                $current.addClass('rotate-neg-current-final');
                $next.addClass('rotate-neg-next-init');       
            }

            setTimeout(function() {
                if (dir > 0) {
                    $next.addClass('rotate-pos-next-final');
                } else {
                    $next.addClass('rotate-neg-next-final');       
                }
            }, 10);
            $next
            .emulateTransitionEnd(dur)
            .one('bsTransitionEnd', function() {
                done();
            });
        }
    },
    {
        name: 'cube',
        effect: function($current, $next, dir, done) {
            var dur = 1000;
            var height = $current.height();
            var radius = height * Math.sqrt(3) /2;

            if (dir > 0) {
                $current.css({
                    'transform-origin': '50% 50% ' + -radius + 'px',
                    'transition': 'all 1s'
                });
                $next.css({
                    'transform-origin': '50% 50% ' + -radius + 'px',
                    'transform': 'rotateX(-60deg)',
                    'opacity': 0,
                    'transition': 'all 1s'
                });
                setTimeout(function() {
                    $current.css({
                        'transform': 'rotateX(60deg)',
                        'opacity': 0
                    });
                    $next.css({
                        'transform-origin': '50% 50% ' + -radius + 'px',
                        'opacity': 1,
                        'transform': 'rotateX(0deg)',
                    });
                }, 100);
            } else {
                $current.css({
                    'transform-origin': '50% 50% ' + -radius + 'px',
                    'transition': 'all 1s'
                });
                $next.css({
                    'transform-origin': '50% 50% ' + -radius + 'px',
                    'transform': 'rotateX(60deg)',
                    'opacity': 0,
                    'transition': 'all 1s'
                });
                setTimeout(function() {
                    $current.css({
                        'transform': 'rotateX(-60deg)',
                        'opacity': 0
                    });
                    $next.css({
                        'transform-origin': '50% 50% ' + -radius + 'px',
                        'opacity': 1,
                        'transform': 'rotateX(0deg)',
                    });
                }, 100);    
            }

            $next
            .emulateTransitionEnd(dur + 1000)
            .one('bsTransitionEnd', function() {
                done();
            });
        }
    },

    {
        name: 'down-up',
        effect: function($current, $next, dir, done) {
            var dur = 1000;
            if (dir > 0) {
                $current.addClass('down-up-pos-current-final');
                $next.addClass('down-up-pos-next-init');
            } else {
                $current.addClass('down-up-neg-current-final');
                $next.addClass('down-up-neg-next-init');       
            }

            setTimeout(function() {
                if (dir > 0) {
                    $next.addClass('down-up-pos-next-final');
                } else {
                    $next.addClass('down-up-neg-next-final');       
                }

                $current
                .emulateTransitionEnd(dur)
                .one('bsTransitionEnd', function() {
                    done();
                });
            }, 10);
        }
    }
]