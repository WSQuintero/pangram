function isPangram(string){
  // let arrayMayusculas=[];
  // let arrayMinusculas=[];
  let letras=[];
  let minusculas=string.toLowerCase();
  const textOfUser=minusculas.replace(/\s+/g, '').split("");
  const stringOrdenado=textOfUser.sort();
  const stringSinDuplicados= stringOrdenado.reduce((acc,item)=>{
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
              if(letras[i] ===stringSinDuplicados[i]){
                // console.log(letras[i].includes(stringSinDuplicados[i]))
                return true
          }else{
            return false;
          }
          
      
        }
        
    
      
// console.log(letras)
      // console.log(a.includes("A"))

    }
               
  

  
  isPangram("The quick brown fox jumps over the lazy dog")


