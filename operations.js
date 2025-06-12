import { rl } from './readlineUtil.js';
import { verSaldo, consignar, retirar,Transferir } from './acciones.js';

export function menu(user) {
    console.log(`\nBienvenido ${user.folder}`);
    rl.question(`Seleccione una opción:  
    1. Ver saldo
    2. Consignar
    3. Retirar
    4. Transferir
    5. Salir\n`, (opcion) => {
        const option = parseInt(opcion);
        switch (option) {
            case 1:
                verSaldo(user);
                break;
            case 2:
                consignar(user);
                break;
            case 3:
                retirar(user);
                break;
            case 4:
                Transferir(user);
                break;
            case 5:
                console.log(`${user.folder} muchas gracias por usar nuestro sistema, hasta luego`);
                rl.close();
                break;
            default:
                console.log('opcion no valida');
                menu(user);
        }
    })
}