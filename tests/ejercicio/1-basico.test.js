const fs = require('fs');
const path = require('path');

describe('Ejercicio 1: Sintaxis Fundamental de PlantUML y Casos de Uso Básicos', () => {
  const filePath = path.join(__dirname, '../../diagramas/ejercicio-1.puml');
  let content = '';

  test('El archivo diagramas/ejercicio-1.puml debe existir', () => {
    expect(fs.existsSync(filePath)).toBe(true);
    content = fs.readFileSync(filePath, 'utf8');
    expect(content.length).toBeGreaterThan(0);
  });

  test('Debe contener delimitadores válidos @startuml y @enduml', () => {
    expect(content).toMatch(/@startuml/);
    expect(content).toMatch(/@enduml/);
  });

  test('Debe definir la orientación horizontal (left to right direction)', () => {
    expect(content).toMatch(/left\s+to\s+right\s+direction/i);
  });

  test('Debe definir un contenedor de sistema (package o rectangle)', () => {
    const hasPackageOrRectangle = /(package|rectangle)\s+["'].*?["']/i.test(content);
    expect(hasPackageOrRectangle).toBe(true);
  });

  test('Debe definir al menos 2 actores con identificador o alias', () => {
    const actorMatches = content.match(/(actor\s+["']?[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+["']?|:[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+:)/gi);
    expect(actorMatches).not.toBeNull();
    expect(actorMatches.length).toBeGreaterThanOrEqual(2);
  });

  test('Debe definir al menos 4 casos de uso', () => {
    const usecaseMatches = content.match(/(usecase\s+["'].*?["']|\([a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+\))/gi);
    expect(usecaseMatches).not.toBeNull();
    expect(usecaseMatches.length).toBeGreaterThanOrEqual(4);
  });

  test('Debe contener relaciones directas entre actores y casos de uso (--> o --)', () => {
    const relations = content.match(/(-->|--)/g);
    expect(relations).not.toBeNull();
    expect(relations.length).toBeGreaterThanOrEqual(4);
  });

  test('Debe utilizar aliases (as) para identificar actores o casos de uso', () => {
    const aliasMatches = content.match(/\bas\b/gi);
    expect(aliasMatches).not.toBeNull();
    expect(aliasMatches.length).toBeGreaterThanOrEqual(2);
  });
});
