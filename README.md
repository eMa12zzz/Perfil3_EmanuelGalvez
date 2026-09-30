# Perfil3_EmanuelGalvez

Evaluación práctica - Perfil 15%
Módulo 5: Desarrollo de componentes para dispositivos móviles
Instituto Técnico Ricaldone - Tercer año de Desarrollo de Software

## Estudiante

- **Nombre:** Emanuel Galvez
- **Carnet:** 20240230
- **Sección y grupo:** 1B - Grupo 1

## Enlaces

- **Video demostrativo:** PENDIENTE
- **Descarga del APK:** PENDIENTE

## Descripción

Aplicación móvil desarrollada con React Native y Expo. Cuenta con dos pantallas:

1. **Inicio:** muestra la información del estudiante (nombre, carnet, sección y grupo) y un botón para navegar a la segunda pantalla.
2. **Series de TV:** consume la API de [TVMaze](https://api.tvmaze.com/shows) y muestra cada serie en una tarjeta con su nombre, imagen y descripción.

## Estructura del proyecto

```
App.js
src/
  components/   Componentes reutilizables (Card, Loading, ErrorMessage, CustomButton, InfoRow)
  data/         Información del estudiante
  hooks/        Custom hook useFetchShows (consumo de la API con fetch y async/await)
  navigation/   Configuración de React Navigation (Native Stack)
  screens/      Pantallas HomeScreen y ShowsScreen
  theme/        Colores de la aplicación
assets/         Icono y splash screen personalizados
```

## Tecnologías

- React Native + Expo
- React Navigation (Native Stack)
- API: https://api.tvmaze.com/shows

## Cómo ejecutar el proyecto

```bash
npm install
npx expo start
```

## Cómo generar el APK

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```
