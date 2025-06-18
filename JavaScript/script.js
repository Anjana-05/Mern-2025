var square = (n) =>{
    console.log(n*n);
}

square(5);


//spread operator
var arr=[10,20,30];
var arr1=[...arr,40,50];
var arr2=[arr,40,50];
console.log(arr);
console.log(arr1);
console.log(arr2);


//Destructing Operator
var marks=[95,95,93,89,92,92];
var [m1,m2,m3,m4,m5,m6,m7] = marks;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);
console.log(m6);

//CallBack function

function demo(){
    console.log("This is a demo function");
}

var callBack=(func)=>{
    console.log("This is a call back function");
    func();
}

callBack(demo);

//map function
var arr = [1,2,3,4,5];
var double = arr.map(num => num**2);
console.log(double);


//filter
var odd = arr.filter(num => num%2!=0);
console.log(odd);

var odd = double.filter(num => num%2!=0);
console.log(odd);

//reduce
var total = arr.reduce((val,num)=> num+val,0);
console.log(total);

var res = arr.map(num => num*2).filter(num => num>5).reduce((val,num)=>val+num,0);
console.log(res);


