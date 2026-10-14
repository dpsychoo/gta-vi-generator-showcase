# SGX VI · Architecture Explorer

[Abrir la página principal](../index.html).

Explorador estático de arquitectura y procesos públicos, con cuatro vistas Archify nuevas. Puede abrirse localmente desde `docs/index.html`; los diagramas son HTML autónomos con SVG, fuente y runtime incluidos. No requiere conexión con el backend del producto.

## Vistas

| Vista | Tipo | Estado y alcance |
| :-- | :-- | :-- |
| [Arquitectura del producto](views/product.html) | Architecture | Implementado según documentación pública; responsabilidades de componentes y proveedores. |
| [Recorrido del cliente](views/journey.html) | Workflow v2 | Implementado según interfaz y términos; recorrido comercial abstracto. |
| [Pago, creación y entrega](views/delivery.html) | Sequence | Interacciones conceptuales publicadas, no contratos de integración. |
| [SGX PASS y evolución](views/pass.html) | Architecture | Identidad actual implementada; eventos futuros planificados y condicionados por bases propias. |

Las especificaciones revisadas están en `specs/`. La página principal ofrece búsqueda local, filtros por estado y cambio de tema. Cada visor conserva búsqueda de nodos, zoom, desplazamiento, selección, vistas guiadas y exportación del diagrama público.

## Idioma y accesibilidad

El contenido del producto y la portada están en español. Archify no ofrece interfaz española: sus controles fijos y el atributo `lang` de sus HTML autónomos permanecen en inglés. Esta limitación está indicada en la página principal; el renderer no se modificó para simular una traducción.

La portada tiene navegación semántica, enlace para saltar al contenido, nombres accesibles, estados de filtro, anuncios de resultados y foco visible. Los documentos tienen una estructura SVG completa aun con movimiento reducido. En móvil se conserva un lienzo amplio y se utiliza el zoom y desplazamiento del visor; no todas las funciones de presentación son superficies móviles.

La [lectura textual equivalente](reading.html) ofrece los mismos elementos, relaciones y estados, sin JavaScript y con adaptación completa al ancho. Es la alternativa recomendada para lectores de pantalla y para una lectura lineal en pantallas estrechas. La limitación semántica del SVG interactivo del runtime se detalla en [VALIDATION.md](VALIDATION.md); no se afirma conformidad completa con WCAG.

## Revisión y publicación

- [Informe de seguridad y matriz de divulgación](SECURITY_REVIEW.md)
- [Propuesta de publicación estática, pendiente de aprobación](PUBLISHING.md)
- [Validación, hashes y límites de la revisión](VALIDATION.md)

La licencia [Archify MIT](licenses/ARCHIFY-MIT.txt) y sus [avisos de terceros](licenses/THIRD_PARTY_NOTICES.md) acompañan al runtime. Estos términos pertenecen al visor de terceros y no cambian el alcance de `NOTICE.md` ni conceden una licencia nueva sobre SGX VI o su implementación privada.
