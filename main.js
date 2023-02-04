let input = document.querySelector("input");
let button = document.querySelector("button");
let values = input.value;
let container = document.querySelector(".container");

// Agregamos un evento al botón para ejecutar la función click al hacer clic
button.addEventListener("click", click);

function click() {
  // Recargamos la página
  location.reload();
  // Llamamos a la función isPangram con los valores ingresados en el input

  isPangram(values);
}

function isPangram(string) {
  // verificamos si hay valores ingresados en el input
  if (values) {
    // Creamos un array vacío para almacenar las letras del alfabeto
    let letras = [];
    // Convertimos todos los caracteres de la cadena ingresada en minúsculas
    let minusculas = string.toLowerCase();
    // Eliminamos los espacios en blanco y separamos los caracteres en un array
    const textOfUser = minusculas.replace(/\s+/g, "").split("");
    // ordenamos el array de caracteres
    const stringOrdenado = textOfUser.sort();

    // eliminamos los caracteres duplicados del array
    let stringSinDuplicados = stringOrdenado.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);

    // Creamos un array con las letras del alfabeto
    for (let i = 97; i < 123; i++) {
      let abc = String.fromCharCode(i);
      letras.push(abc);
    }

    // Comparamos el tamaño del array sin duplicados con el tamaño del array del alfabeto
    // si son del mismo tamaño, comparamos si cada elemento del array sin duplicados es igual a su correspondiente en el array del alfabeto
    if (stringSinDuplicados.length == letras.length) {
      for (let i = 0; i < stringSinDuplicados.length; i++) {
        if (stringSinDuplicados[i] == letras[i]) {
          // si cumple las condiciones, entonces es un pangram
          container.innerText = "Es Pangram";
          return true;
        } else {
          // si no cumple las condiciones, entonces no es un pangram
          container.innerText = "No es Pangram";
          return false;
        }
      }
    }

    // si el tamaño del array sin duplicados es mayor al tamaño del array del alfabeto,
    // entonces verificamos si hay caracteres en el array sin duplicados que no pertenecen al alfabeto
    if (stringSinDuplicados.length > letras.length) {
      let sinCaracteres = [];
      for (let i = 0; i < stringSinDuplicados.length; i++) {
        if (letras.indexOf(stringSinDuplicados[i]) === -1) {
          sinCaracteres.push(stringSinDuplicados[i]);
        }
      }

      // si hay caracteres que no pertenecen al alfabeto, los elimos del array y volvemos a llamar a la función isPangram con el nuevo array sin esos caracteres
      if (sinCaracteres.length > 0) {
        let final = stringSinDuplicados;
        for (let o = 0; o < sinCaracteres.length; o++) {
          final = final.filter((x) => {
            return x != sinCaracteres[o];
          });
        }
        let finFin = final.join(" ");
        return isPangram(finFin);
      }
    }
    // si el tamaño del array sin duplicados es menor al tamaño del array del alfabeto, entonces no es un pangram
    else {
      container.innerText = "No es Pangram";
      return false;
    }
  }
}

// isPangram("The quick brown fox jumps over the lazy dog")
isPangram(values);
// isPangram("aaaabc")

// "The quick brown fox jumps over the lazy dog"
