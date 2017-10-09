var arr = [1,5,1,2,4,3,1,2];
function fn(arr){
    var newarr = [];
    for(var i=0;i<arr.length;i++){
        if(newarr.indexOf(arr[i])===-1){
            newarr.push(arr[i])
        }
    }
    return newarr;
}
console.log(fn(arr));