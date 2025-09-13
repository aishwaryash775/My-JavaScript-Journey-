let students =["aishwarya" ,"prem" ,"ritu"];
let info = ["aish", 35 , 89.9];
//array method
//Cars = ["audi","bmw","maruti","xuv"];
//indexof //includes
let marks =[100,55,66,43,89];
//concat // reverse 
marks.concat(info);
//output : Array(8) [ 100, 55, 66, 43, 89, "aish", 35, 89.9 ]
info.concat(marks);
//output : Array(8) [ "aish", 35, 89.9, 100, 55, 66, 43, 89 ]
//slice method
//let marks =[100,55,66,43,89];
marks.slice(2);
//output :
//Array(3) [ 66, 43, 89 ]
//splice method
 Cars = ["audi","bmw","maruti","xuv"];
Cars;
Array(4) [ "audi", "bmw", "maruti", "xuv" ]

Cars.splice(2);
Array [ "maruti", "xuv" ]

Cars;
Array [ "audi", "bmw" ]

Cars.splice(0,1);
Array [ "audi" ]

Cars
Array [ "bmw" ]

Cars.push("bmw");
2 
let Cars = ["audi","bmw","maruti","xuv"];
undefined
Cars.splice(1, 0, "mercedes")

Cars
Array(5) [ "audi", "mercedes", "bmw", "maruti", "xuv" ]
//Array reference

//nested array
let nums = [[1,2],[3,4],[3,4]];