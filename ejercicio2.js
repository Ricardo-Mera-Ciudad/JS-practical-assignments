//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

let resultArr = [];

for (let i = 0; i < arrDirty.length; i++) {
  if (
    (typeof arrDirty[i] === "string" && !arrDirty[i] == "") ||
    (typeof arrDirty[i] === "number" && arrDirty[i] !== "NaN") ||
    arrDirty[i] === true
  ) {
    resultArr.push(arrDirty[i]);
  }
}

console.log(resultArr);
