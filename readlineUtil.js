import readline from 'readline';
import { accountOfKleyder, accountOfUser2 } from './cuenta.js';
import { menu } from './operations.js';

export const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

export function pregunta() {
	rl.question('ingrese su nombre: ', (name) => {
		const user =
			accountOfKleyder.folder === name ? accountOfKleyder :
				accountOfUser2.folder === name ? accountOfUser2 :
					null;
		if (!user) {
			console.log('usuario no exite');
			rl.close();
			return;
		}

		rl.question('ingrese su contraseña: ', (password) => {
			const passwordInput = parseInt(password);
			if (user.password === passwordInput) {
				console.log('validando....');
				setTimeout(() => {
					menu(user);
				}, 2000);
			} else {
				setTimeout(() => {
					console.log('contrseña incorrecta');
					rl.close();
				}, 2000)
			}
		});
	});
}