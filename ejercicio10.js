// Crea una función que elimine las etiquetas html o xml de un string.
// La función debe tener un string como único parámetro.
// Ejemplo de uso de la función:

function removeHTMLTags(param){
    let regex = /(<([^>]+)>)/ig
    return param.replace( regex, '' )
}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');

console.log(result); // lorem ipsum

