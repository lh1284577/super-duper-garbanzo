//将表单数据转为json
function form2Json(id) {
    var arr = $("#" + id).serializeArray();
    var jsonStr = "";
    jsonStr += '{';
    for (var i = 0; i < arr.length; i++) {
        jsonStr += '"' + arr[i].name + '":"' + arr[i].value + '",';
    }
    jsonStr = jsonStr.substring(0, (jsonStr.length - 1));
    jsonStr += '}';

    var json = JSON.parse(jsonStr);
    return json;
}

;(function($) {
	
	jQuery.fn.extend({
		//表单参数转换为json，会过滤空字符串
		formToJson: function(){
			var param = {};
			$(this.serializeArray()).each(function(){
				if(this.value !== ''){
					param[this.name] = this.value;
				}
			});
			return jQuery.isEmptyObject(param) ? {} : param;
		},
		//表单参数转换为json，保留空字符串
		formToJson2: function(){
			var param = {};
			$(this.serializeArray()).each(function(){
				param[this.name] = this.value;
			});
			return jQuery.isEmptyObject(param) ? {} : param;
		}
		
	});
	
})(jQuery);
