//function f1(){
    //if(arguments.length!==2){
        //throw "number of parameters should be 2";

  //  }
//}
//f1(1,2,3);

function f2(){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        if(typeof(arguments[i])=="number"){
            sum=sum+arguments[i];
        }
        else
        throw "parameters should be neumerical values only";
    }
    console.log(sum);
}
f2(1,2,3);
//f2(1,"k")

function f3(){
    for(var i=arguments.length-1;i=>0;i--)
    console.log(arguments[i]);
   //OR
   console.log(arguments.reverse()); 
}
f3(1,2,3);

var x=5;
var y="k"

var [y,x]=[x,y];
console.log(x,y);

function f4(...x){
    console.log(Math.min(...x));
    console.log(Math.max(...x));

}

f4(1,2,5,7);