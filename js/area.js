function triangleArea(){
    let bFileld = inputFieldGet('input-base');
    let hField = inputFieldGet('input-height');
    let areaCal = 0.5 * bFileld * hField;
    let area =areaCal.toFixed(3);
    setValueToArea('triangle-area-value',area);
    setToCalculationList('Triangle',area);
}
function rectangleArea(){
    let wField = inputFieldGet('input-width');
    let lfield = inputFieldGet('input-length');
    let areaCal = wField * lfield;
    let area =areaCal.toFixed(3);
    setValueToArea('rectangle-area-value',area);
    setToCalculationList('Rectangle',area);
}
function parallelogramArea(){
    let bFileld = inputFieldGet('input-base-parallelogram');
    let hField = inputFieldGet('input-height-parallelogram');
    let areaCal = bFileld * hField;
    let area =areaCal.toFixed(3);
    setValueToArea('parallelogram-area-value',area);
    setToCalculationList('Parallelogram',area);
}
function rhombusArea(){
    let diagonalFieldOne = inputFieldGet('diagonal-one');
    let diagonalFielTwo = inputFieldGet('diagonal-two');
    let areaCal = 0.5 * diagonalFieldOne * diagonalFielTwo;
    let area =areaCal.toFixed(3);
    setValueToArea('rhombus-area-value',area);
    setToCalculationList('Rhombus',area);
}
function pentagonArea(){
    let pFileld = inputFieldGet('input-p');
    let bField = inputFieldGet('input-b');
    let areaCal = 0.5 * pFileld * bField;
    let area =areaCal.toFixed(3);
    setValueToArea('pentagon-area-value',area);
    setToCalculationList('Pentagon',area);
}
function ellipseArea(){
    let aFileld = inputFieldGet('el-input-a');
    let bField = inputFieldGet('el-input-b');
    let areaCal = Math.PI * aFileld * bField;
    let area =areaCal.toFixed(3);
    setValueToArea('ellipse-area-value',area);
    setToCalculationList('Ellipse',area);
}