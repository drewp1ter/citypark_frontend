$(document).ready(function(){$("body").removeClass("nojs");$("body").addClass("js");var j=$("#javascriptEnabled");if(j!=null&&j.length==1){j.val("true")}createScroll();$(document.body).on("click",".ui-widget-overlay",function(e){$.each($(".ui-dialog"),function(){var $dialog;$dialog=$(this).children(".ui-dialog-content");if($dialog.dialog("option","modal")){$dialog.dialog("close")}})});$(document).click(function(e){createScroll();var eParent=$(e.target).parent(".pop");var str=eParent.length>0?eParent.attr("class").toString():"none";if(!$(e.target).hasClass("pop_opener")&&$(e.target).parents(".pop").length==0){$(".pop_opener").removeClass("active");$(".pop").hide()}$(".inp_hint .tooltip-body").remove()});$("a.tab-trigger").click(function(e){$("#bands .tab-container").hide();$($(this).attr("href").replace(/.*?(\#.+)$/,"$1")).show();$("#tablist li").removeClass("ui-tabs-active");$(this).parent().addClass("ui-tabs-active");return false});$("#points-block").tabs({active:0,fx:{opacity:"toggle",duration:1000},show:function(event,ui){google.maps.event.trigger(map,"resize")}}).addClass("ui-tabs-vertical ui-helper-clearfix");$(".scroll_wrapper").nanoScroller({contentClass:"nano-content"});$("a.popup_opener").click(function(){$($(this).attr("href").replace(/.*?(\#.+)$/,"$1")).dialog("open");return false});$(".popup.modal").dialog({modal:true,closeText:"&times;",autoOpen:false,resizable:false,draggable:false});$("#input-address").chosen({no_results_text:"Ничего не найдено",placeholder_text_single:"Выберите город",disable_search:false,allow_single_deselect:true});$("#city-search").chosen({no_results_text:"Населенный пункт не найден",placeholder_text_single:"Введите название",disable_search:false});$(".switcher_block .action_change_choice").on("click",function(e){var activeForm=$(this).parents("form");activeForm.find(".action_change_choice").removeClass("current_choice");$(this).addClass("current_choice");var thisParent=$(this).parent(".switcher_block"),thisSwitched=thisParent.next("input.switched"),thisType=$(this).find("input").attr("data-fieldtype");thisSwitched.click().blur().removeAttr("class").addClass("switched inp_"+thisType);if(thisType=="email"){thisSwitched.attr("data-validation","email")}else{thisSwitched.attr({"data-validation":"custom","data-validation-regexp":"^[0-9-+()]+$"})}init_validate()});$("#adr-list-view").click(function(){if(!$(this).hasClass("current_choice")){var listWidth=$("#adr-list").width(),listHeight=$("#adr-list").height();$("#map-form").removeClass("map-form");$("#adr-map").fadeOut();$("#adr-list").fadeIn();$(this).parents(".blueblock").animate({height:listHeight+60},200);$(".sort").show()}});$("#adr-map-view").click(function(){if(!$(this).hasClass("current_choice")){var map=$("#adr-map"),mapWidth=map.width(),mapHeight=map.height();$(this).parents(".blueblock").animate({height:mapHeight-30},200);$("#adr-list").hide();showLoader(map);$(this).parents().find("#map-form").addClass("map-form");$(".sort").hide()}});$("#adr-list .pseudo").click(function(e){$("#adr-map-view").click()});function showLoader(target){var loader=$('<div class="loader"><img src="/i/loader.gif" class="indicator" /></div>'),loaderX=Math.floor(target.width()/2-loader.width/2),loaderY=Math.floor(target.height()/2-loader.width/2);target.prepend(loader);setTimeout(function(){target.find(".loader").remove()},1000)}$("#adr-map-view1").click(function(){showLoader($("#adr-map"))});$(".card-num").each(function(){$(this).bind("keyup change",function(){var eInput=this;var jInput=$(eInput);var hintContainer=$(this).parents("dl").find(".zf-hint");var value=$(this).val();var sVal=value.replace(/\s/g,"");if(/^\d{0,15}$/.test(sVal)||validatePAN(sVal)){hintContainer.hide()}else{hintContainer.show()}printCardLogo(this);if(sVal==$.data(eInput,"prev-value")){return}$.data(eInput,"prev-value",sVal);if(sVal.length<=16){var rgx=/(\d{4})(\d+)/;while(rgx.test(sVal)){var sVal=sVal.replace(rgx,"$1 $2")}}jInput.val(sVal)});$(this).change()});$(".card-exp").each(function(){$(this).bind("keyup change",function(){var eInput=this;var jInput=$(eInput);var hintContainer=$(this).parents("dl").find(".zf-hint");var value=$(this).val();var sVal=value.replace(/[^\d\/]/g,"");if(hintContainer!=null){if(/^\d{2}\/\d{4}$/.test(sVal)){hintContainer.hide()}else{hintContainer.show()}}if(sVal==$.data(eInput,"prev-value")){return}$.data(eInput,"prev-value",sVal);if(sVal.length>=2){sVal=sVal.replace(/^((0)0|(1)[3-9])$/,"$2$3");sVal=sVal.replace(/^([2-9])(\d)$/,"0$1/$2");sVal=sVal.replace(/^([1-9])\/(\d*)$/,"0$1/$2");sVal=sVal.replace(/^(\d\d)\/([0-13-9]\d|2[1-9])$/,"$1/20$2");sVal=sVal.replace(/^(\d\d)\/?(\d{1,4}).*?$/,"$1/$2")}jInput.val(sVal)});$(this).change()});var fld_email=$(".inp_email");if(fld_email.length>0){fld_email.each(function(){$(this).attr("data-validation","email")})}var fld_phone=$(".inp_phone");if(fld_phone.length>0){fld_phone.each(function(){$(this).attr("data-validation","custom");$(this).attr("data-validation-regexp","^[0-9-+()]+$")})}$(".ps-selector select").change(function(){$("form input.form_button").attr("disabled","disabled");this.form.submit()});$("form").submit(function(){var overlayElement=document.getElementById("overlay");if(overlayElement!=null){overlayElement.style.height=document.body.scrollHeight;overlayElement.style.width=document.body.scrollWidth;overlayElement.style.display="block"}return})});function updateBlockWidth(target,source){$(target).each(function(){var newW=$(source).outerWidth(true);$(this).css({width:newW})})}function createScroll(){$(".scroll").nanoScroller({contentClass:"nano-content"})}$(window).resize(function(){updateBlockWidth(".suggest",".suggest_input");createScroll()});function validatePAN(pan){if(pan==null){return false}pan=pan.replace(/\D/g,"");if(!(/^\d{13,19}$/.test(pan))){return false}arr=(pan.length%2==1?"0"+pan:pan).split("");val=[0,2,4,6,8,1,3,5,7,9,0,1,2,3,4,5,6,7,8,9];luhn=0;for(var i=0;i<arr.length;i++){luhn+=val[(i%2)*10+parseInt(arr[i])]}return luhn%10==0}function printCardLogo(el){var card=$(el);var cardnum=card.val().replace(/\D/g,"");var icard=card.siblings(".card-type").children(".i-card");icard.removeClass("active animated i-visa i-master i-mir");if(cardnum.length>=2){if(cardnum.match(/^(5[1-5]|22[2-9]|2[3-6]|27[0-1]|2720)/)){icard.addClass("active animated i-master")}else{if(cardnum.match(/^(4[1-9])/)){icard.addClass("active animated i-visa")}else{if(cardnum.match(/^(2200|2201|2202|2203|220488)/)){icard.addClass("active animated i-mir")}else{icard.removeClass("animated i-visa i-master i-mir").addClass("active default")}}}return}else{icard.removeClass("active animated i-visa i-master i-mir").addClass("default");return}};