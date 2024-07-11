// for loop
// const arr = [1,2,3,4,5,6,7]
// for (let i = 0; i < arr.length; i++) {
//     const ele = arr[i]*i;
//     console.log(ele);
//     if(ele>10){
//         console.log("yeh ad nhi krna")
//     }
   
    
// 

//}

for(let i=0;i<18;i++){
    if(i<12){
        continue;
    }
    if(i==14){
        console.log(`14 pakda gaya bhau`)
        break;
    }
    console.log(i);
}