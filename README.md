# APISECUR

## Descripción
APISECUR es una API para gestionar información de empleados y empresas, ofreciendo operaciones CRUD para administrar la información relevante.

## Características
- **Empleados**: Administra información de empleados, incluyendo datos personales y profesionales.
- **Empresas**: Permite la gestión de información empresarial.
- **Seguridad**: Implementa seguridad mediante autenticación basada en clave API.
- **Estructura Modular**: Estructura organizada en módulos para controladores, rutas y configuraciones.

## Requisitos
- Node.js (v14 o superior)
- MySQL

## Instalación
1. Clona el repositorio:
```bash
 git clone https://github.com/hnkatze/APISECUR.git
```
Instala las dependencias:
```bash
npm install
```
## Configura las variables de entorno en tu archivo env
- PORTDB
- DB_USER
- DB_PASSWORD
- DB_SERVER
- DB_DATABASE
- APIKEY

## Uso de la API
Para realizar solicitudes a la API, asegúrate de incluir la clave API en el encabezado de la solicitud. Aquí tienes un ejemplo de cómo hacerlo:

```bash
const apiKey = "TU_API_KEY";
const apiurl = "URL_DE_TU_API";
const requestOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": apiKey,
  },
  body: JSON.stringify(TU_CUERPO_DE_SOLICITUD),
};
```
Recuerda reemplazar TU_API_KEY, URL_DE_TU_API y TU_CUERPO_DE_SOLICITUD con tus propios valores.
