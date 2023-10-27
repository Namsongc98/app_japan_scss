(function ($) {
    var _duration = 1000,
        _easing = "easeOutCubic",
        _width = window.innerWidth,
        _windowWidth = window.innerWidth,
        _windowHeight = window.innerHeight,
        _ipadmode = 768,
        _spmode = 390,
        _speed = 1000;

    if (_width <= _ipadmode && _width > _spmode) {
        var commonConfig = {
            perMove: 1,
            drag: true,
            arrows: false,
            pagination: false,
            snap: false,
            autoplay: true,
            interval: 4000,
            speed: 1000,
            type: "loop",
            focus: "center",
            start: 1,
            pauseOnFocus: true,
        };

        var splideElements = document.querySelectorAll(".splide");

        splideElements.forEach(function (element) {
            var splide = new Splide(element, commonConfig);
            splide.mount();
        });
    }

    if (_width <= _spmode) {
        var commonConfig = {
            perPage: 1,
            perMove: 1,
            drag: true,
            arrows: false,
            pagination: true,
            snap: false,
            autoplay: true,
            interval: 4000,
            speed: 1000,
            type: "loop",
            pauseOnFocus: true,
        };

        var splideElements = document.querySelectorAll("#service .splide");

        splideElements.forEach(function (element) {
            var splide = new Splide(element, commonConfig);
            splide.mount();
        });
    }
    scrollInAnime(window, ".anime", "animated");
    scrollInAnime(window, ".anime2", "animated");
    // loading after
    window.onload = function () {
        scrollSection();
        toggleMenuSp();
        toggleMenu();
        closeNavSpAndScrollSection();
        scrollAnimation("#header #nav_list a");

        let itemFaq = $(".item_faq h3");
        itemFaq.click(function () {
            $(this).siblings(".content").stop().slideToggle();
            itemFaq.not($(this)).siblings(".content").slideUp();
            $(this).toggleClass("active");
            itemFaq.not($(this)).removeClass("active");
        });

        var topBtn = $(".btn_to_top");
        topBtn.click(function (event) {
            event.preventDefault();
            $("body,html").animate(
                {
                    scrollTop: 0,
                },
                500
            );
            return false;
        });
    };

    function toggleMenuSp() {
        $(".hamburger").click(function () {
            $(this).toggleClass("active");
            $(".nav_sp").toggleClass("active");
            $(".end_header").toggleClass("active");
        });
    }

    function toggleMenu() {
        $(".nav_sp li a").click(function () {
            $(".hamburger").toggleClass("active");
            $(".nav_sp").toggleClass("active");
            $(".end_header").toggleClass("active");
        });
    }

    function scrollAnimation(selector) {
        $(selector).click(function (e) {
            const targetPage = $(this).attr("href");
            if (targetPage.includes("#")) {
                e.preventDefault();
                const currentPage = $(targetPage);
                $("html, body").animate(
                    { scrollTop: currentPage.offset().top - 100 },
                    1000
                );
            }
        });
    }

    function closeNavSpAndScrollSection() {
        $(".nav_sp a").on("click", function (event) {
            var _self = $(this),
                currentURL = window.location.href,
                currentPage = "",
                targetPage = "";
            currentPage = currentURL.split("/").slice(-1).pop();
            currentPage = currentPage.split("#")[0];
            targetPage = _self.attr("href").split("#")[0];

            if (targetPage === currentPage) {
                if (this.hash !== "") {
                    event.preventDefault();

                    var offset = $(this.hash).offset().top;
                    $("html, body").animate(
                        {
                            scrollTop: offset - 65,
                        },
                        500
                    );
                    $(".nav_sp").removeClass("active");
                    $(".hamburger").removeClass("active");
                    $(".end_header").removeClass("active");
                }
            }
        });
    }

    function scrollSection() {
        $("header a").on("click", function (e) {
            e.preventDefault();
            const idSection = $(this).attr("href");
            $(idSection)[0].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }

    /*
        scroll In Animation
    */
    function scrollInAnime(_container, _animecontainer, _addclass) {
        if ($(_animecontainer).length) {
            $(_animecontainer).each(function () {
                var _imgPos = $(this).offset().top;
                var _scroll = $(_container).scrollTop();
                var _windowHeight = $(_container).height();
                if (_scroll > _imgPos - (_windowHeight - 100)) {
                    $(this).addClass(_addclass);
                }
            });
            _container.addEventListener(
                "scroll",
                function () {
                    $(_animecontainer).each(function () {
                        var _imgPos = $(this).offset().top;
                        var _scroll = $(_container).scrollTop();
                        var _windowHeight = $(_container).height();
                        if (
                            _scroll >
                            _imgPos - _windowHeight + _windowHeight / 5
                        ) {
                            $(this).addClass(_addclass);
                        } else {
                        }
                    });
                },
                { passive: true }
            );
        }
    }

    //resize after
    window.onresize = function () {
        _width = $(window).width();
        if (_width <= _ipadmode) {
        } else {
        }
    };

    //scroll after
    window.onscroll = function () {};

    let itemFaq = $(".item_faq .item_q");
    itemFaq.click(function () {
        $(this).siblings(".item_faq .item_a").stop().slideToggle();
        itemFaq.not($(this)).siblings(".item_faq .item_a").slideUp();
        $(this).siblings(".item_faq .item_q").toggleClass("active");
        itemFaq.not($(this)).removeClass("active");
    });
    $(".item_faq .item_q").click(function () {
        $(this).toggleClass("active");
        $(this).siblings(".item_faq .item_q").toggleClass("active");
    });

    $(window).scroll(function () {
        function footer() {
            var scroll = $(window).scrollTop();
            if (scroll > 50) {
                $("#footer").fadeIn("slow").addClass("show");
            } else {
                $("#footer").fadeOut("slow").removeClass("show");
            }
        }
        footer();
    });

})(jQuery);
