let input =document.querySelector("input");
let button= document.querySelector("button");
let values=input.value;
let container=document.querySelector(".container");

button.addEventListener("click",click);

function click(){
  location.reload();
  isPangram(values);
  

}
function isPangram(string){
        if(values){
          let letras=[];
          let minusculas=string.toLowerCase();
          const textOfUser=minusculas.replace(/\s+/g, '').split("");
          const stringOrdenado=textOfUser.sort();
          let stringSinDuplicados= stringOrdenado.reduce((acc,item)=>{
            if(!acc.includes(item)){
              acc.push(item);
            }
            return acc;
          },[])
          

            for(let i=97;i<123;i++){
                let abc=String.fromCharCode(i);
                letras.push(abc);
          };
            

                    for(let i=0;i<stringSinDuplicados.length;i++){ 
                      if(stringSinDuplicados.length==letras.length){ 
                        if(stringSinDuplicados[i]==letras[i]){
                          container.innerText="Es Pangram"
                          return true;
                        }else{
                          container.innerText="No es Pangram"
                          return false;
                            }               
                      }
                    }


                        if(stringSinDuplicados.length>letras.length){
                          let sinCaracteres = [];
                      
                          for (let i = 0; i < stringSinDuplicados.length; i++) {
                            if (letras.indexOf(stringSinDuplicados[i]) === -1) {
                              sinCaracteres.push(stringSinDuplicados[i]);
                            }
                          }
          
                          if(sinCaracteres.length>0){
                            let final = stringSinDuplicados;
                              for(let o=0;o<sinCaracteres.length;o++){
                                final = final.filter(x=>{
                                    return x!=sinCaracteres[o];
                                });
                              }

                              let finFin=final.join(" ");
                            return  isPangram(finFin);
                            
                        }  
                        }else{
                          container.innerText="No es Pangram"
                          return false
                        }
                        
              }
}
  
              
  
        
 
               
  // isPangram("The quick brown fox jumps over the lazy dog")
  isPangram(values)
  // isPangram("aaaabc")

  // "The quick brown fox jumps over the lazy dog"
