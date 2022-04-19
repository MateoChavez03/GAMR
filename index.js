let grupoFamiliar = `El grupo familiar esta conformado por:\n`;
let nombre = prompt("Ingrese el primer miembro de su grupo familiar:");
let ingresos = parseFloat(prompt("Ingrese el sueldo del primer miembro:"));

while (nombre != "ESC") {
    alert(`El sueldo de ${nombre} es de $${ingresos}`);
    grupoFamiliar += `${nombre} con un sueldo de: $${ingresos}\n`;
    nombre = prompt("Ingrese el siguiente miembro:");
    ingresos = parseFloat(prompt("Ingrese el sueldo del siguiente miembro:"));
}

alert(grupoFamiliar);