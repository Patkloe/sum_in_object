 // first version not in a function.
 var obj = {1:1,2:2,3:3,4:4,5:5};
var deb = 0;
var fin = 4;
nbre = 0;
var recup_keys = Object.keys(obj);
while(deb < fin){
   val = obj[recup_keys[deb]] + obj[recup_keys[fin]];
   if(val > 6 ){
      fin--;
   }
   if((val === 6)&&(fin - deb) > 0){
    fin--;
    nbre++;
   }
   if(val < 6){
    deb++;
   }
}
console.log("sum :" + " " + nbre);
