const fs = require('fs');
const path = require('path');

describe('Ejercicio 3: Múltiples Tipos de Notas, Conexiones Especiales y Casos de Uso Especializados', () => {
  const filePath = path.join(__dirname, '../../diagramas/ejercicio-3.puml');
  let content = '';

  test('El archivo diagramas/ejercicio-3.puml debe existir', () => {
    expect(fs.existsSync(filePath)).toBe(true);
    content = fs.readFileSync(filePath, 'utf8');
    expect(content.length).toBeGreaterThan(0);
  });

  test('Debe contener delimitadores válidos @startuml y @enduml', () => {
    expect(content).toMatch(/@startuml/);
    expect(content).toMatch(/@enduml/);
  });

  test('Debe modelar herencia o generalización entre actores (<|-- o --|>)', () => {
    const hasInheritance = /(<\|--|--\|>)/.test(content);
    expect(hasInheritance).toBe(true);
  });

  test('Debe modelar relaciones <<include>> y <<extend>>', () => {
    expect(content).toMatch(/<<include>>/i);
    expect(content).toMatch(/<<extend>>/i);
  });

  test('Debe implementar una nota sobre enlace (note on link)', () => {
    expect(content).toMatch(/note\s+on\s+link/i);
  });

  test('Debe contener al menos dos tipos distintos de notas', () => {
    const hasNoteOnLink = /note\s+on\s+link/i.test(content);
    const hasNoteRightOrLeft = /note\s+(right|left|top|bottom)\s+of/i.test(content);
    const hasFloatingNote = /note\s+["'].*?["']\s+as/i.test(content);

    let typesCount = 0;
    if (hasNoteOnLink) typesCount++;
    if (hasNoteRightOrLeft) typesCount++;
    if (hasFloatingNote) typesCount++;

    expect(typesCount).toBeGreaterThanOrEqual(2);
  });

  test('Debe estructurar el diagrama con múltiples paquetes o subsistemas', () => {
    const packageMatches = content.match(/package\s+["'].*?["']/gi);
    expect(packageMatches).not.toBeNull();
    expect(packageMatches.length).toBeGreaterThanOrEqual(2);
  });
});
