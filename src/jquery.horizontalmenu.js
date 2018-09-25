(function ($) {
    $.fn.horizontalmenu = function (option) {
        var setting = {
            itemClick: function(sender) {

                return true;
            }
        };

        if (option) $.extend(setting, option);

        var isOverflown = function(selector) {
            var element = $(selector)[0];
            return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
        }

        var adaptiveTab = function(tabWrapper) {
                var tab = $(tabWrapper).find('.ah-tab');
                var tabOvorflowList = $(tabWrapper).find('.ah-tab-overflow-wrapper');
                var isOver = isOverflown(tab);
                if(isOver) {
                    tab.addClass('ah-tab-overflow-right');
                } else {
                    tab.removeClass('ah-tab-overflow-right');
                }
                tabOvorflowList.attr('data-ah-tab-active', isOver);
                var items =  tab.find('.ah-tab-item');
                var activeItem = tab.find('.ah-tab-item[data-ah-tab-active="true"]');
            
                var activeIndex = activeItem.index();
                var marginLeft = 0,
                    marginRight = 0;
                    
                if(isOver) {
                    console.clear()
                    for(var i = 0; i < items.length; i++) {
                        var val = items.eq(i).width() + parseInt(items.eq(i).css('margin-right'));
                        if(i < activeIndex) {
                            marginLeft += val;    
                            continue;
                        }
                        marginRight += val;
                    }
                    console.log(marginRight);
                    if(marginLeft + activeItem.width() + 80 > $(tab).width()) {
                        marginLeft *= -1;
                        if(activeIndex) {
                            
            
                                var  dW =  $(tab).width() - marginRight - 80;
                                marginLeft += parseInt(activeItem.css('margin-right'));
                                console.log(dW);
                                if(dW > 0)
                                    marginLeft += dW ;
                            //вычислить ширину после выделенного элемента назовем его dA. dW = если tab.width() - dA > 0, то marginLeft -= dW 
                            tab.addClass('ah-tab-overflow-left');
                        }
                    } else {
                        marginLeft = 0;
                        tab.removeClass('ah-tab-overflow-left');
                    }
                } else {
                    tab.removeClass('ah-tab-overflow-left');
                }
                items.css('transform', 'translateX(' + marginLeft + 'px)');
            }

            var generateOverflowMenu = function(tabWrapper) {
                tabWrapper.find('.ah-tab-overflow-wrapper').remove();
                var overWrapper = $('<div class="ah-tab-overflow-wrapper" />').appendTo(tabWrapper);
                $('<button type="menu" class="ah-tab-overflow-menu"/>').appendTo(overWrapper);
                var overList = $('<div class="ah-tab-overflow-list" />').appendTo(overWrapper);
                tabWrapper.find('.ah-tab-item').bind('click', function() { 
                    var isBreak = !setting.itemClick($(this));
                    if(isBreak) {
                        var wrapper = $(this).closest('.ah-tab-wrapper');
                        wrapper.find('.ah-tab-item').removeAttr('data-ah-tab-active');
                        wrapper.find('.ah-tab .ah-tab-item:eq(' + $(this).index() + ')').attr('data-ah-tab-active', 'true');
                        wrapper.find('.ah-tab-overflow-wrapper .ah-tab-item:eq(' + $(this).index() + ')').attr('data-ah-tab-active', 'true');
                        adaptiveTab(wrapper);
                    }
                    return !isBreak;
                }).clone(true, true).removeAttr('style').appendTo(overList);
            }

        return this.each(function () {
            var current = $(this);
            generateOverflowMenu(current);
            adaptiveTab(current);
            var resizeStabilizer = undefined;
            $(window).bind('resize', function () {
                if (resizeStabilizer) clearTimeout(resizeStabilizer);
                resizeStabilizer = setTimeout(function () {
                   adaptiveTab(current);
                }, 20);
            });
        });
    };
})(jQuery);