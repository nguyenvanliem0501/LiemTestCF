let arr1 = prompt("Nhập giá trị của mảng thứ nhất:");
let arr2 = prompt("Nhập giá trị của mảng thứ hai:");

arr1 = arr1.split(',');
arr2 = arr2.split(',');

newarr1 = arr1.filter((arr1) => {
    let check = false
    arr2.forEach((x) => {
        if(arr1 == x){
            check = true;
        }
    })
    if(!check){
        return arr1;
    }
})

newarr2 = arr2.filter((arr2) => {
    let check = false
    arr1.forEach((x) => {
        if(arr2 == x){
            check = true;
        }
    })
    if(!check){
        return arr2;
    }
})

console.log(...newarr1,...newarr2);