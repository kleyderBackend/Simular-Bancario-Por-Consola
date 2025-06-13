import { rl } from './readlineUtil.js';
import { menu } from './operations.js';
import { accountOfKleyder, accountOfUser2 } from './cuenta.js';

export function verSaldo(user) {
	console.log(`Tu saldo es: $${user.balance}`);
	menu(user);
}
export function consignar(user) {
	rl.question('ingrese el monto a frpoconsignar: ', (monto) => {
		const montoParse = parseInt(monto);
		if (isNaN(montoParse) || montoParse <= 0) {
			console.log('Cantidad inválida, intenta de nuevo.');
			menu(user);
		} else {
			user.balance += montoParse;
			console.log('consigando....');
			setTimeout(() => {
				console.log(`nuevo saldo: ${user.balance}`);
				menu(user);
			}, 2000)
		}
	})
}

export function retirar(user) {
	rl.question('ingrese el monto a retirar: ', (monto) => {
		const montoParse = parseInt(monto);
		if (isNaN(montoParse) || montoParse <= 0 || montoParse > user.balance) {
			console.log('Cantidad inválida, intenta de nuevo.');
			menu(user);
		} else {
			user.balance -= montoParse;
			console.log('retirando ....');
			setTimeout(() => {
				console.log(`nuevo saldo: ${user.balance}`);
				menu(user);
			}, 2000)
		}
	})
}

export function Transferir(user) {
	rl.question('Ingrese destinatario: ', (destinatarioInput) => {
		const cuentas = [accountOfKleyder, accountOfUser2];
		const receptor = cuentas.find(c => c.folder === destinatarioInput);

		if (!receptor) {
			console.log(' Destinatario inválido');
			return menu(user);
		}

		if (receptor.folder === user.folder) {
			console.log(' No puedes transferirte a ti mismo.');
			return menu(user);
		}

		rl.question('Ingrese el monto a transferir: ', (montoInput) => {
			const monto = parseInt(montoInput);

			if (isNaN(monto) || monto <= 0 || monto > user.balance) {
				console.log(' Monto no válido o insuficiente.');
				return menu(user);
			}

			user.balance -= monto;
			receptor.balance += monto;

			console.log(' Transfiriendo...');
			setTimeout(() => {
				console.log(` Transferencia exitosa:
        De: ${user.folder} → ${receptor.folder}
        Nuevo saldo : ${user.folder}: ${user.balance}
		nuevo saldo : ${receptor.folder}: ${receptor.balance} `);
				menu(user);
			}, 2000);
		});
	});
}
