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


// var isOverflown = function(element) {
//     return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
// }

// var adaptiveTab = function(tabWrapper) {
//     var tab = $(tabWrapper).find('.tab');
//     var tabOvorflowList = $(tabWrapper).find('.tab-overflow-list');
//     var isOver = isOverflown(tab[0]);
//     if(isOver) {
//         tab.addClass('tab-overflow-right');
//     } else {
//         tab.removeClass('tab-overflow-right');
//     }
//     tabOvorflowList.attr('data-ui-active', isOver);
//     var items =  tab.find('.tab-item');
//     var activeItem = tab.find('.tab-item[data-ui-active="true"]');

//     var activeIndex = activeItem.index();
//     var marginLeft = 0,
//         marginRight = 0;
//     // if(isOver) {
//     //     console.clear()
//     //     for(var i = 0; i < activeIndex; i++) {
//     //         marginLeft += items.eq(i).width() + parseInt(items.eq(i).css('margin-right')) + 5;
//     //         console.log(items.eq(i).width());
//     //     }
//     //     console.log('------------');
//     //     console.log(marginLeft + activeItem.width(), $(tab).width());
//     //     console.log('------------');
//     //     if(marginLeft + activeItem.width() + 55 > $(tab).width()) {
//     //         marginLeft *= -1;
//     //         marginLeft += activeItem.width();
//     //         tab.addClass('tab-overflow-left');
//     //     }
//     //     else {
//     //         marginLeft = 0;
//     //         tab.removeClass('tab-overflow-left');
//     //     }
//     // } else {
        
//     //     tab.removeClass('tab-overflow-left');
//     // }
//     if(isOver) {
//         console.clear()
//         for(var i = 0; i < items.length; i++) {
//             var val = items.eq(i).width() + parseInt(items.eq(i).css('margin-right'));
//             if(i < activeIndex) {
//                 marginLeft += val;    
//                 continue;
//             }
//             marginRight += val;
//         }
//         console.log(marginRight);
//         if(marginLeft + activeItem.width() + 70 > $(tab).width()) {
//             marginLeft *= -1;
//             if(activeIndex) {
//                 // if(activeIndex == items.length - 1)
//                 //     marginLeft += $(tab).width() - activeItem.width() - 70;
//                 // else
//                 //     marginLeft += parseInt(activeItem.css('margin-right'));

//                     var  dW =  $(tab).width() - marginRight - 70;
//                     marginLeft += parseInt(activeItem.css('margin-right'));
//                     console.log(dW);
//                     if(dW > 0)
//                         marginLeft += dW ;
//                 //вычислить ширину после выделенного элемента назовем его dA. dW = если tab.width() - dA > 0, то marginLeft -= dW 
//             }
//             tab.addClass('tab-overflow-left');
//         } else {
//             marginLeft = 0;
//             tab.removeClass('tab-overflow-left');
//         }
//     } else {
//         tab.removeClass('tab-overflow-left');
//     }
//     items.css('transform', 'translateX(' + marginLeft + 'px)');
// }
// var chtTimer = undefined;
// var checkTab = function () {
//     if (chtTimer) clearTimeout(chtTimer);
//     chtTimer = setTimeout(function () {
//         var items = $('.tab-wrapper');
//         for (var i = 0; i < items.length; i++) {
//             adaptiveTab(items.eq(i));
//         }
//     }, 20);
// }
// checkTab();

// $(window).resize(checkTab);