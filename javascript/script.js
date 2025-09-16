const student ={
    name : "aish",
    age : 22,
    eng : 94,
    phy : 33,
    getAvg(){
        let avg = (this.eng + this.math + this.phy )/3;
        console.log(avg);
    }
}
= 
alert("hrllo00");


const sum =(a,b) => {
    console.log(a=b);

};


const cube = (n) =>{
    return n * n  * n ;
};

const pow = (a,b) =>
{
    return a**b;
};
const mul = (a,b) => a*b;


document.writeln("Hi there!");

setTimeout( () => {
    document.writeln("apna india");
},40000);
document.writeln("WELCOME HOME");

let id = setInterval(() => {
    document.writeln("Apna world!");
}, 2000);

document.writeln(id);



document.writeln(id ); 
 
let arr = [1,3,4,5,6,7,8,3,7];



let max = arr.reduce((max,el) =>{
    if (max < el) {
       
        return el;
    } else {
        return max;
    }
});
document.writeln(max);





function sum(a,b =3){
    return  a+b;


}
sum(2);


let arr = [1,3,4,5,6,8,9,2];
let newArr =  [...arr];

let chars= [..."hello"];
let even =[2,4,6,8,10];
let odd = [1,3,5,7,9];


let nums =[...even ,...odd];


/spread with object literal 

const data= {
    email :"aish123@gmail.com",
    password: "abcd",
};

const datacopy = {...data , id:123 , country:"india"};
   


function sum(...args) { 
    return args.reduce((sum, el) => sum + el, 0);
}



