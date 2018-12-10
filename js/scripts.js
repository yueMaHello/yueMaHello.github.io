/*!
    Title: Dev Portfolio Template
    Version: 1.1.3
    Last Change: 03/25/17
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });
    styleDefault()
    function styleDefault(){
        $('#particles-js').css("background-color", "#3B4254");
        //https://github.com/VincentGarreau/particles.js/

        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 400,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 3,
                        "color": "#fff"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 20,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 50,
                    "color": "#ffffff",
                    "opacity": 0.6,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode":  "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 150,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 200,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.2
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
        // particlesJS("particles-js", {
        //     "particles": {
        //         "number": {
        //             "value": 80,
        //             "density": {
        //                 "enable": true,
        //                 "value_area": 800
        //             }
        //         },
        //         "color": {
        //             "value": "#ffffff"
        //         },
        //         "shape": {
        //             "type": "circle",
        //             "stroke": {
        //                 "width": 0,
        //                 "color": "#000000"
        //             },
        //             "polygon": {
        //                 "nb_sides": 5
        //             },
        //             "image": {
        //                 "src": "img/github.svg",
        //                 "width": 100,
        //                 "height": 100
        //             }
        //         },
        //         "opacity": {
        //             "value": 0.5,
        //             "random": false,
        //             "anim": {
        //                 "enable": false,
        //                 "speed": 1,
        //                 "opacity_min": 0.1,
        //                 "sync": false
        //             }
        //         },
        //         "size": {
        //             "value": 3,
        //             "random": true,
        //             "anim": {
        //                 "enable": false,
        //                 "speed": 40,
        //                 "size_min": 0.1,
        //                 "sync": false
        //             }
        //         },
        //         "line_linked": {
        //             "enable": true,
        //             "distance": 150,
        //             "color": "#ffffff",
        //             "opacity": 0.4,
        //             "width": 1
        //         },
        //         "move": {
        //             "enable": true,
        //             "speed": 6,
        //             "direction": "none",
        //             "random": false,
        //             "straight": false,
        //             "out_mode": "out",
        //             "bounce": false,
        //             "attract": {
        //                 "enable": false,
        //                 "rotateX": 600,
        //                 "rotateY": 1200
        //             }
        //         }
        //     },
        //     "interactivity": {
        //         "detect_on": "canvas",
        //         "events": {
        //             "onhover": {
        //                 "enable": true,
        //                 "mode": "grab"
        //             },
        //             "onclick": {
        //                 "enable": true,
        //                 "mode": "push"
        //             },
        //             "resize": true
        //         },
        //         "modes": {
        //             "grab": {
        //                 "distance": 400,
        //                 "line_linked": {
        //                     "opacity": 1
        //                 }
        //             },
        //             "bubble": {
        //                 "distance": 400,
        //                 "size": 40,
        //                 "duration": 2,
        //                 "opacity": 8,
        //                 "speed": 3
        //             },
        //             "repulse": {
        //                 "distance": 200,
        //                 "duration": 0.4
        //             },
        //             "push": {
        //                 "particles_nb": 4
        //             },
        //             "remove": {
        //                 "particles_nb": 2
        //             }
        //         }
        //     },
        //     "retina_detect": true
        // });
    };


})(jQuery);
