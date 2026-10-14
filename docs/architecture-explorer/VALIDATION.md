# Validación del Architecture Explorer

Revisión local completada el **13 de octubre de 2026**. Los [recibos públicos](validation-receipts.json) contienen tipos de diagrama, hashes SHA-256 exactos de las especificaciones y HTML, tamaños y estados de validación. Los recibos con rutas locales y las capturas de QA quedan fuera del sitio publicado.

## Resultado de los diagramas

| Vista | Tipo | Validación del archivo | Evidencia de navegador | Revisión visual |
| :-- | :-- | :-- | :-- | :-- |
| Arquitectura del producto | Architecture | 9/9, 0 errores, 0 advertencias | Passed | Passed |
| Recorrido del cliente | Workflow v2 | 9/9, 0 errores, 0 advertencias | Passed | Passed |
| Pago, creación y entrega | Sequence | 9/9, 0 errores, 0 advertencias | Passed | Passed |
| SGX PASS y evolución | Architecture | 9/9, 0 errores, 0 advertencias | Passed | Passed |

`validate` y `deliver` usaron el perfil `showcase`. `visual-check` midió los HTML exactos entregados en 1440 × 900, 1600 × 1000, 1920 × 1080 y 2048 × 1320: sin desbordamiento de página en escritorio y sin fallos de composición. Capturó ambos temas en 1440 × 900 y 2048 × 1320. La revisión visual del asistente inspeccionó las cuatro vistas en claro y oscuro, además de portada y móvil.

## Interacción, enlaces y móvil

**35 comprobaciones funcionales pasadas**, incluyendo búsqueda y filtros de la portada, cambio de tema con teclado, reinicio y foco, enlaces bajo `/gta-vi-generator-showcase/`, zoom, Node Finder, selección y cierre del panel con Escape, capítulos guiados y selección de nodos en móvil.

La portada se verificó en ambos temas a 1440, 768 y 390 píxeles. Los cuatro visores se verificaron a 390 y 768 píxeles sin desbordamiento horizontal de la página. Su lienzo conserva la composición original y utiliza cámara, zoom y desplazamiento; las funciones de presentación siguen orientadas a escritorio. La lectura textual se verificó en ambos temas a 1440 y 390 píxeles.

No se detectaron errores JavaScript, solicitudes externas ni llamadas de escritura durante estas pruebas locales. No se ejercitaron pagos, generación de imágenes ni acceso a resultados de clientes.

## Accesibilidad: resultado y límite conocido

Se ejecutaron **14 revisiones axe-core** con reglas WCAG 2 A/AA y WCAG 2.1 AA:

- Portada: 6 combinaciones de tema y tamaño, sin incidencias detectadas.
- Lectura textual: 4 combinaciones de tema y tamaño, sin incidencias detectadas.
- Visores nativos: 1 incidencia `nested-interactive`, de impacto `serious`, en cada una de las cuatro vistas. El SVG del runtime declara `role="img"` y contiene controles interactivos hijos. Se mantiene el HTML canónico de Archify y se documenta este límite.

La [lectura textual equivalente](reading.html), destacada desde la portada y el README, contiene los mismos elementos, relaciones y estados, tiene `lang="es"`, funciona sin JavaScript y ofrece una alternativa lineal para lectores de pantalla. No elimina la incidencia del visor nativo ni constituye una afirmación de conformidad completa. Los controles y el atributo `lang` de los HTML Archify autónomos permanecen en inglés.

La publicación debe revisar expresamente este límite del runtime. No se han realizado pruebas con todas las combinaciones de navegador y tecnología de asistencia.

### Reauditoría de semántica SVG

La repetición con **axe-core 4.14.0** confirmó cuatro infracciones `nested-interactive` de impacto **serious**, una por cada vista: `product.html`, `journey.html`, `delivery.html` y `pass.html`. En todos los casos axe identifica `svg[role="img"]` como objetivo. Dentro de esos SVG se generan 17 controles `role="button"` para Product, 16 para Journey, 13 para Delivery y 7 para SGX PASS; corresponden a nodos, relaciones y, donde existe, leyendas.

El origen está en Archify, no en la portada: su helper `svgRootAttrs()` (versión 2.17) asigna `role="img"` y `aria-labelledby` a la raíz, mientras el runtime del mismo visor inserta controles operables `g[role="button"]` en el SVG. El árbol de accesibilidad de Edge confirmó cada raíz como `image` con botones descendientes. No se encontró una opción de esquema para cambiar ese rol. Los HTML canónicos se dejaron intactos; alterar su runtime generado a mano sería frágil y podría dañar sus interacciones.

El conflicto puede hacer que distintas tecnologías de asistencia interpreten los controles hijos como contenido gráfico o los expongan de forma inconsistente. En Edge, el recorrido con Tab mostró foco visible; en cada vista también se verificaron avance con flechas, activación con Enter y cierre con Escape. Esto no demuestra compatibilidad con todas las combinaciones de lector de pantalla. No se hizo una prueba manual con NVDA, VoiceOver o TalkBack.

Como mitigación, cada tarjeta de la portada ahora enlaza directamente a su sección de la [lectura textual equivalente](reading.html). Esa página sin JavaScript recoge nombres, relaciones, estados y las cuatro etapas agrupadas del flujo; coteja los 47 rótulos de grafo con las especificaciones, tiene `lang="es"` y pasó cuatro combinaciones axe sin incidencias. La alternativa facilita la consulta, pero no corrige el visor nativo ni permite afirmar conformidad completa con WCAG.
## Seguridad y alcance de archivos

La revisión de texto y patrones no encontró credenciales, rutas privadas, endpoints internos, registros personales ni detalles operativos excluidos en las nuevas especificaciones o HTML. Los diagramas originales de referencia y el estado de Git del proyecto privado permanecen iguales a sus huellas previas. Los documentos y capturas existentes del showcase permanecen intactos, salvo los enlaces nuevos del README.

La publicación está preparada como archivos estáticos en `docs/`; no se añadió un workflow de despliegue ni se activó Pages. La rama de trabajo se conserva y no hubo commit, push ni merge.

La validación del archivo, la evidencia automatizada de navegador y la revisión visual son afirmaciones distintas. Un resultado positivo no implica una auditoría del producto ni conformidad completa con una norma de accesibilidad.
