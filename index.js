// const thanos = {
//     name: "THANOS",
//     snap: function () {
//         return `${this.name} snapped the finger and half of the universe ${this.name == "THANOS" ? "disappeared" : "came back"}`;
//     }
// }

// const ironman = {
//     name: "IRON MAN"
// }

// let bindedFunction=thanos.snap.bind(ironman);
// console.log(bindedFunction());

// cap.sayhi();
// let sayhiadd=cap.sayhi;
// sayhiadd();

// function main() {
//     //write your code here
//     let obj = {
//         name: "bucky",
//         team: "Team Cap",
//         };
//         let func = function () {
//         return "Hello avengers this is " + this.name + " from " + this.team + " lets fight !";
//         };
//         let resultString=func.call(obj);
//         return resultString;
    
// }
// console.log(main());
// Array.prototype.last=
//     function () {
//     if (this.length == 0) {
//         return -1;
//     } else {
//         return this[this.length - 1];
//     }
// }


// let myarr=[1,2,3,4,5,5];
// console.log(myarr.last());

//let a="This only works if and only if";
// let b=a.slice(a.indexOf("only"));
// let c=b.lastIndexOf("only");
// b[c]="i";
// console.log(a);
// console.log(b);

// function ConvertToBinary(dec) {
//     //write your code here
//     //let val=new Array();
//     let val="";
//     while(dec>0){
//         let rem=dec%2;
//         //val=(val*10)+rem;
//         //val.push(rem);
//         val+=JSON.stringify(rem);
//         dec=Math.floor(dec/2);
//     }
//     //return JSON.stringify(val.reverse());
//     return val.split("").reverse().join("");
// }



//console.log(ConvertToBinary(40));

// function aclean(arr){
//     let chararr=new Array();
//     let res=new Array();
//     for(let i=0;i<arr.length;i++){
//         //arr[i]=arr[i].toLowerCase();
//         //arr[i]=arr[i].split("").sort().join("");
//         chararr.push(arr[i]);
//         chararr[i]=chararr[i].toLowerCase();
//         chararr[i]=chararr[i].split("").sort().join("");
//     }
//     for(let i=0;i<chararr.length;i++){
//         for(let j=i+1;j<chararr.length;j++){
//             if(chararr[i]==chararr[j]){
//                 arr[j]=0;
//             }
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!=0){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]);

// let obj1={
//     name:"Dhinesh",
//     print:function(){
//         console.log(this.name);
//     }
// }

// const obj = {
//     name: 'Piyush',
//     age: 24,
//     address: {
//     city: 'Patiala',
//     country: 'IN',
//     loc: {lat: 1,long: 1}
//     }
// }

// Object.prototype.myFlat=function(){

// }

// let arr=[1,2,3,[1,2,3],[4,5,6]];

// function first(){
//     let name="Dhinesh";
//     function print(){
//         console.log(name);
//     }
//     return print;
// }

// let fun=first();
//fun();
// const library = [
//     { author: 'Steve Jobs', title: 'Calter Isaacson', libraryID: 4264 },
//     { author: 'Bill Gates', title: 'Bhe Road Ahead', libraryID: 1254 },
//     { author: 'Suzanne Collins', title: 'Aockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
//   ];
// function sortobj(a,b){
//     if(a.title<b.title){
//         return -1;
//     }
//     return 1;
// }
// console.log(library.sort(sortobj))

// function sum(a,b){
//     console.log(a+b);
// }

// function decide(parm){ 
//     if(typeof parm == 'function'){
//         parm();
//     }else{
//         console.log(parm);
//     }
// }

// decide(sum(2,3));

// console.log(getresult());

// var getresult=function(){
//     console.log("Hi");
// }

let num=[0,6,2,1,9,4,5,2,4]
// let slicearr=num.slice(1,3); //slice are methods that returns a shallow copy array.slice(startindex,endindex)
// console.log(slicearr);
let arr=['q','f','j'];
// num.splice(1,0,...arr);
// console.log(num);
// console.log(num.sort((a,b)=> b-a));

// function mysort(a,b){
//     if(a<b){
//         return 1
//     }
//     return -1;
// }

// var varname=10;
// function a(){
//     console.log(varname);
// }
// function b(){
//     var varname=20;
//     a();
//     console.log(varname);
// }
// b();

let a;
console.log(a);

function b(){
    console.log(a);
    a=3;
}

a=2;
b();