# Ejercicio 3: Avanzado — Múltiples Tipos de Notas, Conexiones Especiales y Casos de Uso Especializados

## Objetivo
Implementar un diagrama completo con múltiples tipos de notas (notas ancladas, notas sobre enlaces y notas globales), conexiones especiales (generalización/herencia de actores), estereotipos de inclusión/extensión y múltiples paquetes/subsistemas especializados.

## Instrucciones

1. Abre el archivo `diagramas/ejercicio-3.puml`.
2. Modela una jerarquía de actores con generalización/herencia:
   - Actor base: `Usuario` (alias `U`)
   - Actores derivados: `Estudiante` (alias `E`) y `Profesor` (alias `P`)
   - Relación de herencia: `U <|-- E` y `U <|-- P`
   - Actor especializado: `Administrador` (alias `A`), donde `U <|-- A`
3. Modela múltiples subsistemas o paquetes:
   - `package "Módulo de Seguridad y Autenticación"`
   - `package "Módulo de Gestión Académica"`
   - `package "Módulo de Auditoría y Reportes"`
4. Casos de uso especializados:
   - `Autenticarse con 2FA` (alias `UC_2FA`)
   - `Inscribir Asignaturas` (alias `UC_INSCRIBIR`)
   - `Verificar Prerrequisitos` (alias `UC_PRERREQUISITOS`)
   - `Publicar Calificaciones` (alias `UC_CALIFICAR`)
   - `Generar Reporte de Rendimiento` (alias `UC_REPORTE`)
5. Conexiones avanzadas:
   - Inclusión obligatoria: `UC_INSCRIBIR ..> UC_PRERREQUISITOS : <<include>>`
   - Extensión condicional: `UC_INSCRIBIR ..> UC_REPORTE : <<extend>>`
6. Múltiples tipos de notas requeridos:
   - **Nota sobre enlace (`note on link`)**: Describiendo una validación en tiempo de ejecución.
   - **Nota anclada a elemento (`note right of` o `note left of`)**: Explicando el mecanismo de seguridad.
   - **Nota global o informativa**: Documentando el estándar de auditoría.

## Verificación
Ejecuta la prueba automatizada:
```bash
npm test ejercicio/3
```
