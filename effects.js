var effects = [
    {
        name: 'down-up',
        effect: function($current, $next, dir, callback) {
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
                    callback();
                });
            }, 10);


        }
    }
]