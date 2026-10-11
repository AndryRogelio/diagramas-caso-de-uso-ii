# Ejercicio 1: Básico — Sintaxis Fundamental de PlantUML y Casos de Uso Básicos

## Objetivo
Aprender la sintaxis básica de PlantUML, la definición de actores, casos de uso simples, el delimitador de sistema mediante `package` y el uso de `aliases` (`as`).

## Instrucciones

1. Abre el archivo `diagramas/ejercicio-1.puml`.
2. Asegúrate de incluir los delimitadores `@startuml` y `@enduml`.
3. Configura la orientación horizontal: `left to right direction`.
4. Define un delimitador de sistema usando un `package` llamado `"Sistema Bancario"`.
5. Modela al menos dos actores:
   - `Cliente` (con alias, por ejemplo `C`)
   - `Cajero` (con alias, por ejemplo `CA`)
6. Dentro del sistema, modela al menos 4 casos de uso:
   - `Consultar Saldo` (alias `UC1`)
   - `Retirar Dinero` (alias `UC2`)
   - `Transferir Fondos` (alias `UC3`)
   - `Registrar Depósito` (alias `UC4`)
7. Establece las relaciones directas con flechas (`-->`):
   - El Cliente se relaciona con Consultar Saldo, Retirar Dinero y Transferir Fondos.
   - El Cajero se relaciona con Registrar Depósito y Consultar Saldo.

## Verificación
Ejecuta la prueba automatizada:
```bash
npm test ejercicio/1
```
