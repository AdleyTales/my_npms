
const PI = 3.1415926;

let a = 'nihao2323';

let fn = (a=100,b=12) => {
  return a + b;
}

for(let i=0;i<10;i++){
  setTimeout(()=>{
    console.log(i);
  },3000);
}

let str = `${a} is running ...`;

var [z,x,c,v] = [100,'aaa',true,500];
console.log(z);

var {d,f,g} = {d:'hfdsk',f:2390,g:'jjjjjj'};

var obj = {
  a:1000,
  fn(){
    console.log(3);
  }
}

let [... arr] = [1,2,3,4,5,6];
console.log(arr);
// 
// function *fn(){
//   console.log(1);
//   console.log(1);
//   console.log(1);
// }

for(let n of arr) {
  console.log(n);
}
