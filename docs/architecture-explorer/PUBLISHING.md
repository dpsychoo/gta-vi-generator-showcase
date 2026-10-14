# Propuesta de publicación · pendiente de aprobación

El sitio está preparado en `docs/`, con `docs/index.html` como entrada y `docs/.nojekyll` para servir los archivos estáticos. Todos los enlaces locales son relativos para funcionar bajo el prefijo del repositorio.

## Configuración propuesta

| Elemento | Propuesta |
| :-- | :-- |
| Repositorio | `dpsychoo/gta-vi-generator-showcase` |
| Rama de publicación futura | `main`, después de la revisión y aprobación correspondientes |
| Carpeta | `/docs` |
| Método | GitHub Pages → Deploy from a branch |
| URL esperada | `https://dpsychoo.github.io/gta-vi-generator-showcase/` |
| Compilación | Archivos HTML/CSS/JS ya generados; no build del producto |
| Credenciales adicionales | Ninguna |

La propuesta sigue la [documentación oficial de fuentes de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). La URL esperada todavía no es un enlace publicado ni se utiliza como CTA activo en el README.

## Pasos posteriores a la aprobación

1. Revisar los cuatro diagramas, la matriz de divulgación y los resultados de validación.
2. Autorizar por separado la integración y publicación de los cambios revisados.
3. Una vez disponibles los archivos en la rama elegida, seleccionar en Settings → Pages la fuente **Deploy from a branch**, rama `main`, carpeta `/docs`.
4. Guardar la configuración, comprobar el sitio publicado y sustituir el enlace de revisión local del README por su URL confirmada.

No se ha realizado ningún paso de activación. No se añadieron workflows de despliegue, dominios personalizados, PATs, secretos, permisos de Actions ni llamadas a la API de Pages. La rama de trabajo se conserva.

## Revisión local

Abrir `docs/index.html` en un navegador. La portada y las cuatro vistas pueden usarse desde archivos locales; no necesitan un servidor de producción, acceso a repositorios privados ni servicios externos.

Para reproducir el prefijo de Pages, servir solamente `docs/` bajo `/gta-vi-generator-showcase/` con un servidor de desarrollo de solo lectura en loopback. No se debe servir el directorio del proyecto privado ni contenido de `.local-assets/`.

## Actualizaciones

Las fuentes de datos públicas pueden cambiar. Revisar las etiquetas de estado antes de regenerar especificaciones y repetir `validate`, `deliver`, evidencia de navegador y revisión visual con Archify. Los reportes locales, capturas de QA, dependencias de desarrollo y referencias internas quedan fuera de `docs/`.
