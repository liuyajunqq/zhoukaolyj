var arrL = [9,8,9,7,9,6,9,5];
function setTo(arrL){
    var newArrL = [];
    for(var i=arrL.length-1;i>=0;i--){
        if(newArrL.indexOf(arrL[i])===-1){
            newArrL.unshift(arrL[i])
        }
    }
    return newArrL
}
console.log(setTo(arrL));