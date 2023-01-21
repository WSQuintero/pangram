function isPangram(string){
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
                return true
              }else{
                return false;
                }
        }
        
    }
               
  isPangram("The quick brown fox jumps over the lazy dog")


