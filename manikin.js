
$(document).on('pageinit','#pageView',function(event){
	selectedDims = new Array();
	measures = new Array('STATURE','BMI');
/*	measure1='STATURE';
	measure2='BMI';
	measure3='';
	measure4='';
	measure5='';
	measure6='';
	measure7='';
	measure8='';
	measure9='';
	measure10='';
	measure11='';
*/	
	totalDims = 2;
	selectedDims['STATURE'] = true;
	selectedDims['BMI'] = true;	


	initSliders(measures,2)
});


	function dimSwitch(dimName){

			if (selectedDims[dimName]==false || selectedDims[dimName]=="undefined" || selectedDims[dimName]==null){
						selectedDims[dimName] = true;
						totalDims = totalDims + 1;
			
			} else if(totalDims<=1){
						alert('You may select a minimum of 1 dimensions. Please add a dimension to remove one.');
						$("#"+dimName).prop("checked",true).checkboxradio("refresh");	
			}else{
				selectedDims[dimName] = false;
				totalDims = totalDims - 1;
			}


			count = 0;
			measures = new Array('','','','','','','','','','','');
/*			measure1="";
			measure2="";
			measure3="";
			measure4="";
			measure5="";
			measure6="";
			measure7="";
			measure8="";
			measure9="";
			measure10="";
			measure11="";
*/	
			for (var key in selectedDims) {
				if (selectedDims[key]==true) {
					measures[count] = key;
					count++;
				}
			}
	
	
/*	// CONVERT TO EXPLICIT FORMAT TOO (EASIER IN SPOTS)	
			if (measures.length>0){
				measure1 = measures[0]; measure2="";measure3="";measure4="";measure5="";measure6="";measure7="";measure8="";measure9="";measure10="";measure11="";
			}
			if (measures.length>1){
				measure2 = measures[1];measure3="";measure4="";measure5="";measure6="";measure7="";measure8="";measure9="";measure10="";measure11="";
			}
			if (measures.length>2){
				measure3 = measures[2];measure4="";measure5="";measure6="";measure7="";measure8="";measure9="";measure10="";measure11="";
			}
			if (measures.length>3)
				measure4 = measures[3];measure5="";measure6="";measure7="";measure8="";measure9="";measure10="";measure11="";
			if(measures.length>4)
				measure5 = measures[4];measure6="";measure7="";measure8="";measure9="";measure10="";measure11="";
*/					
	}
	function initSliders(measures,totalDims){

		$('#sliders').html('');

		// 1st slider
		var min1 = Math.floor(Math.min.apply(Math,rawData_M[measures[0]])/dataRound[measures[0]])*dataRound[measures[0]];
		var max1 = Math.ceil(Math.max.apply(Math,rawData_M[measures[0]])/dataRound[measures[0]])*dataRound[measures[0]]
		slider_1_html = '';
		slider_1_html += '<div data-role="rangeslider" id="xRange">';
		slider_1_html += '<label for="xRange-min" style="margin-bottom:-10px"><span id="xLabel">'+fullName[measures[0]]+'</span> &nbsp;<span id="accom_1" style="color:red; font-size:20px;">%</span></label>';
		slider_1_html += '<input type="range" name="xRange-min" id="xRange-min" value="'+min1+'" min="'+min1+'" max="'+max1+'"/>';
		slider_1_html += '<input type="range" name="xRange-max" id="xRange-max" value="'+max1+'" min="'+min1+'" max="'+max1+'"	 />';
		slider_1_html += '</div>';
		$('#sliders').append(slider_1_html);
		
		// y slider
		if ((measures[1]!=null)&&(measures[1]!='')){
			var min2 = Math.floor(Math.min.apply( Math,rawData_M[ measures[1] ])/dataRound[measures[1] ])*dataRound[ measures[1] ];
			var max2 = Math.ceil(Math.max.apply(Math,rawData_M[measures[1]])/dataRound[measures[1]])*dataRound[measures[1]];
			slider_2_html='';
			slider_2_html += '<div data-role="rangeslider" id="yRange">';
			slider_2_html += '<label for="yRange-min" style="margin-bottom:-10px"><span id="yLabel">'+fullName[measures[1]]+'</span> &nbsp;<span id="accom_2" style="color:red; font-size:20px;">%</span></label>';
			slider_2_html += '<input type="range" name="yRange-min" id="yRange-min" value="'+min2+'" min="'+min2+'" max="'+max2+'" />';
			slider_2_html += '<input type="range" name="yRange-max" id="yRange-max" value="'+max2+'" min="'+min2+'" max="'+max2+'" />';
			$('#sliders').append(slider_2_html);
		 }
			 
		// z slider
		if ((measures[2]!=null)&&(measures[2]!='')){
			var  min3 = Math.floor(Math.min.apply(Math,rawData_M[measures[2]])/dataRound[measures[2]])*dataRound[measures[2]];
			var  max3 = Math.ceil(Math.max.apply(Math,rawData_M[measures[2]])/dataRound[measures[2]])*dataRound[measures[2]];
			slider_3_html ='';
			slider_3_html += '<div data-role="rangeslider" id="zRange">';
			slider_3_html += '<label for="zRange-min" style="margin-bottom:-10px"><span id="zLabel">'+fullName[measures[2]]+'</span> &nbsp;<span id="accom_3" style="color:red; font-size:20px;">%</span></label>';
			slider_3_html += '<input type="range" name="zRange-min" id="zRange-min" value="'+min3+'" min="'+min3+'" max="'+max3+'" />';
			slider_3_html += '<input type="range" name="zRange-max" id="zRange-max" value="'+max3+'" min="'+min3+'" max="'+max3+'" />';
   			$('#sliders').append(slider_3_html);
		}

		// q slider
		if ((measures[3]!=null)&&(measures[3]!='')){
			var  min4 = Math.floor(Math.min.apply(Math,rawData_M[measures[3]])/dataRound[measures[3]])*dataRound[measures[3]];
			var  max4 = Math.ceil(Math.max.apply(Math,rawData_M[measures[3]])/dataRound[measures[3]])*dataRound[measures[3]];
			slider_4_html ='';
			slider_4_html += '<div data-role="rangeslider" id="qRange">';
			slider_4_html += '<label for="qRange-min" style="margin-bottom:-10px"><span id="qLabel">'+fullName[measures[3]]+'</span> &nbsp;<span id="accom_4" style="color:red; font-size:20px;">%</span></label>';
			slider_4_html += '<input type="range" name="qRange-min" id="qRange-min" value="'+min4+'" min="'+min4+'" max="'+max4+'"	/>';
			slider_4_html += '<input type="range" name="qRange-max" id="qRange-max" value="'+max4+'" min="'+min4+'" max="'+max4+'" />';
			$('#sliders').append(slider_4_html);
  
		}
		
		// q slider
		if ((measures[4]!=null)&&(measures[0]!='')){
			var  min5 = Math.floor(Math.min.apply(Math,rawData_M[measures[4]])/dataRound[measures[4]])*dataRound[measures[4]];
			var  max5 = Math.ceil(Math.max.apply(Math,rawData_M[measures[4]])/dataRound[measures[4]])*dataRound[measures[4]];
			slider_5_html ='';
			slider_5_html += '<div data-role="rangeslider" id="wRange">';
			slider_5_html += '<label for="qRange-min" style="margin-bottom:-10px"><span id="wLabel">'+fullName[measures[4]]+'</span> &nbsp;<span id="accom_5" style="color:red; font-size:20px;">%</span></label>';
			slider_5_html += '<input type="range" name="wRange-min" id="wRange-min" value="'+min5+'" min="'+min5+'" max="'+max5+'"	/>';
			slider_5_html += '<input type="range" name="wRange-max" id="wRange-max" value="'+max5+'" min="'+min5+'" max="'+max5+'" />';
			$('#sliders').append(slider_5_html);
  
		}
				
		$('#sliders').trigger('create');
		
	}

$(document).on('change','#anthroPickerForm', function(event){
	initSliders(measures,totalDims);
});


$( document ).on('change','#sliders', function( event ) {
	var accom_1 = $('#xRange-max').val() - $('#xRange-min').val();
	var accom_2 = $('#yRange-max').val() - $('#yRange-min').val();
	var accom_3 = $('#zRange-max').val() - $('#zRange-min').val();
	var accom_4 = $('#qRange-max').val() - $('#qRange-min').val();
	var accom_5 = $('#qRange-max').val() - $('#qRange-min').val();
	var totals = (accom_1+accom_2)/2
	$("#totals").html(totals);
	$("#accom_1").html(accom_1+'%');
	$("#accom_2").html(accom_2+'%');
	$("#accom_3").html(accom_3+'%');
	$("#accom_4").html(accom_4+'%');
	
});

$(document).on('change','#view',function(event){
	if($("#view-checkbox").prop("checked")){
		$('#images').html('');
		$('#images').append([
					'<div class="ui-block-a" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_s_1.png" alt="human 1" style="height: 250px"></div></div>',
					'<div class="ui-block-b" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_s_2.png" alt="human 1" style="height: 250px"></div></div>',
					'<div class="ui-block-c" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_s_3.png" alt="human 1" style="height: 250px"></div></div>',
					'<div class="ui-block-d" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_s_4.png" alt="human 1" style="height: 250px"></div></div>',
					'<div class="ui-block-e" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_s_5.png" alt="human 1" style="height: 250px"></div></div>'].join('')
	);
	} else{
		$('#images').html('');
		$('#images').append([
					'<div class="ui-block-a" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_1.png" alt="human 1" style="height: 250px"></div></div>',
					'<div class="ui-block-b" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_2.png" alt="human 1" style="height: 250px"></div></div>',
					'<div class="ui-block-c" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_3.png" alt="human 1" style="height: 250px"></div></div>',
					'<div class="ui-block-d" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_4.png" alt="human 1" style="height: 250px"></div></div>',
					'<div class="ui-block-e" ><div class="ui-bar ui-bar-a" ><img src="./images/test_img_5.png" alt="human 1" style="height: 250px"></div></div>'].join('')
	);
	}
});

