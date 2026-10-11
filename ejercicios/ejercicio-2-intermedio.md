# Ejercicio 2: Intermedio — Etiquetas en Relaciones, Notas Explicativas y Perspectivas Específicas

## Objetivo
Profundizar en el modelado UML incorporando etiquetas explicativas en las conexiones, notas descriptivas (`note`), relaciones de inclusión (`<<include>>`) y extensión (`<<extend>>`), bajo una perspectiva de negocio definida.

## Instrucciones

1. Abre el archivo `diagramas/ejercicio-2.puml`.
2. El diagrama debe representar el sistema `package "Gestión de Pedidos y Pagos"`.
3. Modela los actores participantes:
   - `Cliente` (alias `C`)
   - `Pasarela de Pagos` (alias `PP`)
   - `Administrador` (alias `A`)
4. Modela los casos de uso principales:
   - `Realizar Compra` (alias `UC_COMPRA`)
   - `Procesar Pago` (alias `UC_PAGO`)
   - `Aplicar Cupón de Descuento` (alias `UC_CUPON`)
   - `Generar Factura` (alias `UC_FACTURA`)
   - `Cancelar Pedido` (alias `UC_CANCELAR`)
5. Agrega etiquetas descriptivas en las conexiones principales:
   - Ejemplo: `C --> UC_COMPRA : "Selecciona productos"`
   - Ejemplo: `UC_PAGO ..> PP : "Verifica transacción bancaria"`
6. Modela las relaciones de dependencia:
   - `UC_COMPRA ..> UC_PAGO : <<include>>`
   - `UC_PAGO ..> UC_FACTURA : <<include>>`
   - `UC_CUPON ..> UC_COMPRA : <<extend>>`
7. Incorpora al menos una nota explicativa:
   - Una nota descriptiva junto al caso de uso de pago: `note right of UC_PAGO : Permite tarjeta de crédito, débito y transferencia.`

## Verificación
Ejecuta la prueba automatizada:
```bash
npm test ejercicio/2
```
