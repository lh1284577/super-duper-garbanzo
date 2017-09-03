$(function(){
	$('.myLeftContentWhitebg').css('min-height',($(window).height() - 125)+"px");
	$('.rightAside').css('min-height',($(window).height() - 125)+"px");
	var divHeight = $('.addNewApp').prev().height() + 2 + "px";
	$('.addNewApp').css({"height":divHeight, "line-height":divHeight});
	$('.padding0px').hover(function(){
		$(this).find('.thumbnail').css('background-color','#f9f9f9');
		$(this).find('.thumbnail').css({'padding':'10px 0px 0px 0px',"transition":"padding .3s ease-in"});
		$(this).find('.config-btn').css({"top":"66px","transition":"top .3s ease-in"});
	},function(){
		$(this).find('.thumbnail').css('background-color','');
		$(this).find('.thumbnail').css({'padding':'45px 0px 0px 0px', "transition":"padding .3s ease-in"});
		$(this).find('.config-btn').css({"top":"130px","transition":"top .3s ease-in"});
	});
//	$('.addNewApp').hover(function(){
//		$('.addNewApp > span').hide();
//		$(this).find('div').css({"top":"0px","transition":"top .3s ease-in"});
//	},function(){
//		$('.addNewApp > span').show();
// 		$(this).find('div').css({"top":"131px","transition":"top .3s ease-in"});
//	});
	$('.addNewApp').on('click',openMQ);
    $('.more-action > div').hover(function(){
        $(this).css("background-color",'#f0f0f0');
        $(this).find('span').css("color",'#333');
//        $(this).find('p').show();
      },function(){
        $(this).css("background-color",'');
        $(this).find('span').css("color",'#868686');
//        $(this).find('p').hide();
      });
    /**
     *打开应用配置文档
     */
     $('.more-action > div:first-child').on('click', function(){
       window.open("http://wiki.110monitor.com/integration/");
     });
     /**
      *弹出邀请用户框
      */
     $('.more-action > div:nth-child(2)').on('click', function(){
       $('#showInvite').modal('show');
     });
     /**
      *打开美洽
      */
     $('.more-action > div:nth-child(3)').on('click',openMQ);

     function openMQ () {
   	  _MEIQIA('showPanel');
     }
});