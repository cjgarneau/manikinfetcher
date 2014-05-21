
$(document).on('pageinit','#pageView',function(event){
	selectedDims = new Array();
	measures = new Array('STATURE','BMI');
	totalDims = 2;
	imgChange = 0;
	gender='m';
	selectedDims['STATURE'] = true;
	selectedDims['BMI'] = true;	
	popData=rawData_M;
	initSliders(measures,2);
	limitManikins(measures,totalDims);
	updateImages();


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
		for (var key in selectedDims) {
			if (selectedDims[key]==true) {
				measures[count] = key;
				count++;
			}
		}			
}

function initSliders(measures,totalDims){

	$('#sliders').html('');
	
	
	
	// 1st slider
	var min1 = Math.floor(Math.min.apply(Math,popData[measures[0]])/dataRound[measures[0]])*dataRound[measures[0]];
	var max1 = Math.ceil(Math.max.apply(Math,popData[measures[0]])/dataRound[measures[0]])*dataRound[measures[0]]
	var slider_1_html = '';
	slider_1_html += '<div data-role="rangeslider" id="Range1" >';
	slider_1_html += '<label for="Range1-min" style="margin-bottom:-10px"><span id="SlideLabel1" style="font-size:20px;">'+fullName[measures[0]]+'</span> &nbsp;<span id="accom_1" style="color:#2e6794; font-size:20px;">%</span></label>';
	slider_1_html += '<input type="range" name="Range1-min" id="Range1-min" value="'+min1+'" min="'+min1+'" max="'+max1+'" step="'+sliderStep[measures[0]]+'"/>';
	slider_1_html += '<input type="range" name="Range1-max" id="Range1-max" value="'+max1+'" min="'+min1+'" max="'+max1+'" step="'+sliderStep[measures[0]]+'"/>';
	slider_1_html += '</div>';
	$('#sliders').append(slider_1_html);
	
	// y slider
	if ((measures[1]!=null)&&(measures[1]!='')){
		var min2 = Math.floor(Math.min.apply( Math,popData[ measures[1] ])/dataRound[measures[1] ])*dataRound[ measures[1] ];
		var max2 = Math.ceil(Math.max.apply(Math,popData[measures[1]])/dataRound[measures[1]])*dataRound[measures[1]];
		var slider_2_html='';
		slider_2_html += '<div data-role="rangeslider" id="Range2" >';
		slider_2_html += '<label for="Range2-min" style="margin-bottom:-10px"><span id="SlideLabel2" style="font-size:20px;">'+fullName[measures[1]]+'</span> &nbsp;<span id="accom_2" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_2_html += '<input type="range" name="Range2-min" id="Range2-min" value="'+min2+'" min="'+min2+'" max="'+max2+'" step="'+sliderStep[measures[1]]+'"/>';
		slider_2_html += '<input type="range" name="Range2-max" id="Range2-max" value="'+max2+'" min="'+min2+'" max="'+max2+'" step="'+sliderStep[measures[1]]+'"/>';
		$('#sliders').append(slider_2_html);
	 }
		 
	// z slider
	if ((measures[2]!=null)&&(measures[2]!='')){
		var  min3 = Math.floor(Math.min.apply(Math,popData[measures[2]])/dataRound[measures[2]])*dataRound[measures[2]];
		var  max3 = Math.ceil(Math.max.apply(Math,popData[measures[2]])/dataRound[measures[2]])*dataRound[measures[2]];
		var slider_3_html ='';
		slider_3_html += '<div data-role="rangeslider" id="Range3" >';
		slider_3_html += '<label for="Range3-min" style="margin-bottom:-10px"><span id="SlideLabel3" style="font-size:20px;">'+fullName[measures[2]]+'</span> &nbsp;<span id="accom_3" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_3_html += '<input type="range" name="Range3-min" id="Range3-min" value="'+min3+'" min="'+min3+'" max="'+max3+'" step="'+sliderStep[measures[2]]+'" />';
		slider_3_html += '<input type="range" name="Range3-max" id="Range3-max" value="'+max3+'" min="'+min3+'" max="'+max3+'" step="'+sliderStep[measures[2]]+'" />';
		$('#sliders').append(slider_3_html);
	}

	// q slider
	if ((measures[3]!=null)&&(measures[3]!='')){
		var  min4 = Math.floor(Math.min.apply(Math,popData[measures[3]])/dataRound[measures[3]])*dataRound[measures[3]];
		var  max4 = Math.ceil(Math.max.apply(Math,popData[measures[3]])/dataRound[measures[3]])*dataRound[measures[3]];
		var slider_4_html ='';
		slider_4_html += '<div data-role="rangeslider" id="Range4" >';
		slider_4_html += '<label for="Range4-min" style="margin-bottom:-10px"><span id="SlideLabel4" style="font-size:20px;">'+fullName[measures[3]]+'</span> &nbsp;<span id="accom_4" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_4_html += '<input type="range" name="Range4-min" id="Range4-min" value="'+min4+'" min="'+min4+'" max="'+max4+'" step="'+sliderStep[measures[3]]+'"/>';
		slider_4_html += '<input type="range" name="Range4-max" id="Range4-max" value="'+max4+'" min="'+min4+'" max="'+max4+'" step="'+sliderStep[measures[3]]+'"/>';
		$('#sliders').append(slider_4_html);

	}
	
	// q slider
	if ((measures[4]!=null)&&(measures[4]!='')){
		var  min5 = Math.floor(Math.min.apply(Math,popData[measures[4]])/dataRound[measures[4]])*dataRound[measures[4]];
		var  max5 = Math.ceil(Math.max.apply(Math,popData[measures[4]])/dataRound[measures[4]])*dataRound[measures[4]];
		var slider_5_html ='';
		slider_5_html += '<div data-role="rangeslider" id="Range5" >';
		slider_5_html += '<label for="Range5-min" style="margin-bottom:-10px"><span id="SlideLabel5" style="font-size:20px;">'+fullName[measures[4]]+'</span> &nbsp;<span id="accom_5" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_5_html += '<input type="range" name="Range5-min" id="Range5-min" value="'+min5+'" min="'+min5+'" max="'+max5+'" step="'+sliderStep[measures[4]]+'"/>';
		slider_5_html += '<input type="range" name="Range5-max" id="Range5-max" value="'+max5+'" min="'+min5+'" max="'+max5+'" step="'+sliderStep[measures[4]]+'"/>';
		$('#sliders').append(slider_5_html);

	}
	
	if ((measures[5]!=null)&&(measures[5]!='')){
		var  min6 = Math.floor(Math.min.apply(Math,popData[measures[5]])/dataRound[measures[5]])*dataRound[measures[5]];
		var  max6 = Math.ceil(Math.max.apply(Math,popData[measures[5]])/dataRound[measures[5]])*dataRound[measures[5]];
		var slider_6_html ='';
		slider_6_html += '<div data-role="rangeslider" id="Range6" >';
		slider_6_html += '<label for="Range6-min" style="margin-bottom:-10px"><span id="SlideLabel6" style="font-size:20px;">'+fullName[measures[5]]+'</span> &nbsp;<span id="accom_6" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_6_html += '<input type="range" name="Range6-min" id="Range6-min" value="'+min6+'" min="'+min6+'" max="'+max6+'" step="'+sliderStep[measures[5]]+'"/>';
		slider_6_html += '<input type="range" name="Range6-max" id="Range6-max" value="'+max6+'" min="'+min6+'" max="'+max6+'" step="'+sliderStep[measures[5]]+'"/>';
		$('#sliders').append(slider_6_html);

	}
	
	if ((measures[6]!=null)&&(measures[6]!='')){
		var  min7 = Math.floor(Math.min.apply(Math,popData[measures[6]])/dataRound[measures[6]])*dataRound[measures[6]];
		var  max7 = Math.ceil(Math.max.apply(Math,popData[measures[6]])/dataRound[measures[6]])*dataRound[measures[6]];
		var slider_7_html ='';
		slider_7_html += '<div data-role="rangeslider" id="Range7" >';
		slider_7_html += '<label for="Range7-min" style="margin-bottom:-10px"><span id="SlideLabel7" style="font-size:20px;">'+fullName[measures[6]]+'</span> &nbsp;<span id="accom_7" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_7_html += '<input type="range" name="Range7-min" id="Range7-min" value="'+min7+'" min="'+min7+'" max="'+max7+'" step="'+sliderStep[measures[6]]+'"/>';
		slider_7_html += '<input type="range" name="Range7-max" id="Range7-max" value="'+max7+'" min="'+min7+'" max="'+max7+'" step="'+sliderStep[measures[6]]+'"/>';
		$('#sliders').append(slider_7_html);

	}		

	if ((measures[7]!=null)&&(measures[7]!='')){
		var  min8 = Math.floor(Math.min.apply(Math,popData[measures[7]])/dataRound[measures[7]])*dataRound[measures[7]];
		var  max8 = Math.ceil(Math.max.apply(Math,popData[measures[7]])/dataRound[measures[7]])*dataRound[measures[7]];
		var slider_8_html ='';
		slider_8_html += '<div data-role="rangeslider" id="Range8" >';
		slider_8_html += '<label for="Range8-min" style="margin-bottom:-10px"><span id="SlideLabel8" style="font-size:20px;">'+fullName[measures[7]]+'</span> &nbsp;<span id="accom_8" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_8_html += '<input type="range" name="Range8-min" id="Range8-min" value="'+min8+'" min="'+min8+'" max="'+max8+'" step="'+sliderStep[measures[7]]+'"/>';
		slider_8_html += '<input type="range" name="Range8-max" id="Range8-max" value="'+max8+'" min="'+min8+'" max="'+max8+'" step="'+sliderStep[measures[7]]+'"/>';
		$('#sliders').append(slider_8_html);

	}

	if ((measures[8]!=null)&&(measures[8]!='')){
		var  min9 = Math.floor(Math.min.apply(Math,popData[measures[8]])/dataRound[measures[8]])*dataRound[measures[8]];
		var  max9 = Math.ceil(Math.max.apply(Math,popData[measures[8]])/dataRound[measures[8]])*dataRound[measures[8]];
		var slider_9_html ='';
		slider_9_html += '<div data-role="rangeslider" id="Range9" >';
		slider_9_html += '<label for="Range9-min" style="margin-bottom:-10px"><span id="SlideLabel9" style="font-size:20px;">'+fullName[measures[8]]+'</span> &nbsp;<span id="accom_9" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_9_html += '<input type="range" name="Range9-min" id="Range9-min" value="'+min9+'" min="'+min9+'" max="'+max9+'" step="'+sliderStep[measures[8]]+'"/>';
		slider_9_html += '<input type="range" name="Range9-max" id="Range9-max" value="'+max9+'" min="'+min9+'" max="'+max9+'" step="'+sliderStep[measures[8]]+'"/>';
		$('#sliders').append(slider_9_html);

	}		

	if ((measures[9]!=null)&&(measures[9]!='')){
		var  min10 = Math.floor(Math.min.apply(Math,popData[measures[9]])/dataRound[measures[9]])*dataRound[measures[9]];
		var  max10 = Math.ceil(Math.max.apply(Math,popData[measures[9]])/dataRound[measures[9]])*dataRound[measures[9]];
		var slider_10_html ='';
		slider_10_html += '<div data-role="rangeslider" id="Range10" >';
		slider_10_html += '<label for="Range10-min" style="margin-bottom:-10px"><span id="SlideLabel10" style="font-size:20px;">'+fullName[measures[9]]+'</span> &nbsp;<span id="accom_10" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_10_html += '<input type="range" name="Range10-min" id="Range10-min" value="'+min10+'" min="'+min10+'" max="'+max10+'" step="'+sliderStep[measures[9]]+'"/>';
		slider_10_html += '<input type="range" name="Range10-max" id="Range10-max" value="'+max10+'" min="'+min10+'" max="'+max10+'" step="'+sliderStep[measures[9]]+'"/>';
		$('#sliders').append(slider_10_html);

	}
	
	if ((measures[10]!=null)&&(measures[10]!='')){
		var  min11 = Math.floor(Math.min.apply(Math,popData[measures[10]])/dataRound[measures[10]])*dataRound[measures[10]];
		var  max11 = Math.ceil(Math.max.apply(Math,popData[measures[10]])/dataRound[measures[10]])*dataRound[measures[10]];
		var slider_11_html ='';
		slider_11_html += '<div data-role="rangeslider" id="Range10" >';
		slider_11_html += '<label for="Range11-min" style="margin-bottom:-10px"><span id="SlideLabel11" style="font-size:20px;">'+fullName[measures[10]]+'</span> &nbsp;<span id="accom_11" style="color:#2e6794; font-size:20px;">%</span></label>';
		slider_11_html += '<input type="range" name="Range11-min" id="Range11-min" value="'+min11+'" min="'+min11+'" max="'+max11+'" step="'+sliderStep[measures[10]]+'"/>';
		slider_11_html += '<input type="range" name="Range11-max" id="Range11-max" value="'+max11+'" min="'+min11+'" max="'+max11+'" step="'+sliderStep[measures[10]]+'"/>';
		$('#sliders').append(slider_11_html);

	}
	
	$('#sliders').trigger('create');
	
}

function limitManikins(measures,totalDims){
	temp =[];
	//for each slider or measure m
	for (m=0;m<totalDims;m++) {
	
		//for each measure get range from sliders
		sliderMin=$('#Range'+(m+1)+'-min').val();
		sliderMax=$('#Range'+(m+1)+'-max').val();

		//create array to hold id of individuals for each measure
		temp[measures[m]]=[];
		
		//for each individual check if in range. if true return index. 
		for (j=0; j <= popData['BMI'].length; j++){
			if (popData[measures[m]][j] >= sliderMin && popData[measures[m]][j] <= sliderMax){
				temp[measures[m]].push(j)
			}
		
		}			

		$('#accom_'+(m+1)).html('Manikins selected: '+temp[measures[m]].length)
	}
	manikinID=[];
	var fullArray = [];
	for(l=0;l<totalDims;l++){
		fullArray=fullArray.concat(temp[measures[l]]);
	}
	fullArray=fullArray.sort(function(a, b){return a-b});
	for(var k=0;k<fullArray.length;k++){
		if(fullArray[k]==fullArray[k-(totalDims-1)]){
			manikinID.push(fullArray[k]);
		}
	}
	totalManikins=manikinID.length;
	$('#totals').html(totalManikins);
}  

function getAnthro(manikinID){
	var anthro=[];
	manikinID.forEach(function(entry){
	console.log('Stature:'+popData.STATURE[entry]+' BMI:'+popData.BMI[entry]+' SSH:'+popData.SSH[entry]+' BIACROMIAL_BREADTH:'+popData.BIACROMIAL_BREADTH[entry]+' KNEE_HT_SITTING:'+popData.KNEE_HT_SITTING[entry]+' "FOREARM_HAND_LGTH":'+popData.FOREARM_HAND_LGTH[entry]+' HIP_BRDTH_SITTING:'+popData.HIP_BRDTH_SITTING[entry]+' HEAD_CIRC:'+popData.HEAD_CIRC[entry]+' CHEST_CIRC:'+popData.CHEST_CIRC[entry]+' WAIST_CIRC_OMPHALION:'+popData.WAIST_CIRC_OMPHALION[entry]+' BUTTOCK_CIRC:'+popData.BUTTOCK_CIRC[entry]);
	anthro.push([popData.STATURE[entry],popData.BMI[entry],popData.SSH[entry],popData.BIACROMIAL_BREADTH[entry],popData.KNEE_HT_SITTING[entry],popData.FOREARM_HAND_LGTH[entry],popData.HIP_BRDTH_SITTING[entry],popData.HEAD_CIRC[entry],popData.CHEST_CIRC[entry],popData.WAIST_CIRC_OMPHALION[entry],popData.BUTTOCK_CIRC[entry]]);
	});
	return anthro
}

function updateImages(){	
	//check for front or side images
	if($('#radio-choice-h-2b').prop('checked')){
		var view ='side';
	}else{
		var view = 'front';
	}
	
	var num=5;//default for viewing
	var gridtype=['solo','a','b','c','d','e'];
	//update number to display if less than 5
	if(totalManikins<=5){
		num=totalManikins;						
		}
		
	//image update
	var image_html=[];
	for(i=0;i<num;i++){
		image_html.push('<div class="ui-block-'+gridtype[i+1]+'" style="text-align:center" ><div class="ui-bar" style="text-align:center"><img src="./images/'+view+'/img_'+gender+'_'+view[0]+'_'+popData.STATURE[manikinID[i]]+'_'+Math.floor(popData.BMI[manikinID[i]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[i]])+'.png" alt="human" style="height: 250px"></div></div>');
	}
	$('#imageView').html('');
	$('#imageView').append('<div class="ui-grid-'+gridtype[num-1]+'"  id="images" style="text-align:center" >'+image_html.join('')+'</div>')
	
	//download bar update
	var download_html=[];
	for(j=0;j<num;j++){
		if(totalManikins>5){
			download_html.push('<div class="ui-block-'+gridtype[j+1]+'"><a href="#popupDialog'+(j+1)+'" id="#popupDialog'+(j+1)+'" data-rel="popup" class="ui-shadow ui-btn ui-state-disabled ui-mini ui-corner-all ">Download</a></div>');
			$('#images').addClass('disable');
			$('#downloadAll').html('<a href="#downloadAllDialog" data-rel="popup" class="ui-btn ui-mini ui-state-disabled" >Download All</a>')
		}else{
			download_html.push('<div class="ui-block-'+gridtype[j+1]+'"><a href="#popupDialog'+(j+1)+'" id="#popupDialog'+(j+1)+'" data-rel="popup" class="ui-shadow ui-btn ui-mini ui-corner-all">Download</a></div>');
			$('#images').removeClass('disable');
			$('#downloadAll').html('<a href="#downloadAllDialog" data-rel="popup" class="ui-btn ui-mini" >Download All</a>')			
		}
	}
	$('#downloadbars').html('');
	$('#downloadbars').append('<div class="ui-grid-'+gridtype[num-1]+'" id="downloads" >'+download_html.join('')+'</div>');
	
	//download dialog content update
	var dialogs_html=[];
	for(j=0;j<num;j++){
		$('#dialogimg'+(j+1)).html('\
			<img src="./images/front/img_'+gender+'_f_'+popData.STATURE[manikinID[j]]+'_'+Math.floor(popData.BMI[manikinID[j]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+'.png" alt="human" style="height: 250px">\
			<img src="./images/side/img_'+gender+'_s_'+popData.STATURE[manikinID[j]]+'_'+Math.floor(popData.BMI[manikinID[j]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+'.png" alt="human" style="height: 250px">'
		);
		
		$('#anthroDialog'+(j+1)).html('<table>\
			<tr><td>Stature</td><td>'+popData.STATURE[manikinID[j]]+' mm</td></tr>\
			<tr><td>BMI</td><td>'+popData.BMI[manikinID[j]]+' kg/m<sup>2</sup></td></tr>\
			<tr><td>Sitting Height/Stature</td><td>'+popData.SSH[manikinID[j]]+'</td></tr>\
			<tr><td>Biacromial Breadth</td><td>'+popData.BIACROMIAL_BRTH[manikinID[j]]+' mm</td></tr>\
			<tr><td>Knee Height-Sitting</td><td>'+popData.KNEE_HT_SITTING[manikinID[j]]+' mm</td></tr>\
			<tr><td>Forearm-Hand Length</td><td>'+popData.FOREARM_HAND_LGTH[manikinID[j]]+' mm</td></tr>\
			<tr><td>Sitting Hip Breadth</td><td>'+popData.HIP_BRDTH_SITTING[manikinID[j]]+' mm</td></tr>\
			<tr><td>Head Circumference</td><td>'+popData.HEAD_CIRC[manikinID[j]]+' mm</td></tr>\
			<tr><td>Chest Circumference</td><td>'+popData.CHEST_CIRC[manikinID[j]]+' mm</td></tr>\
			<tr><td>Waist Circumference</td><td>'+popData.WAIST_CIRC_OMPHALION[manikinID[j]]+' mm</td></tr>\
			<tr><td>Hip Circumference (at buttocks)</td><td>'+popData.BUTTOCK_CIRC[manikinID[j]]+' mm</td></tr>\
		</table>')
	}

	$('#downloadLink'+(j+1)).html('\
		<a href="./images/front/img_'+gender+'_f_'+popData.STATURE[manikinID[j]]+'_'+Math.floor(popData.BMI[manikinID[j]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+'.png" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-rel="back">Images (.png)</a>\
		<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-rel="back" data-transition="flow">CAD (.jt)</a>\
		<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-rel="back" data-transition="flow">Jack file (.fig)</a>'	
	);

			
}

//Update population on slider change

	$(document).on('change','#Range1-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 1 min
	$(document).on('change','#Range1-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 1 max

	$(document).on('change','#Range2-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 2 min
	$(document).on('change','#Range2-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 2 max

	$(document).on('change','#Range3-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 3 min
	$(document).on('change','#Range3-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 3 max

	$(document).on('change','#Range4-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 4 min
	$(document).on('change','#Range4-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 4 max

	$(document).on('change','#Range5-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 5 min
	$(document).on('change','#Range5-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 5 max

	$(document).on('change','#Range6-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 6 min
	$(document).on('change','#Range6-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 6 max

	$(document).on('change','#Range7-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 7 min
	$(document).on('change','#Range7-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 7 max

	$(document).on('change','#Range8-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 8 min
	$(document).on('change','#Range8-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 8 max

	$(document).on('change','#Range9-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 9 min
	$(document).on('change','#Range9-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 9 max

	$(document).on('change','#Range10-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 10 min
	$(document).on('change','#Range10-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 10 max

	$(document).on('change','#Range11-min', function(event){
		limitManikins(measures,totalDims);
	});//Slider 11 min
	$(document).on('change','#Range11-max', function(event){
		limitManikins(measures,totalDims);
	});//Slider 11 max


//front-side view change
$(document).on('change','#view',function(event){
	updateImages();
});

//update images from sliders
$(document).on('change','#sliders',function(event){

		$('#Range1-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range1-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}		
		});
		$('#Range2-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range2-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});		
		$('#Range3-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range3-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range4-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range4-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}

		});	
		$('#Range5-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range5-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range6-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range6-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});		
		$('#Range7-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range7-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range8-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range8-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range9-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range9-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range10-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range10-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});		
		$('#Range11-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});
		$('#Range11-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
		});	
		
				
	if (totalManikins>5 && imgChange==1) {
		imgChange = 0;
		updateImages();
	}
});

//update sliders from anthro
$(document).on('change','#anthroPickerForm', function(event){
	initSliders(measures,totalDims);
});

//update pop from gender 
$(document).on('change','#genderSwitch',function(event){
	if($('#mvGender_M').prop('checked')){
		popData=rawData_M;
		gender='m';
	}else{
		popData=rawData_F;
		gender='f';
	}
	initSliders(measures,totalDims);
	limitManikins(measures,totalDims);
	updateImages();
});


