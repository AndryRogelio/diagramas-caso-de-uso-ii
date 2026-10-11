# Diagramas de Casos de Uso - GitHub Classroom

Este repositorio contiene una serie de ejercicios prácticos para aprender a crear diagramas de casos de uso utilizando **PlantUML**. Cada ejercicio incluye pruebas automatizadas para autocorrección y calificación automática con Jest.

---

## 📖 PARA ESTUDIANTES: LEE ESTO PRIMERO

### 📘 Guía Completa de la Práctica
👉 **[GUIA-ESTUDIANTES.md](GUIA-ESTUDIANTES.md)** — **Instrucciones paso a paso para resolver cada ejercicio.**

---

## 🎯 Conceptos Clave

- **Sintaxis básica de PlantUML**: Declaración de bloques `@startuml` / `@enduml`, directivas y formato.
- **Definición de actores**: Creación y modelado de actores del sistema (`actor`, `:Nombre:`, aliases con `as`).
- **Relaciones directas**: Conexiones entre actores y casos de uso (`-->`, `--`), estereotipos (`<<include>>`, `<<extend>>`).
- **Estructura de packages y aliases**: Agrupación por subsistemas y delimitador del sistema (`package`, `rectangle`).

---

## 📈 Progresión de Dificultad

Los ejercicios están diseñados con una progresión de dificultad creciente:

1. **Básico**: Sintaxis fundamental de PlantUML y conceptos básicos de casos de uso.
2. **Intermedio**: Etiquetas en relaciones, notas explicativas y perspectivas específicas.
3. **Avanzado**: Múltiples tipos de notas, conexiones especiales y casos de uso especializados.

---

## 📋 Lista de Ejercicios

| Ejercicio | Nivel | Descripción | Archivo a Editar | Comando de Test |
|---|---|---|---|---|
| **1** | Básico | [Sintaxis fundamental y casos de uso básicos](ejercicios/ejercicio-1-basico.md) | `diagramas/ejercicio-1.puml` | `npm test ejercicio/1` |
| **2** | Intermedio | [Etiquetas en relaciones, notas y perspectiva](ejercicios/ejercicio-2-intermedio.md) | `diagramas/ejercicio-2.puml` | `npm test ejercicio/2` |
| **3** | Avanzado | [Notas múltiples, herencia y casos especializados](ejercicios/ejercicio-3-avanzado.md) | `diagramas/ejercicio-3.puml` | `npm test ejercicio/3` |

---

## 🚀 Cómo Empezar

1. **Clona tu repositorio** generado automáticamente por GitHub Classroom.
2. **Instala las dependencias**:
   ```bash
   npm install
   ```
3. **Revisa cada ejercicio** dentro de la carpeta `ejercicios/`.
4. **Modifica los archivos `.puml`** dentro de la carpeta `diagramas/`.
5. **Verifica tu progreso** ejecutando los tests:
   ```bash
   npm test ejercicio/1
   npm test ejercicio/2
   npm test ejercicio/3
   ```
6. **Ejecuta todos los tests**:
   ```bash
   npm test
   ```
7. **Realiza commits y push** a tu repositorio remoto en GitHub.

---

## ⚡ Comandos de Testing

```bash
# Ejecutar todos los tests
npm test

# Ejecutar test de un ejercicio específico
npm test ejercicio/1
npm test ejercicio/2
npm test ejercicio/3

# Ejecutar todos los ejercicios con detalle
npm run test:verbose

# Ejecutar tests por nivel
npm run test:basico
npm run test:intermedio
npm run test:avanzado
```

---

## 📁 Estructura del Repositorio

```
├── diagramas/               # Archivos de diagramas PlantUML (.puml)
│   ├── ejercicio-1.puml
│   ├── ejercicio-2.puml
│   └── ejercicio-3.puml
├── ejercicios/              # Guías e instrucciones de cada ejercicio
│   ├── ejercicio-1-basico.md
│   ├── ejercicio-2-intermedio.md
│   └── ejercicio-3-avanzado.md
├── tests/
│   └── ejercicio/           # Pruebas automatizadas Jest
│       ├── 1-basico.test.js
│       ├── 2-intermedio.test.js
│       └── 3-avanzado.test.js
├── GUIA-ESTUDIANTES.md      # Guía didáctica para el estudiante
├── package.json             # Configuración del proyecto y scripts
├── jest.config.js           # Configuración de Jest
└── README.md                # Este documento
```

---

## 🏆 Criterios de Evaluación

- **Ejercicio 1 (Básico)**: 33.3% (0.33 pts)
- **Ejercicio 2 (Intermedio)**: 33.3% (0.33 pts)
- **Ejercicio 3 (Avanzado)**: 33.4% (0.34 pts)

**Total**: 100% (1.0 punto)
