function isPangram(string){
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
                  return true;
                }else{
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
                  return false
                }
               
              }
              
  
        
 
               
  // isPangram("The quick brown fox jumps over the lazy dog")
  isPangram("Pack my box with five dozen liquor jugñs.")
  // isPangram("aaaabc")

  // "The quick brown fox jumps over the lazy dog"
