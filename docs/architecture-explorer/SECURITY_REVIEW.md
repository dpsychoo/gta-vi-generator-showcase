# Revisión de seguridad · divulgación pública

## Alcance

Los diagramas operativos originales se consultaron únicamente como referencia de lectura. Se escribieron especificaciones nuevas, con IDs, composición y textos públicos propios. No se copiaron diagramas completos, código de producción, historial de Git, registros ni documentos internos al sitio estático.

La decisión de publicar un elemento depende de evidencia pública y de su nivel de abstracción; su presencia en un diagrama interno no concede permiso para divulgarlo.

## Matriz de divulgación

| Área | Versión pública permitida | Detalles excluidos |
| :-- | :-- | :-- |
| Frontend | Astro, React y TypeScript registrados en la documentación del showcase; interfaz del producto | Módulos privados, rutas internas, configuración de ejecución |
| Aplicación | Responsabilidad de coordinar el servicio comercial; Vercel como proveedor publicado | Funciones internas, topología, entornos y administración |
| Datos y archivos | Supabase como proveedor publicado | Esquemas, tablas, campos, relaciones internas, buckets e identificadores |
| Pago | Mercado Pago, checkout y confirmación como condición comercial | Callbacks, firmas, credenciales, verificaciones de identidad, lógica antifraude y condiciones técnicas de aceptación |
| Imágenes | OpenAI como proveedor publicado de generación | Prompts, modelos concretos, parámetros, orquestación y estrategias operativas |
| Entrega | Página de resultado y enlace por correo; Resend como proveedor | Formatos de acceso, URLs con identificadores, contratos internos y registros de comunicación |
| SGX PASS | Identidad persistente y uso descrito en los términos públicos | Modelos internos de identidad, asociaciones de datos y mecanismos administrativos |
| Evolución | Eventos futuros sujetos a sus propias bases | Roadmap interno, componentes no operativos, políticas de elegibilidad y promesas sin respaldo público |

## Fuentes públicas

- Documentación existente del showcase: `PROJECT_OVERVIEW.md` y README del caso de estudio.
- [Aplicación pública](https://create.sgodx.com/): interfaz previa al pago.
- [Política de privacidad](https://create.sgodx.com/privacidad): roles generales de proveedores.
- [Términos del servicio](https://create.sgodx.com/terminos): flujo comercial, persistencia de SGX PASS y condiciones de posibles eventos futuros.

Las vistas muestran información de producto, no evidencia de rendimiento, auditoría de seguridad ni trazas de ejecución.

## Estados

- **Implementado · documentado:** comportamiento o proveedor respaldado por las fuentes públicas.
- **Planificado · condicionado:** posibilidad futura expresamente sujeta a condiciones; se marca con texto propio y relaciones discontinuas. No se afirma que exista un sistema operativo de eventos.
- **Hipotético:** etiqueta reservada para propuestas ilustrativas. No se publican vistas de este tipo en la entrega actual.

## Comportamiento del explorador

La portada usa HTML, CSS y JavaScript locales. La búsqueda opera sobre las tarjetas ya presentes en el documento. No contiene formularios de negocio, solicitudes al backend del producto, analítica ni seguimiento de usuarios. Su única preferencia persistida es el tema visual, cuando el navegador permite almacenamiento local.

Los visores Archify funcionan con SVG y runtime autónomos. La selección, navegación y exportación contienen únicamente la especificación pública. Los enlaces explícitos a políticas, repositorio y aplicación permiten al visitante salir del explorador por elección propia. El alojamiento futuro de GitHub Pages tiene sus propias prácticas de registro, descritas por [GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## Dependencias y superficie estática

La portada usa CSS y JavaScript propios servidos desde `docs/architecture-explorer/`. Cada vista Archify es autónoma e incluye su SVG, runtime y recursos tipográficos con las licencias correspondientes; no importa scripts, hojas de estilo, fuentes, imágenes ni frames remotos. No hay llamadas `fetch`, WebSocket, telemetría o solicitudes al producto.

La verificación local resolvió **57 referencias relativas** sin rutas ausentes y probó la portada bajo el prefijo de repositorio `/gta-vi-generator-showcase/`. Las ejecuciones de navegador registraron cero solicitudes externas y cero solicitudes de escritura. Los únicos destinos de navegación del HTML son páginas públicas del producto y del repositorio; los enlaces documentales a GitHub Docs son explícitos y solo se abren por acción del visitante.

`docs/index.html` es la entrada prevista y `docs/.nojekyll` está preparado para publicar `main` desde `/docs`. Los scripts de prueba, capturas de diagnóstico y datos temporales viven en `.local-assets/`, están ignorados y no forman parte de la carpeta publicada.
El CTA del README se sirve desde `assets/cta-badge.svg` como recurso local y con nombre accesible; se eliminó la dependencia de imagen remota de Shields.io. Los enlaces externos restantes llevan por acción del visitante al producto, a GitHub o a la guía oficial de Pages; no se cargan automáticamente.
## Controles de revisión

Antes de la entrega se revisan tanto las especificaciones como los HTML finales: patrones de credenciales, rutas internas, URLs de servicios privados, identificadores de registros, datos personales, nombres de archivos de origen y mecanismos operativos excluidos. Se verifican las huellas de los archivos de referencia para detectar modificaciones accidentales. Los resultados y límites están en [VALIDATION.md](VALIDATION.md).

Esta revisión editorial y técnica del material publicable no sustituye una auditoría independiente del servicio. La publicación queda pendiente de aprobación.

## Resultado de la revisión local

No se detectaron marcadores de credenciales, rutas privadas, endpoints internos, registros personales ni mecanismos operativos excluidos en las especificaciones y HTML públicos. Los archivos originales de referencia y el estado de Git del proyecto privado conservan sus huellas previas. El nuevo material se limita al showcase.

La portada y la lectura textual equivalente no presentaron incidencias en las reglas de accesibilidad automatizadas ejecutadas. Los cuatro visores canónicos comparten una incidencia semántica de SVG interactivo del runtime; está descrita con su impacto y la alternativa de lectura en [VALIDATION.md](VALIDATION.md). Este hallazgo no se oculta ni se presenta como corregido.
