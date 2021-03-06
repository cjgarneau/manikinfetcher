
$(document).on('pageinit','#pageView',function(event){
	selectedDims = new Array();
	measures = new Array('STATURE','BMI');
	totalDims = 2;
	imgChange = 0;
	gender='male';
	//unitsval=1;
	unitstr='mm';
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
	var max1 = Math.ceil(Math.max.apply(Math,popData[measures[0]])/dataRound[measures[0]])*dataRound[measures[0]];
	var slider_1_html = '';
	slider_1_html += '<div data-role="rangeslider" id="Range1" >';
	slider_1_html += '<label for="Range1-min" style="margin-bottom:-10px"><span id="SlideLabel1" style="font-size:20px;">'+fullName[measures[0]]+'</span> &nbsp;<span id="accom_1" style="color:#2e6794; font-size:20px;">%</span></label>';
	slider_1_html += '<input type="range" name="Range1-min" id="Range1-min" value="'+min1+'" min="'+min1+'" max="'+max1+'" step="'+sliderStep[measures[0]]+'"/>';
	slider_1_html += '<input type="range" name="Range1-max" id="Range1-max" value="'+max1+'" min="'+min1+'" max="'+max1+'" step="'+sliderStep[measures[0]]+'"/>';
	slider_1_html += '</div>';
	slider_1_html += '\
	<div id="percentile1" class="ui-grid-d">\
		<div id="pc1-min" class="ui-block-a" style="width:5%">\
		</div>\
		<div class="ui-block-b" style="width:35%" ></div>\
		<div id="p1" class="ui-block-c" style="width:150px" >\
			<form>\
				<label for="pc1-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
				<input type="checkbox"  name="pc1-checkbox" id="pc1-checkbox" data-mini="true">\
			</form>\
		</div>\
		<div class="ui-block-c" style="width:35%" ></div>\
		<div id="pc1-max" class="ui-block-d" style="width:5%">\
		</div>\
	</div>';
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
		slider_2_html += '</div>';
		slider_2_html += '\
		<div id="percentile2" class="ui-grid-d">\
			<div id="pc2-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p2" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc2-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc2-checkbox" id="pc2-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc2-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';
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
		slider_3_html += '</div>';
		slider_3_html += '\
		<div id="percentile3" class="ui-grid-d">\
			<div id="pc3-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p3" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc3-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc3-checkbox" id="pc3-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc3-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';

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
		slider_4_html += '</div>';
		slider_4_html += '\
		<div id="percentile4" class="ui-grid-d">\
			<div id="pc4-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p4" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc4-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc4-checkbox" id="pc4-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc4-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';

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
		slider_5_html += '</div>';
		slider_5_html += '\
		<div id="percentile5" class="ui-grid-d">\
			<div id="pc5-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p5" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc5-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc5-checkbox" id="pc5-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc5-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';
		
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
		slider_6_html += '</div>';
		slider_6_html += '\
		<div id="percentile6" class="ui-grid-d">\
			<div id="pc6-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p6" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc6-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc6-checkbox" id="pc6-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc6-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';
		
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
		slider_7_html += '</div>';
		slider_7_html += '\
		<div id="percentile7" class="ui-grid-d">\
			<div id="pc7-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p7" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc7-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc7-checkbox" id="pc7-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc7-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';
		
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
		slider_8_html += '</div>';
		slider_8_html += '\
		<div id="percentile8" class="ui-grid-d">\
			<div id="pc8-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p8" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc8-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc8-checkbox" id="pc8-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc8-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';
		
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
		slider_9_html += '</div>';
		slider_9_html += '\
		<div id="percentile9" class="ui-grid-d">\
			<div id="pc9-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p9" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc9-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc9-checkbox" id="pc9-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc9-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';
		
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
		slider_10_html += '</div>';
		slider_10_html += '\
		<div id="percentile10" class="ui-grid-d">\
			<div id="pc10-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p10" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc10-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc10-checkbox" id="pc10-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc10-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';
		
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
		slider_11_html += '</div>';
		slider_11_html += '\
		<div id="percentile11" class="ui-grid-d">\
			<div id="pc11-min" class="ui-block-a" style="width:5%">\
			</div>\
			<div class="ui-block-b" style="width:35%" ></div>\
			<div id="p11" class="ui-block-c" style="width:150px" >\
				<form>\
					<label for="pc11-checkbox" style="margin:auto; margin-top:-10px; margin-bottom:20px;">Use Percentiles</label>\
					<input type="checkbox"  name="pc11-checkbox" id="pc11-checkbox" data-mini="true">\
				</form>\
			</div>\
			<div class="ui-block-c" style="width:35%" ></div>\
			<div id="pc11-max" class="ui-block-d" style="width:5%">\
			</div>\
		</div>';
		
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
			if (Math.round(popData[measures[m]][j]) >= sliderMin && Math.round(popData[measures[m]][j]) <= sliderMax){
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
		image_html.push('<div class="ui-block-'+gridtype[i+1]+'" style="text-align:center" ><div class="ui-bar" style="text-align:center"><img src="/Users/student/Documents/Web/manikinfetcher stuff//'+gender+'/img_'+gender[0]+'_'+view[0]+'_'+popData.STATURE[manikinID[i]]+'_'+Math.floor(popData.BMI[manikinID[i]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[i]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[i]])+'.png" alt="human" style="height: 250px"></div></div>');
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
			<img id="dialogimgf'+(j+1)+'" src="/Users/student/Documents/Web/manikinfetcher stuff//'+gender+'/img_'+gender[0]+'_f_'+popData.STATURE[manikinID[j]]+'_'+Math.floor(popData.BMI[manikinID[j]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[j]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+'.png" alt="human" style="height: 250px">\
			<img id="dialogimgs'+(j+1)+'" src="/Users/student/Documents/Web/manikinfetcher stuff//'+gender+'/img_'+gender[0]+'_s_'+popData.STATURE[manikinID[j]]+'_'+Math.floor(popData.BMI[manikinID[j]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[j]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+'.png" alt="human" style="height: 250px">'
		);
		
		$('#anthroDialog'+(j+1)).html('<table>\
			<tr><td>Stature</td><td>'+popData.STATURE[manikinID[j]]+' '+unitstr+'</td></tr>\
			<tr><td>BMI</td><td>'+Math.round(popData.BMI[manikinID[j]])+' kg/m<sup>2</sup></td></tr>\
			<tr><td>Sitting Height</td><td>'+Math.round(popData.SITTING_HT[manikinID[j]])+' '+unitstr+'</td></tr>\
			<tr><td>Biacromial Breadth</td><td>'+Math.round(popData.BIACROMIAL_BRTH[manikinID[j]])+' '+unitstr+'</td></tr>\
			<tr><td>Knee Height-Sitting</td><td>'+Math.round(popData.KNEE_HT_SITTING[manikinID[j]])+' '+unitstr+'</td></tr>\
			<tr><td>Forearm-Hand Length</td><td>'+Math.round(popData.FOREARM_HAND_LGTH[manikinID[j]])+' '+unitstr+'</td></tr>\
			<tr><td>Sitting Hip Breadth</td><td>'+Math.round(popData.HIP_BRDTH_SITTING[manikinID[j]])+' '+unitstr+'</td></tr>\
			<tr><td>Head Circumference</td><td>'+Math.round(popData.HEAD_CIRC[manikinID[j]])+' '+unitstr+'</td></tr>\
			<tr><td>Chest Circumference</td><td>'+Math.round(popData.CHEST_CIRC[manikinID[j]])+' '+unitstr+'</td></tr>\
			<tr><td>Waist Circumference</td><td>'+Math.round(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+' '+unitstr+'</td></tr>\
			<tr><td>Hip Circumference (at buttocks)</td><td>'+Math.round(popData.BUTTOCK_CIRC[manikinID[j]])+' '+unitstr+'</td></tr>\
		</table>');
		
		$('#downloadLink'+(j+1)).html('\
			<a href="'+$('#dialogimgf'+(j+1)).attr('src')+'"  id="d'+(j+1)+'imgf" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-ajax="false" download >Front Image (.png)</a>\
			<a href="'+$('#dialogimgs'+(j+1)).attr('src')+'"  id="d'+(j+1)+'imgs" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-ajax="false" download>Side Image (.png)</a>\
			<a href="./3dfiles/male/'+gender[0]+'_'+popData.STATURE[manikinID[j]]+'_'+Math.floor(popData.BMI[manikinID[j]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[j]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+'.jt" id="d'+(j+1)+'jt" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-ajax="false" download >CAD (.jt)</a>\
			<a href="./3dfiles/male/'+gender[0]+'_jack_'+popData.STATURE[manikinID[j]]+'_'+Math.floor(popData.BMI[manikinID[j]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[j]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+'.fig" id="d'+(j+1)+'jack" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-ajax="false" download>Jack file (.fig)</a>\
			<a href="#" id="d'+(j+1)+'anthro" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b"  data-ajax="false" download>anthro (.txt)</a>'	
		);
	}
				
}

function percentile(measure,percentile){
	var pop=popData[measure].sort(function(a,b){return a-b});
	if(percentile==100){
		interp = pop[pop.length-1]
	} else if(percentile==0){
		interp = popData[0]
	} else{
	var p=percentile/100*(popData.BMI.length)
	var lval = Math.floor(p);
	var uval = lval+1
	var interp = (pop[uval]-pop[lval])*p%1+pop[lval]
	}
	return interp
	}

function percentile2Val(measure,val){
	var below=0;
	for (j=0;j<popData.BMI.length;j++){
		if(popData[measure][j]<=val){
			below++
		}
	}
	return	Math.round(below/popData.BMI.length*100)
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
			var p=percentile2Val(measures[0],$('#Range1-min').val() );
			$('#pc1-min-in').val(p);
		});
		$('#Range1-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[0],$('#Range1-max').val() );
			$('#pc1-max-in').val(p);		
		});
		$('#Range2-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[1],$('#Range2-min').val() );
			$('#pc2-min-in').val(p);
		});
		$('#Range2-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[1],$('#Range2-max').val() );
			$('#pc2-max-in').val(p);				
		});		
		$('#Range3-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[2],$('#Range3-min').val() );
			$('#pc3-min-in').val(p);
		});
		$('#Range3-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[2],$('#Range3-max').val() );
			$('#pc3-max-in').val(p);			
		});
		$('#Range4-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[3],$('#Range4-min').val() );
			$('#pc4-min-in').val(p);				
		});
		$('#Range4-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[3],$('#Range4-max').val() );
			$('#pc4-max-in').val(p);				

		});	
		$('#Range5-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[4],$('#Range5-min').val() );
			$('#pc5-min-in').val(p);		
		});
		$('#Range5-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[4],$('#Range5-max').val() );
			$('#pc5-max-in').val(p);				
		});
		$('#Range6-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[5],$('#Range6-min').val() );
			$('#pc6-min-in').val(p);				
		});
		$('#Range6-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[5],$('#Range6-max').val() );
			$('#pc6-max-in').val(p);				
		});		
		$('#Range7-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[6],$('#Range7-min').val() );
			$('#pc7-min-in').val(p);				
		});
		$('#Range7-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[6],$('#Range7-max').val() );
			$('#pc7-max-in').val(p);				
		});
		$('#Range8-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[7],$('#Range8-min').val() );
			$('#pc8-min-in').val(p);				
		});
		$('#Range8-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[7],$('#Range8-max').val() );
			$('#pc8-max-in').val(p);				
		});
		$('#Range9-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[8],$('#Range9-min').val() );
			$('#pc9-min-in').val(p);				
		});
		$('#Range9-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[8],$('#Range9-max').val() );
			$('#pc9-max-in').val(p);				
		});
		$('#Range10-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[9],$('#Range10-min').val() );
			$('#pc10-min-in').val(p);				
		});
		$('#Range10-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[9],$('#Range10-max').val() );
			$('#pc10-max-in').val(p);			
		});		
		$('#Range11-min').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[10],$('#Range11-min').val() );
			$('#pc11-min-in').val(p);				
		});
		$('#Range11-max').on('slidestop',function(event){
			if (totalManikins<=5 && totalManikins > 0){
				imgChange = 1;
				updateImages();
				}
			var p=percentile2Val(measures[10],$('#Range11-max').val() );
			$('#pc11-max-in').val(p);				
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
		gender='male';
	}else{
		popData=rawData_F;
		gender='female';
	}
	initSliders(measures,totalDims);
	limitManikins(measures,totalDims);
	updateImages();
});

//download anthro.txt 1 
$(document).on('click','#d1anthro',function(event){
	var txt='\n \
	Stature: \t'+popData.STATURE[manikinID[0]]+' '+unitstr+'\n \
	BMI: \t'+Math.round(popData.BMI[manikinID[0]])+' kg/m^2 \n \
	Sitting Height: \t'+Math.round(popData.SITTING_HT[manikinID[0]])+' '+unitstr+'\n \
	Biacromial Breadth: \t'+Math.round(popData.BIACROMIAL_BRTH[manikinID[0]])+' '+unitstr+'\n \
	Knee Height-Sitting: \t'+Math.round(popData.KNEE_HT_SITTING[manikinID[0]])+' '+unitstr+'\n \
	Forearm-Hand Length: \t'+Math.round(popData.FOREARM_HAND_LGTH[manikinID[0]])+' '+unitstr+'\n \
	Sitting Hip Breadth: \t'+Math.round(popData.HIP_BRDTH_SITTING[manikinID[0]])+' '+unitstr+'\n \
	Head Circumference: \t'+Math.round(popData.HEAD_CIRC[manikinID[0]])+' '+unitstr+'\n \
	Chest Circumference: \t'+Math.round(popData.CHEST_CIRC[manikinID[0]])+' '+unitstr+'\n \
	Waist Circumference: \t'+Math.round(popData.WAIST_CIRC_OMPHALION[manikinID[0]])+' '+unitstr+'\n \
	Hip Circumference (at buttocks): \t'+Math.round(popData.BUTTOCK_CIRC[manikinID[0]])+' '+unitstr+'\n \n\
	Front image filename: img_'+gender[0]+'_f_'+popData.STATURE[manikinID[0]]+'_'+Math.floor(popData.BMI[manikinID[0]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[0]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[0]])+'.png \n \
	Side image filename: img_'+gender[0]+'_s_'+popData.STATURE[manikinID[0]]+'_'+Math.floor(popData.BMI[manikinID[0]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[0]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[0]])+'.png\n \n\
	.JT filename: '+gender[0]+'_'+popData.STATURE[manikinID[0]]+'_'+Math.floor(popData.BMI[manikinID[0]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[0]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[0]])+'.jt \n \
	Jack figure filename: '+gender[0]+'_jack_'+popData.STATURE[manikinID[0]]+'_'+Math.floor(popData.BMI[manikinID[0]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[0]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[0]])+'.fig'
		 
	var blob=new Blob([txt], {type: "text/plain;charset=utf-8"});
	saveAs(blob,"anthro.txt")
});
//download anthro.txt 2
$(document).on('click','#d2anthro',function(event){
	var txt='\n \
	Stature: \t'+popData.STATURE[manikinID[1]]+' '+unitstr+'\n \
	BMI: \t'+Math.round(popData.BMI[manikinID[1]])+' kg/m^2 \n \
	Sitting Height: \t'+Math.round(popData.SITTING_HT[manikinID[1]])+' '+unitstr+'\n \
	Biacromial Breadth: \t'+Math.round(popData.BIACROMIAL_BRTH[manikinID[1]])+' '+unitstr+'\n \
	Knee Height-Sitting: \t'+Math.round(popData.KNEE_HT_SITTING[manikinID[1]])+' '+unitstr+'\n \
	Forearm-Hand Length: \t'+Math.round(popData.FOREARM_HAND_LGTH[manikinID[1]])+' '+unitstr+'\n \
	Sitting Hip Breadth: \t'+Math.round(popData.HIP_BRDTH_SITTING[manikinID[1]])+' '+unitstr+'\n \
	Head Circumference: \t'+Math.round(popData.HEAD_CIRC[manikinID[1]])+' '+unitstr+'\n \
	Chest Circumference: \t'+Math.round(popData.CHEST_CIRC[manikinID[1]])+' '+unitstr+'\n \
	Waist Circumference: \t'+Math.round(popData.WAIST_CIRC_OMPHALION[manikinID[1]])+' '+unitstr+'\n \
	Hip Circumference (at buttocks): \t'+Math.round(popData.BUTTOCK_CIRC[manikinID[1]])+' '+unitstr+'\n \n\
	Front image filename: img_'+gender[0]+'_f_'+popData.STATURE[manikinID[1]]+'_'+Math.floor(popData.BMI[manikinID[1]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[1]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[1]])+'.png \n \
	Side image filename: img_'+gender[0]+'_s_'+popData.STATURE[manikinID[1]]+'_'+Math.floor(popData.BMI[manikinID[1]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[1]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[1]])+'.png\n \n\
	.JT filename: '+gender[0]+'_'+popData.STATURE[manikinID[1]]+'_'+Math.floor(popData.BMI[manikinID[1]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[1]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[1]])+'.jt \n \
	Jack figure filename: '+gender[0]+'_jack_'+popData.STATURE[manikinID[1]]+'_'+Math.floor(popData.BMI[manikinID[1]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[1]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[1]])+'.fig'
		 
	var blob=new Blob([txt], {type: "text/plain;charset=utf-8"});
	saveAs(blob,"anthro.txt")
});
//download anthro.txt 3
$(document).on('click','#d3anthro',function(event){
	var txt='\n \
	Stature: \t'+popData.STATURE[manikinID[2]]+' '+unitstr+'\n \
	BMI: \t'+Math.round(popData.BMI[manikinID[2]])+' kg/m^2 \n \
	Sitting Height: \t'+Math.round(popData.SITTING_HT[manikinID[2]])+' '+unitstr+'\n \
	Biacromial Breadth: \t'+Math.round(popData.BIACROMIAL_BRTH[manikinID[2]])+' '+unitstr+'\n \
	Knee Height-Sitting: \t'+Math.round(popData.KNEE_HT_SITTING[manikinID[2]])+' '+unitstr+'\n \
	Forearm-Hand Length: \t'+Math.round(popData.FOREARM_HAND_LGTH[manikinID[2]])+' '+unitstr+'\n \
	Sitting Hip Breadth: \t'+Math.round(popData.HIP_BRDTH_SITTING[manikinID[2]])+' '+unitstr+'\n \
	Head Circumference: \t'+Math.round(popData.HEAD_CIRC[manikinID[2]])+' '+unitstr+'\n \
	Chest Circumference: \t'+Math.round(popData.CHEST_CIRC[manikinID[2]])+' '+unitstr+'\n \
	Waist Circumference: \t'+Math.round(popData.WAIST_CIRC_OMPHALION[manikinID[2]])+' '+unitstr+'\n \
	Hip Circumference (at buttocks): \t'+Math.round(popData.BUTTOCK_CIRC[manikinID[2]])+' '+unitstr+'\n \n\
	Front image filename: img_'+gender[0]+'_f_'+popData.STATURE[manikinID[2]]+'_'+Math.floor(popData.BMI[manikinID[2]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[2]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[2]])+'.png \n \
	Side image filename: img_'+gender[0]+'_s_'+popData.STATURE[manikinID[2]]+'_'+Math.floor(popData.BMI[manikinID[2]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[2]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[2]])+'.png\n \n\
	.JT filename: '+gender[0]+'_'+popData.STATURE[manikinID[2]]+'_'+Math.floor(popData.BMI[manikinID[2]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[2]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[2]])+'.jt \n \
	Jack figure filename: '+gender[0]+'_jack_'+popData.STATURE[manikinID[2]]+'_'+Math.floor(popData.BMI[manikinID[2]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[2]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[2]])+'.fig'
		 
	var blob=new Blob([txt], {type: "text/plain;charset=utf-8"});
	saveAs(blob,"anthro.txt")
});
//download anthro.txt 4
$(document).on('click','#d4anthro',function(event){
	var txt='\n \
	Stature: \t'+popData.STATURE[manikinID[3]]+' '+unitstr+'\n \
	BMI: \t'+Math.round(popData.BMI[manikinID[3]])+' kg/m^2 \n \
	Sitting Height: \t'+Math.round(popData.SITTING_HT[manikinID[3]])+' '+unitstr+'\n \
	Biacromial Breadth: \t'+Math.round(popData.BIACROMIAL_BRTH[manikinID[3]])+' '+unitstr+'\n \
	Knee Height-Sitting: \t'+Math.round(popData.KNEE_HT_SITTING[manikinID[3]])+' '+unitstr+'\n \
	Forearm-Hand Length: \t'+Math.round(popData.FOREARM_HAND_LGTH[manikinID[3]])+' '+unitstr+'\n \
	Sitting Hip Breadth: \t'+Math.round(popData.HIP_BRDTH_SITTING[manikinID[3]])+' '+unitstr+'\n \
	Head Circumference: \t'+Math.round(popData.HEAD_CIRC[manikinID[3]])+' '+unitstr+'\n \
	Chest Circumference: \t'+Math.round(popData.CHEST_CIRC[manikinID[3]])+' '+unitstr+'\n \
	Waist Circumference: \t'+Math.round(popData.WAIST_CIRC_OMPHALION[manikinID[3]])+' '+unitstr+'\n \
	Hip Circumference (at buttocks): \t'+Math.round(popData.BUTTOCK_CIRC[manikinID[3]])+' '+unitstr+'\n \n\
	Front image filename: img_'+gender[0]+'_f_'+popData.STATURE[manikinID[3]]+'_'+Math.floor(popData.BMI[manikinID[3]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[3]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[3]])+'.png \n \
	Side image filename: img_'+gender[0]+'_s_'+popData.STATURE[manikinID[3]]+'_'+Math.floor(popData.BMI[manikinID[3]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[3]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[3]])+'.png\n \n\
	.JT filename: '+gender[0]+'_'+popData.STATURE[manikinID[3]]+'_'+Math.floor(popData.BMI[manikinID[3]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[3]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[3]])+'.jt \n \
	Jack figure filename: '+gender[0]+'_jack_'+popData.STATURE[manikinID[3]]+'_'+Math.floor(popData.BMI[manikinID[3]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[3]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[3]])+'.fig'
		 
	var blob=new Blob([txt], {type: "text/plain;charset=utf-8"});
	saveAs(blob,"anthro.txt")
});
//download anthro.txt 5
$(document).on('click','#d5anthro',function(event){
	var txt='\n \
	Stature: \t'+popData.STATURE[manikinID[4]]+' '+unitstr+'\n \
	BMI: \t'+Math.round(popData.BMI[manikinID[4]])+' kg/m^2 \n \
	Sitting Height: \t'+Math.round(popData.SITTING_HT[manikinID[4]])+' '+unitstr+'\n \
	Biacromial Breadth: \t'+Math.round(popData.BIACROMIAL_BRTH[manikinID[4]])+' '+unitstr+'\n \
	Knee Height-Sitting: \t'+Math.round(popData.KNEE_HT_SITTING[manikinID[4]])+' '+unitstr+'\n \
	Forearm-Hand Length: \t'+Math.round(popData.FOREARM_HAND_LGTH[manikinID[4]])+' '+unitstr+'\n \
	Sitting Hip Breadth: \t'+Math.round(popData.HIP_BRDTH_SITTING[manikinID[4]])+' '+unitstr+'\n \
	Head Circumference: \t'+Math.round(popData.HEAD_CIRC[manikinID[4]])+' '+unitstr+'\n \
	Chest Circumference: \t'+Math.round(popData.CHEST_CIRC[manikinID[4]])+' '+unitstr+'\n \
	Waist Circumference: \t'+Math.round(popData.WAIST_CIRC_OMPHALION[manikinID[4]])+' '+unitstr+'\n \
	Hip Circumference (at buttocks): \t'+Math.round(popData.BUTTOCK_CIRC[manikinID[4]])+' '+unitstr+'\n \n\
	Front image filename: img_'+gender[0]+'_f_'+popData.STATURE[manikinID[4]]+'_'+Math.floor(popData.BMI[manikinID[4]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[4]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[4]])+'.png \n \
	Side image filename: img_'+gender[0]+'_s_'+popData.STATURE[manikinID[4]]+'_'+Math.floor(popData.BMI[manikinID[4]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[4]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[4]])+'.png\n \n\
	.JT filename: '+gender[0]+'_'+popData.STATURE[manikinID[4]]+'_'+Math.floor(popData.BMI[manikinID[4]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[4]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[4]])+'.jt \n \
	Jack figure filename: '+gender[0]+'_jack_'+popData.STATURE[manikinID[4]]+'_'+Math.floor(popData.BMI[manikinID[4]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[4]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[4]])+'.fig'		 
	var blob=new Blob([txt], {type: "text/plain;charset=utf-8"});
	saveAs(blob,"anthro.txt")
});

var idown;
downloadURL=function(url) {
  if ($idown) {
    $idown.attr('src',url);
  } else {
    $idown = $('<iframe>', { id:'idown', src:url }).hide().appendTo('body');
  }
}

//download all
$(document).on('click','#downloadAllDialog',function(event){
	var imgfiles_html=[];
	for(j=0;j<manikinID.length;j++){
		imgfiles_html.push('\
		<a class="allimgs" href=/Users/student/Documents/Web/manikinfetcher stuff//'+gender+'/img_'+gender[0]+'_f_'+popData.STATURE[manikinID[j]]+'_'+Math.floor(popData.BMI[manikinID[j]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[j]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+'.png"></a>\
		<a class="allimgs" href=/Users/student/Documents/Web/manikinfetcher stuff//'+gender+'/img_'+gender[0]+'_f_'+popData.STATURE[manikinID[j]]+'_'+Math.floor(popData.BMI[manikinID[j]])+'_'+Math.floor(popData.KNEE_HT_SITTING[manikinID[j]])+'_'+Math.floor(popData.WAIST_CIRC_OMPHALION[manikinID[j]])+'.png"></a>'	
		);
	}
		$('#files').html('');
		$('#files').append(imgfiles_html.join(''));
});
$(document).on('click','#allImages',function(event){
	event.preventDefault();
	$('.allimgs').multidownload();
});

//percentiles 1
$(document).on('change', '#pc1-checkbox',function(event){
	if($('#pc1-checkbox').prop('checked')){
	$('#pc1-min').html('<label for="pc1-min-in" style="margin-top:-5px"></label><input type="number" name="pc1-min-in" id="pc1-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc1-max').html('<label for="pc1-max-in" style="margin-top:-5px"></label><input type="number" name="pc1-max-in" id="pc1-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc1-min').html('');
		$('#pc1-max').html('');	
	}
});
$(document).on('change', '#pc1-min-in', function(event){
	var slideval=$('#pc1-min-in').val()
	var perctval=percentile(measures[0], Number(slideval));
	$('#Range1-min').val(perctval);
	$('#Range1-min').slider('refresh');
});
$(document).on('change', '#pc1-max-in', function(event){
	var slideval=$('#pc1-max-in').val()
	var perctval=percentile(measures[0], Number(slideval));
	$('#Range1-max').val(perctval);
	$('#Range1-max').slider('refresh');
});

//percentiles 2
$(document).on('change', '#pc2-checkbox',function(event){
	if($('#pc2-checkbox').prop('checked')){
	$('#pc2-min').html('<label for="pc2-min-in" style="margin-top:-5px"></label><input type="number" name="pc2-min-in" id="pc2-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc2-max').html('<label for="pc2-max-in" style="margin-top:-5px"></label><input type="number" name="pc2-max-in" id="pc2-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc2-min').html('');
		$('#pc2-max').html('');	
	}
});
$(document).on('change', '#pc2-min-in', function(event){
	var slideval=$('#pc2-min-in').val()
	var perctval=percentile(measures[1], Number(slideval));
	$('#Range2-min').val(perctval);
	$('#Range2-min').slider('refresh');
});
$(document).on('change', '#pc2-max-in', function(event){
	var slideval=$('#pc2-max-in').val()
	var perctval=percentile(measures[1], Number(slideval));
	$('#Range2-max').val(perctval);
	$('#Range2-max').slider('refresh');
});

//percentiles 3
$(document).on('change', '#pc3-checkbox',function(event){
	if($('#pc3-checkbox').prop('checked')){
	$('#pc3-min').html('<label for="pc3-min-in" style="margin-top:-5px"></label><input type="number" name="pc3-min-in" id="pc3-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc3-max').html('<label for="pc3-max-in" style="margin-top:-5px"></label><input type="number" name="pc3-max-in" id="pc3-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc3-min').html('');
		$('#pc3-max').html('');	
	}
});
$(document).on('change', '#pc3-min-in', function(event){
	var slideval=$('#pc3-min-in').val()
	var perctval=percentile(measures[2], Number(slideval));
	$('#Range3-min').val(perctval);
	$('#Range3-min').slider('refresh');
});
$(document).on('change', '#pc3-max-in', function(event){
	var slideval=$('#pc3-max-in').val()
	var perctval=percentile(measures[2], Number(slideval));
	$('#Range3-max').val(perctval);
	$('#Range3-max').slider('refresh');
});

//percentiles 4
$(document).on('change', '#pc4-checkbox',function(event){
	if($('#pc4-checkbox').prop('checked')){
	$('#pc4-min').html('<label for="pc4-min-in" style="margin-top:-5px"></label><input type="number" name="pc4-min-in" id="pc4-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc4-max').html('<label for="pc4-max-in" style="margin-top:-5px"></label><input type="number" name="pc4-max-in" id="pc4-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc4-min').html('');
		$('#pc4-max').html('');	
	}
});
$(document).on('change', '#pc4-min-in', function(event){
	var slideval=$('#pc4-min-in').val()
	var perctval=percentile(measures[3], Number(slideval));
	$('#Range4-min').val(perctval);
	$('#Range4-min').slider('refresh');
});
$(document).on('change', '#pc4-max-in', function(event){
	var slideval=$('#pc4-max-in').val()
	var perctval=percentile(measures[3], Number(slideval));
	$('#Range4-max').val(perctval);
	$('#Range4-max').slider('refresh');
});

//percentiles 5
$(document).on('change', '#pc5-checkbox',function(event){
	if($('#pc5-checkbox').prop('checked')){
	$('#pc5-min').html('<label for="pc5-min-in" style="margin-top:-5px"></label><input type="number" name="pc5-min-in" id="pc5-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc5-max').html('<label for="pc5-max-in" style="margin-top:-5px"></label><input type="number" name="pc5-max-in" id="pc5-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc5-min').html('');
		$('#pc5-max').html('');	
	}
});
$(document).on('change', '#pc5-min-in', function(event){
	var slideval=$('#pc5-min-in').val()
	var perctval=percentile(measures[4], Number(slideval));
	$('#Range5-min').val(perctval);
	$('#Range5-min').slider('refresh');
});
$(document).on('change', '#pc5-max-in', function(event){
	var slideval=$('#pc5-max-in').val()
	var perctval=percentile(measures[4], Number(slideval));
	$('#Range5-max').val(perctval);
	$('#Range5-max').slider('refresh');
});

//percentiles 6
$(document).on('change', '#pc6-checkbox',function(event){
	if($('#pc6-checkbox').prop('checked')){
	$('#pc6-min').html('<label for="pc6-min-in" style="margin-top:-5px"></label><input type="number" name="pc6-min-in" id="pc6-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc6-max').html('<label for="pc6-max-in" style="margin-top:-5px"></label><input type="number" name="pc6-max-in" id="pc6-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc6-min').html('');
		$('#pc6-max').html('');	
	}
});
$(document).on('change', '#pc6-min-in', function(event){
	var slideval=$('#pc6-min-in').val()
	var perctval=percentile(measures[5], Number(slideval));
	$('#Range6-min').val(perctval);
	$('#Range6-min').slider('refresh');
});
$(document).on('change', '#pc6-max-in', function(event){
	var slideval=$('#pc6-max-in').val()
	var perctval=percentile(measures[5], Number(slideval));
	$('#Range6-max').val(perctval);
	$('#Range6-max').slider('refresh');
});

//percentiles 7
$(document).on('change', '#pc7-checkbox',function(event){
	if($('#pc7-checkbox').prop('checked')){
	$('#pc7-min').html('<label for="pc7-min-in" style="margin-top:-5px"></label><input type="number" name="pc7-min-in" id="pc7-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc7-max').html('<label for="pc7-max-in" style="margin-top:-5px"></label><input type="number" name="pc7-max-in" id="pc7-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc7-min').html('');
		$('#pc7-max').html('');	
	}
});
$(document).on('change', '#pc7-min-in', function(event){
	var slideval=$('#pc7-min-in').val()
	var perctval=percentile(measures[6], Number(slideval));
	$('#Range7-min').val(perctval);
	$('#Range7-min').slider('refresh');
});
$(document).on('change', '#pc7-max-in', function(event){
	var slideval=$('#pc7-max-in').val()
	var perctval=percentile(measures[6], Number(slideval));
	$('#Range7-max').val(perctval);
	$('#Range7-max').slider('refresh');
});

//percentiles 8
$(document).on('change', '#pc8-checkbox',function(event){
	if($('#pc8-checkbox').prop('checked')){
	$('#pc8-min').html('<label for="pc8-min-in" style="margin-top:-5px"></label><input type="number" name="pc8-min-in" id="pc8-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc8-max').html('<label for="pc8-max-in" style="margin-top:-5px"></label><input type="number" name="pc8-max-in" id="pc8-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc8-min').html('');
		$('#pc8-max').html('');	
	}
});
$(document).on('change', '#pc8-min-in', function(event){
	var slideval=$('#pc8-min-in').val()
	var perctval=percentile(measures[7], Number(slideval));
	$('#Range8-min').val(perctval);
	$('#Range8-min').slider('refresh');
});
$(document).on('change', '#pc8-max-in', function(event){
	var slideval=$('#pc8-max-in').val()
	var perctval=percentile(measures[7], Number(slideval));
	$('#Range8-max').val(perctval);
	$('#Range8-max').slider('refresh');
});

//percentiles 9
$(document).on('change', '#pc9-checkbox',function(event){
	if($('#pc9-checkbox').prop('checked')){
	$('#pc9-min').html('<label for="pc9-min-in" style="margin-top:-5px"></label><input type="number" name="pc9-min-in" id="pc9-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc9-max').html('<label for="pc9-max-in" style="margin-top:-5px"></label><input type="number" name="pc9-max-in" id="pc9-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc9-min').html('');
		$('#pc9-max').html('');	
	}
});
$(document).on('change', '#pc9-min-in', function(event){
	var slideval=$('#pc9-min-in').val()
	var perctval=percentile(measures[8], Number(slideval));
	$('#Range9-min').val(perctval);
	$('#Range9-min').slider('refresh');
});
$(document).on('change', '#pc9-max-in', function(event){
	var slideval=$('#pc9-max-in').val()
	var perctval=percentile(measures[8], Number(slideval));
	$('#Range9-max').val(perctval);
	$('#Range9-max').slider('refresh');
});

//percentiles 10
$(document).on('change', '#pc10-checkbox',function(event){
	if($('#pc10-checkbox').prop('checked')){
	$('#pc10-min').html('<label for="pc10-min-in" style="margin-top:-5px"></label><input type="number" name="pc10-min-in" id="pc10-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc10-max').html('<label for="pc10-max-in" style="margin-top:-5px"></label><input type="number" name="pc10-max-in" id="pc10-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc10-min').html('');
		$('#pc10-max').html('');	
	}
});
$(document).on('change', '#pc10-min-in', function(event){
	var slideval=$('#pc10-min-in').val()
	var perctval=percentile(measures[9], Number(slideval));
	$('#Range10-min').val(perctval);
	$('#Range10-min').slider('refresh');
});
$(document).on('change', '#pc10-max-in', function(event){
	var slideval=$('#pc10-max-in').val()
	var perctval=percentile(measures[9], Number(slideval));
	$('#Range10-max').val(perctval);
	$('#Range10-max').slider('refresh');
});

//percentiles 11
$(document).on('change', '#pc11-checkbox',function(event){
	if($('#pc11-checkbox').prop('checked')){
	$('#pc11-min').html('<label for="pc11-min-in" style="margin-top:-5px"></label><input type="number" name="pc11-min-in" id="pc11-min-in" min="0" max="100" value="0" data-mini="true">');
	$('#pc11-max').html('<label for="pc11-max-in" style="margin-top:-5px"></label><input type="number" name="pc11-max-in" id="pc11-max-in" min="0" max="100" value="100"  data-mini="true">');
	} else{
		$('#pc11-min').html('');
		$('#pc11-max').html('');	
	}
});
$(document).on('change', '#pc11-min-in', function(event){
	var slideval=$('#pc11-min-in').val()
	var perctval=percentile(measures[10], Number(slideval));
	$('#Range11-min').val(perctval);
	$('#Range11-min').slider('refresh');
});
$(document).on('change', '#pc11-max-in', function(event){
	var slideval=$('#pc11-max-in').val()
	var perctval=percentile(measures[10], Number(slideval));
	$('#Range11-max').val(perctval);
	$('#Range11-max').slider('refresh');
});
