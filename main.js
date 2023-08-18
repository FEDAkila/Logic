
// 1............fint the largest number


let a=12;
let b=8;
let c=-1;
if(a&&b&&c){
if((a>b) && (a>c)){
    console.log("a is largest");
}
if((b>c) && (b>a)){
    console.log("b is largest");
}
 if((c>a) && (c>b)){
    console.log("c is largest");
}
}

// 2...............ascending order

		// method...1
a=[2,8,5,7]
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            var temp;
            temp=a[i];
            a[i]=a[j];
            a[j]=temp
        }
        
    }
}
console.log(a)

			// method....2 using arraymethod

a=[2,8,5,7]
let b=a.sort((x,y)=>{
    return x-y
})



	