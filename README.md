# 🏦 Simulador Bancario por Consola – Node.js

Sistema bancario básico creado en Node.js para ser ejecutado completamente desde la consola.  
Permite a los usuarios realizar operaciones reales como ver saldo, consignar, retirar y transferir dinero entre cuentas, utilizando validaciones lógicas y control de flujo con `readline`.

## 🚀 Funcionalidades

- Inicio de sesión con usuario y contraseña
- Menú interactivo personalizado
- Ver saldo disponible
- Consignar dinero a la cuenta
- Retirar dinero con validación de saldo
- Transferencia de dinero entre usuarios
- Control de errores (montos inválidos, usuarios inexistentes, auto-transferencias)
- Mensajes simulados con `setTimeout` para realismo de operación

## 📂 Estructura del Proyecto
     ├── app.js # Punto de entrada de la aplicación
     ├── cuenta.js # Datos simulados de las cuentas
     ├── acciones.js # Funciones bancarias (verSaldo, retirar, consignar, transferir)
     ├── operations.js # Menú principal y navegación
     ├── readlineUtil.js # Instancia compartida de readline

## ▶️ Cómo ejecutar

1. Cloná el repositorio:
   git clone https://github.com/kleyderBackend/Simular-Bancario-Por-Consola.git
   cd Simular-Bancario-Por-Consola
2.Ejecutá el proyecto:
   npm init -y
   npm install
   package.json: "type": "module"
   node app.js

👤 Usuarios de prueba
Usuario	Contraseña	Saldo Inicial
kleyder	1212	$1000
carlos	1111	$500

📌 Requisitos
Node.js 18 o superior
Terminal compatible con entrada por consola

## 🧠 Autor
Kleyder
Backend Developer en formación | Aprendiz autodidacta

