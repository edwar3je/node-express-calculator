function constructInitialArray(string){
    let initStr = string;
    let noCommas1 = initStr.replaceAll(",", " ")
    let noCommas2 = noCommas1.split(/[ \r\n]+/);
    let initArr = noCommas2.filter(c => c !== "");
    return initArr;
}

function validateData(arr){
    for (let a of arr){
        if (isNaN(a)){
            return a
        }
    }
    return true
}

function constructFinalArray(arr){
    const finalArr = [];
    for (let a of arr){
        finalArr.push(Number(a))
    }
    return finalArr
}

module.exports = {constructInitialArray: constructInitialArray, validateData: validateData, constructFinalArray: constructFinalArray}