function inputFieldGet(id){
    let inputField = document.getElementById(id);
    let inputFieldValueString = inputField.value;
    let inputFieldValue = parseFloat(inputFieldValueString);
    if(isNaN(inputFieldValue)){
        alert("Enter a valid number inreplace of:  "+'"'+inputFieldValueString+'"' + '\nThis is not a number.');
        inputField.value = '';
        return;
    }
    return inputFieldValue;
}
function setValueToArea(areaID,areaValue){
    let areaValueID = document.getElementById(areaID);
    if(!isNaN(areaValue)){
        areaValueID.innerText = areaValue; 
    } 
    else{
        areaValueID.innerHTML  = '0';
        return;
    }  
}
function setToCalculationList(areaName,area){
    if(!isNaN(area)){
        let calculationID = document.getElementById('cal-list');
    let p = document.createElement('p');
    p.classList.add('px-3','font-bold');
    let count = calculationID.childElementCount;
    p.innerHTML = (count+1) +'. ' + areaName + " Area: " + area +'cm<sup>2</sup>';
    calculationID.appendChild(p);
    }
    return;
}