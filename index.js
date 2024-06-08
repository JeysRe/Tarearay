const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({                         
  input: fs.createReadStream('cajahuancayo.txt'), 
  crlfDelay: Infinity
});

let usersCount = 0;

rl.on('line', (line) => {
  if (line.startsWith("D11") && usersCount < 10) {
    usersCount++;

    const dni = line.substring(62, 73); 
    const fechaPago = `${line.substring(542, 544)}${line.substring(544, 546)}/${line.substring(546, 548)}`;
    const montoPago = parseInt(line.substring(525, 537));
    const nombre = line.substring(224, 374).trim();

    console.log(`Usuario ${usersCount}:`);
    console.log(`  - Nombre: ${nombre}`);
    console.log(`  - DNI: ${dni}`);
    console.log(`  - Fecha de pago: ${fechaPago}`);
    console.log(`  - Monto de pago: ${montoPago}`);
    console.log('---------------------------');

    if (usersCount === 10) {
      rl.close();
    }
  }
});
