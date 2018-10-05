(function ($) {
    $.fn.horizontalmenu = function (option) {
        
        var setting = {
            itemClick: function (sender) {
                return true;
            }
        };

        if (option) $.extend(setting, option);

        var shadowRight = 80; // width of the .ah-tab::after
        // width of the .ah-tab::before is identical to the margin-right of the tab list item

        var isHorizontalOverflow = function (selector) {
            var element = $(selector)[0];
            return element.scrollWidth > element.clientWidth;
        }

        var adaptiveTab = function (tabWrapper) {

            var tab = $(tabWrapper).find('.ah-tab'); //tab list

            var items = tab.find('.ah-tab-item'); //tab list items
            var item = tab.find('.ah-tab-item[data-ah-tab-active="true"]'); //tab list active item

            var isOverflow = isHorizontalOverflow(tab);

            $(tabWrapper).find('.ah-tab-overflow-wrapper') //overflow dropdown list wrapper
                .attr('data-ah-tab-active', isOverflow);

                var marginLeft = 0, //distance to the left of the active item
                    marginRight = 0, //distance to the right of the active item
                    index = item.index(); //index of the active item
            if (isOverflow) {
                
                for (var i = 0; i < items.length; i++) {
                    var current = items.eq(i);
                    var width = current.width();
                    var margin = (parseInt(current.css('margin-right')) || 0);
                    if (i < index) {
                        marginLeft += width + (i + 1 < index ? margin : 0);
                        continue;
                    }
                    marginRight += width + margin;
                }
                
                //TODO: need to refactor {
                if (marginLeft + item.width() + shadowRight > $(tab).width()) {
                    marginLeft *= -1;
                    if (index) {

                        var delta = $(tab).width() - marginRight - shadowRight;
                        console.log(delta);
                        if (delta > 0)
                            marginLeft += delta;
                        //вычислить ширину после выделенного элемента назовем его dA. dW = если tab.width() - dA > 0, то marginLeft -= dW 
                        tab.addClass('ah-tab-overflow-left');
                    }
                } else {
                    marginLeft = 0;
                    tab.removeClass('ah-tab-overflow-left');
                }
                // }


                tab.addClass('ah-tab-overflow-right');
            } else {
                tab.removeClass('ah-tab-overflow-left ah-tab-overflow-right');
            }
            items.css({
                '-moz-transform': 'translateX(' + marginLeft + 'px)',
                '-o-transform': 'translateX(' + marginLeft + 'px)',
                '-webkit-transform': 'translateX(' + marginLeft + 'px)',
                'transform': 'translateX(' + marginLeft + 'px)'
            });
        }

        var initialize = function (wrapper) {
            if (wrapper.find('.ah-tab-overflow-wrapper').length) return false;

            var items = wrapper.find('.ah-tab-item');
            items.bind('click', function () {
                var isContinue = setting.itemClick($(this));
                if (!isContinue) {
                    var index = $(this).index();
                    var w = $(this).closest('.ah-tab-wrapper');
                    w.find('.ah-tab-item').removeAttr('data-ah-tab-active');
                    w.find('.ah-tab .ah-tab-item').eq(index).attr('data-ah-tab-active', 'true');
                    w.find('.ah-tab-overflow-wrapper .ah-tab-item').eq(index).attr('data-ah-tab-active', 'true');
                    adaptiveTab(w);
                }
                return isContinue;
            });

            $('<div>', {
                class: 'ah-tab-overflow-wrapper',
                append: $('<button>', {
                    type: 'menu',
                    class: 'ah-tab-overflow-menu'
                }).add($('<div>', {
                    class: 'ah-tab-overflow-list',
                    append: items.clone(true, true).removeAttr('style')
                }))
            }).appendTo(wrapper);

            adaptiveTab(wrapper);

            var resizeStabilizer = undefined;
            $(window).bind('resize', function () {
                if (resizeStabilizer) clearTimeout(resizeStabilizer);
                resizeStabilizer = setTimeout(function () {
                    adaptiveTab(wrapper);
                }, 20);
            });
        }

        return this.each(function () {
            initialize($(this));
        });
    };
})(jQuery);