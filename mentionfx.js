// Copyright [2015] [Ryan Flynn]

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


(function ( $ ){
	$.fn.mentionfx = function(scriptFile, displayArea){
		var textInput = $(this).attr('id');;
		var startTag=/@/ig;
		var tagWithUser=/@(\w+)/ig;
		var globalTagTemp;

		$(this).keyup( function(){
			var content = $(this).val();
			var tagStart = content.match(startTag);
			var tagUserArray = content.match(tagWithUser);
			try{
				var tagUser = tagUserArray[tagUserArray.length - 1];
			}catch(typeerror){
				$(displayArea).slideUp('hide');
			}
			var dataString = 'searchword='+ tagUser;
			globalTagTemp = tagUser;
			if(tagStart != null){
				$(displayArea).slideDown('show');
				if(tagUser != null){
					$.ajax({
						type: "POST",
						url: scriptFile,
						data: dataString,
						cache: false,
						success: function(data){
							$(displayArea).html(data).show();
						}
					});
				}
			}else{
				$(displayArea).slideUp('hide');
			}
			return false;
		});

		$(displayArea).on('click', '.display_box', function(){
			var username = $(this).attr('id');
			var old = $("#"+textInput).val();
			var contentArray = old.split(" ");
			var markup = '@'+username+" ";
			if(!contentArray[contentArray.indexOf(globalTagTemp)]){
				contentArray[contentArray.indexOf('\n'+globalTagTemp)] = '\n'+markup;
			}else{
				contentArray[contentArray.indexOf(globalTagTemp)] = markup;
			}
			$("#"+textInput).val(contentArray.join(" "));
			$(displayArea).slideUp('hide');
		});
	};
}(jQuery));