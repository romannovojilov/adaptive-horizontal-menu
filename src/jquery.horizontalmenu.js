(function ($) {
    $.fn.horizonmenu = function (option) {
        var setting = {

        };

        if (option) $.extend(setting, option);

        var isOverflown = function(selector) {
            var element = $(selector)[0];
            return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
        }

        
        $(window).resize(function() { /**/ });
        return this.each(function() {
            
        });
    };
})(jQuery);