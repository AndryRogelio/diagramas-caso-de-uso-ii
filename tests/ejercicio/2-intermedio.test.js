const fs = require('fs');
const path = require('path');

describe('Ejercicio 2: Etiquetas en Relaciones, Notas Explicativas y Perspectivas Específicas', () => {
  const filePath = path.join(__dirname, '../../diagramas/ejercicio-2.puml');
  let content = '';

  test('El archivo diagramas/ejercicio-2.puml debe existir', () => {
    expect(fs.existsSync(filePath)).toBe(true);
    content = fs.readFileSync(filePath, 'utf8');
    expect(content.length).toBeGreaterThan(0);
  });

  test('Debe contener delimitadores válidos @startuml y @enduml', () => {
    expect(content).toMatch(/@startuml/);
    expect(content).toMatch(/@enduml/);
  });

  test('Debe delimitar una perspectiva específica de sistema con package', () => {
    expect(content).toMatch(/package\s+["'].*?["']/i);
  });

  test('Debe incluir relaciones con etiquetas descriptivas (: "texto" o : texto)', () => {
    const labeledRelations = content.match(/(-->|\.\.>|--).*?:\s*["']?.*?[a-zA-Z]/g);
    expect(labeledRelations).not.toBeNull();
    expect(labeledRelations.length).toBeGreaterThanOrEqual(2);
  });

  test('Debe incluir dependencias estándar de casos de uso (<<include>> o <<extend>>)', () => {
    const hasIncludeOrExtend = /<<(include|extend)>>/i.test(content);
    expect(hasIncludeOrExtend).toBe(true);
  });

  test('Debe incorporar al menos una nota explicativa (note ...)', () => {
    const noteMatches = content.match(/\bnote\b/gi);
    expect(noteMatches).not.toBeNull();
    expect(noteMatches.length).toBeGreaterThanOrEqual(1);
  });

  test('Debe modelar al menos 3 actores interactuando con el sistema', () => {
    const actorMatches = content.match(/actor\s+["']?.*?["']?/gi);
    expect(actorMatches).not.toBeNull();
    expect(actorMatches.length).toBeGreaterThanOrEqual(3);
  });
});
