// Crea una función que convierta un número de bytes en un formato con valores legibles
//('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
// Primer parámetro debe ser el número de bytes
// Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se
//debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()).
//Por defecto, este parámetro debe de tener un valor de 3.

// Ejemplo de uso de la función:

function fromBytesToFormattedSizeUnits(bytes, digits) {

  let multiplo = 1024;

  let kiloBytes = multiplo;
  let megaBytes = multiplo ** 2;
  let gigaBytes = multiplo ** 3;
  let teraBytes = multiplo ** 4;
  let exoBytes = multiplo ** 5;
  let zetaBytes = multiplo ** 6;
  let yotaBytes = multiplo ** 7;
  let extra = multiplo ** 8;

  if (bytes >= 0) {
    if (bytes < kiloBytes) {
      return bytes + " bytes";
    } else if (bytes < megaBytes) {
      return bytes / kiloBytes + " KiB";
    } else if (bytes < gigaBytes) {
      return (bytes / megaBytes).toPrecision(digits) + " MiB";
    } else if (bytes < teraBytes) {
      return (bytes / gigaBytes).toPrecision(digits) + " GiB";
    } else if (bytes < exoBytes) {
      return (bytes / teraBytes).toPrecision(digits) + " TiB";
    } else if (bytes < zetaBytes) {
      return (bytes / exoBytes).toPrecision(digits) + " EiB";
    } else if (bytes < yotaBytes) {
      return (bytes / zetaBytes).toPrecision(digits) + " ZiB";
    } else if (bytes < extra) {
      return (bytes / yotaBytes).toPrecision(digits) + " YiB";
    }
  }
}

const result = fromBytesToFormattedSizeUnits(1024);
console.log(result); // 1KB

const result2 = fromBytesToFormattedSizeUnits(123456789, 4);
console.log(result2); // 123MB

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB
