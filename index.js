// console.log('jay mata di');
// const rectangle={
//     length:1,
//     breath:2,

//     draw:function(){
//         console.log('draw');
//     }
// };

// function createRectangle() {
//     return rectangle={
//     length:1,
//     breath:2,

//     draw:function(){
//         console.log('draw');
//     }
// };
// //return rectangle;

// }

//factory function


// function createRectangle(length,breadth) {
//     return rectangle={
//     length,
//     breadth,

//     draw:function(){
//         console.log('draw');
//     }
// };
// //return rectangle;

// }
// let a=createRectangle(8,6);

// constructor

// function creat(){
//     this.length=1;
//     this.breadth=2;

// }

// let createObject=new creat();


// function Creat(len,bre){
//     this.lenght=len;
//     this.breath=bre;

// }

// let createObject=new Creat(3,4);
// // createObject.color='yellow';
// // delete createObject.color;


// let rectangle=new Function('height','width',`
// this.height=height;
// this.width=width;`);

// let obj=new rectangle(5,6);

// console.log(obj);

// function Creat(){
//          this.length=4;
//          this.breadth=2;
    
//     }
//     console.log(Creat.length);

// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// let a={value:10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value
//     );

// let a=10;
 
// function inc(a)
// {
//     a++;
// }
// inc(a);
// console.log(a);

// let a={value:10};
// function inc(a)
// {
//     a.value++;
// }
// inc(a);
// console.log(a.value);

// let a={length:1,breadth:2};

//for in
// for (let key in a){
//     console.log(key,a[key]);
// }

// for of
// for (let key of Object.entries(a)) {
//     console.log(key);
// }


let rectangle={length:1,breadth:2};

// if('color' in rectangle)
// {
//     console.log('present');
// }
// else{
//     console.log('absent');
// }
// let clone={};
// for(let key in rectangle)
// {
//     clone[key]=rectangle[key];
// }
// for(let key in clone)
// {
//     console.log(clone[key]);
// }

// let dest=Object.assign({},clone);
// for(let key in dest)
// {
//     console.log(dest[key]);
// }

let dest={...rectangle};
for(let key in dest)
 {
    console.log(dest[key]);
 }
