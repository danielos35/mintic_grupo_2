/*
  MinTIC - MinT
  Desarrollo de Software - Sprint # 2

  Ciclo 4 -  Grupo 2
        Marquez Alvarez, Daniel Felipe
        Prieto Campo, Carlos Arturo
        Ramirez Martinez, Cristian Camilo
        Rincon Palacio, Hector German
        Aldana Olave, Armando

  NOV-2021
*/

/*   Historia de Usuario: HU-03
        Encontrar el porcentaje de los parámetros del analizador de gases - Funcion: calcularPorcentajes 
*/
// Premisa: Se asume que los 8 parámetros son númericos
//
const calcularPocentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
    // Calcula porcentaje CO
    let porcentajeCO = 0;
    if (limiteCO !== 0) {
        porcentajeCO = (valorCO / limiteCO) * 100;
    }

    // Calcula porcentaje CO2
    let porcentajeCO2 = 0;
    if (limiteCO2 !== 0) {
        porcentajeCO2 = (valorCO2 / limiteCO2) * 100;
    }

    // Calcula porcentaje HC
    let porcentajeHC = 0;
    if (limiteHC !== 0) {
        porcentajeHC = (valorHC / limiteHC) * 100;
    }

    // Calcula porcentaje O2
    let porcentajeO2 = 0;
    if (limiteO2 !== 0) {
        porcentajeO2 = (valorO2 / limiteO2) * 100;
    }

    respuesta = {
        "porcentajeCO": parseInt(porcentajeCO.toFixed(2)),
        "porcentajeCO2": parseInt(porcentajeCO2.toFixed(2)),
        "porcentajeHC": parseInt(porcentajeHC.toFixed(2)),
        "porcentajeO2": parseInt(porcentajeO2.toFixed(2))
    }
    return respuesta;
};

/*   Historia de Usuario: HU-04
        Níveles de parámetros NTC-4983s - Funciones: registrarCO, registrarCO2, registrarHC, registrarO2
 */
// Premisa: Se asume que el parámetro de cada función es númerico
// 
// Nivel CO
let rangosCO = [
    { etiqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10 },
    { etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15 },
]
const registrarCO = (value) => {
    var BreakException = {};
    try {
        rangosCO.forEach(elemento => {
            if (value >= elemento['de'] && value <= elemento['hasta']) {
                respuesta = elemento['etiqueta'];
                throw BreakException;
            } else {
                respuesta = "fuera_de_rango";
            }
        });
    } catch (exc) {
        if (exc !== BreakException) throw exc;
    }
    return respuesta;
};

// Nivel CO2
let rangosCO2 = [
    { etiqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20 },
    { etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30 },
]
const registrarCO2 = (value) => {
    var BreakException = {};
    try {
        rangosCO2.forEach(elemento => {
            if (value >= elemento['de'] && value <= elemento['hasta']) {
                respuesta = elemento['etiqueta'];
                throw BreakException;
            } else {
                respuesta = "fuera_de_rango";
            }
        });
    } catch (exc) {
        if (exc !== BreakException) throw exc;
    }
    return respuesta;
};

// Nivel HC
let rangosHC = [
    { etiqueta: 'Parametro HC en rango estandar', de: 0, hasta: 10000 },
    { etiqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000 },
]
const registrarHC = (value) => {
    var BreakException = {};
    try {
        rangosHC.forEach(elemento => {
            if (value >= elemento['de'] && value <= elemento['hasta']) {
                respuesta = elemento['etiqueta'];
                throw BreakException;
            } else {
                respuesta = "fuera_de_rango";
            }
        });
    } catch (exc) {
        if (exc !== BreakException) throw exc;
    }
    return respuesta;
};

// Nivel O2
let rangosO2 = [
    { etiqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22 },
    { etiqueta: 'Parametro O2 fuera de rango', de: 23, hasta: 30 },
]
const registrarO2 = (value) => {
    var BreakException = {};
    try {
        rangosO2.forEach(elemento => {
            if (value >= elemento['de'] && value <= elemento['hasta']) {
                respuesta = elemento['etiqueta'];
                throw BreakException;
            } else {
                respuesta = "fuera_de_rango";
            }
        });
    } catch (exc) {
        if (exc !== BreakException) throw exc;
    }
    return respuesta;
};

// Sentencia de prueba (una) - Eliminar para la entrega
// Calculaconsole.log(calcularPorcentajes(10, 66.66, 0, 50, 2.55555, 16.70, 30, 25));
// Sentencias de prueba (cuatro) - Eliminar para la entrega
/*console.log(registrarCO(40));
console.log(registrarCO2(100));
console.log(registrarHC(6000));
console.log(registrarO2(22));*/

module.exports.calcularPocentajes = calcularPocentajes;
module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;