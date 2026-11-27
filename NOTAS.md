# Notas del borrador web — CD Amivel / Amivel Reyes Gutiérrez

Estado: **Borrador local en `/workspace/cdamivel-web/`**, listo para publicar en `https://cdamivel.github.io` (repo público `Cdamivel/cdamivel.github.io`). Aún no subido a GitHub en esta pasada. El sitio, cuando se publique, lleva `noindex, nofollow` en las 9 páginas y un `robots.txt` con `Disallow: /` (sin sitemap), para que no lo encuentren los buscadores.

---

## 1. Paleta de colores

### Colores extraídos del logotipo original (`/workspace/cdamivel-web/assets/logo-original.jpg`) con Python/PIL
- Amarillo figura: `#F6C81A` (media `#F1CE45`)
- Azul figura: `#1683BB` / `#1AA4C9` (media `#308FB7`)
- Verde figura: `#136736` (media `#488744`)
- Texto gris oscuro/negro: `#000000` – `#545454`

### Paleta aplicada finalmente (cambio de criterio de Alvaro: diseño libre «web potente»)
Tras indicar Alvaro que los colores no tenían por qué ceñirse exactamente al logotipo y que quería una web deportiva potente, moderna y de alto contraste, se definió esta paleta en `css/styles.css`:
- `--sport-dark`: `#0A1410` (fondo oscuro obsidiana verdosa para Hero, cabeceras y pie)
- `--sport-dark-2`: `#11211A` (banda de estadísticas y cabeceras de tabla)
- `--sport-green`: `#128246` / `--sport-green-bright`: `#19A358` (verde cancha energético)
- `--sport-gold`: `#F5B700` (oro campeón de alto contraste sobre oscuro para titulares, bordes y CTA)
- `--sport-cyan`: `#0284C7` (acento técnico secundario)
- `--bg-page`: `#F2F5F3` y `--bg-card`: `#FFFFFF` (contraste limpio para lectura de crónicas, tablas y fichas)

---

## 2. Fuentes consultadas (URLs reales)

- **Web antigua en Wix:**
  - Portada: https://amivelbsr.wixsite.com/amivel-bsr
  - Historia: https://amivelbsr.wixsite.com/amivel-bsr/blank-1
  - Temporada 2024-25 / plantilla anterior: https://amivelbsr.wixsite.com/amivel-bsr/about-1
  - Escuela deportiva: https://amivelbsr.wixsite.com/amivel-bsr/about-3
  - Contacto: https://amivelbsr.wixsite.com/amivel-bsr/blank-3
  - Noticias (blog y renovaciones 2026-27): https://amivelbsr.wixsite.com/amivel-bsr/blog
  - Tienda anterior (camisetas 22/23 agotadas): https://amivelbsr.wixsite.com/amivel-bsr/category/all-products
- **Blog histórico del club:**
  - http://cdamivelbsr.blogspot.com/2022/10/hoy-cumplimos-43-anos.html
- **Flickr oficial (cuenta `prensaamivelbsr` / `Amivel Reyes Gutiérrez`):**
  - Fotostream: https://www.flickr.com/photos/203475003@N02/
  - Álbum J1 Amivel Reyes Gutiérrez - Menarini Joventut: https://www.flickr.com/photos/203475003@N02/albums/72177720330039982
- **X oficial del club (`@AMIVELBSR`):**
  - https://x.com/AMIVELBSR (hitos 2025-26: bronce Copa del Rey, EuroCup 3, subcampeonato SuperLiga)
- **BSR España / FEDDF y clubes oficiales:**
  - Calendario y resultados Grupo A 2026-27 (Bilbao BSR): https://www.bilbaobsr.com/calendar-2025-26-2/
  - Acta oficial Jornada 3 (Fundación Aliados 66-80 Amivel, con dorsales y cuerpo técnico): https://www.bsrvalladolid.com/partido/fundacion-aliados-amivel-reyes-gutierrez-3/
  - Acta Jornada 2 (Amivel 69-76 Amiab Albacete): https://www.bsrvalladolid.com/partido/amivel-reyes-gutierrez-bsr-amiab-albacete-3/ y https://www.amiab.com/el-bsr-amiab-sufrio-para-lograr-su-primera-victoria-ante-amivel-69-76-un-mal-tercer-cuarto-complico-el-partido-a-los-albacetenos/
  - BSR España (Premios AEEB Jorge Borba, Supercopa Cuenca, EuroCup 3): https://www.bsrespana.es/
- **Prensa local y nacional 2026:**
  - Canarias7 (J6 Amivel 88-59 Econy Gran Canaria): https://www.canarias7.es/deportes/mal-primer-cuarto-condena-econy-gran-canaria-20261122172535-nt.html
  - Badajoz Deportes (J4 Amivel 70-41 Mideba): https://badajozdeportes.com/2026/11/08/un-parcial-de-18-0-deja-sin-opciones-al-mideba-en-velez-malaga/
  - BasketAxarquía (calendario SuperLiga, fichajes Vilas/Escobar/Le Roux, Supercopa, crónicas J1/J2/J4/J6): https://basketaxarquia.blogspot.com/
  - Revista Todo (previa 2026-27 y Premio «Javier Imbroda»): https://revistatodo.com/un-amivel-para-volver-a-sonar-desde-velez-malaga/
  - Diario Sur / La Opinión de Málaga (EuroCup 3 2026 en Estambul)
  - Ayuntamiento de Vélez-Málaga (Eurocup): https://www.velezmalaga.es/index.php?id=7293&mod=noticias
- **Asociación AMIVEL / Centro Especial de Empleo y colaboradores:**
  - ACECA (CEE-0112/MA, sede C/ Rocío 6): https://aceca.es/amivel/
  - MiColchón Sofas & Beds (colaboración nov 2026): https://www.linkedin.com/company/micolchon
  - Comunicados oficiales en RRSS 2026 (Reyes Gutiérrez, Diputación de Málaga, Ayuntamiento de Vélez-Málaga, Deportes Andalucía, Fundación Unicaja, Clínicas Rincón Dental, Aqualia, Fundación ONCE): https://www.gyms1.com/ES/V%C3%A9lez-M%C3%A1laga/600129460000065/Amivel-Reyes-Gutierrez-Afici%C3%B3n

---

## 3. Lista de elementos pendientes / placeholders (`[Pendiente: ...]`)

1. **Logotipo del CD Amivel en alta resolución:** el archivo actual (`assets/logo-original.jpg`) es de 225×225 px (7,8 KB); hace falta versión vectorial (SVG) o PNG en alta resolución para cabecera y usos destacados.
2. **Dorsal oficial 2026-27 de Julio Vilas:** aparece como `[Pendiente: dorsal oficial 2026-27]` en `plantilla.html`.
3. **Fotografías individuales de los 12 jugadores y del cuerpo técnico:** marcadas en `plantilla.html` como `[Pendiente: fotografía oficial del jugador]`.
4. **Posibles integrantes adicionales del cuerpo técnico:** confirmar si hay preparador físico, fisioterapeuta o staff médico/comunicación para añadir a `plantilla.html`.
5. **Jornada 7 (12 dic 2026 vs CD Ilunion):** falta hora oficial y pabellón exacto en Madrid (`index.html` y `calendario.html`), así como el calendario de la **2.ª fase (Grupo Oro)** cuando se publique.
6. **V Supercopa de España (Cuenca, 9-10 oct 2026):** falta confirmar el marcador del partido por el 3.º y 4.º puesto del 10 de octubre (`calendario.html`).
7. **Competición europea 2026-27:** confirmar sede, grupo y fechas si el equipo disputa EuroCup esta temporada (`calendario.html`).
8. **Segunda cuenta de Flickr (`AmivelRG`):** localizar el enlace exacto de la cuenta «AmivelRG» (la encontrada y enlazada es `Amivel Reyes Gutiérrez / prensaamivelbsr`, `203475003@N02`, donde hay 1.000 fotos) y confirmar si se quieren añadir álbumes concretos de 2026-27 (`galeria.html`).
9. **Logotipos de patrocinadores y colaboradores:** incorporados el 26 nov 2026 (hora de Europe/Madrid) en `assets/patrocinadores/`, `patrocinadores.html`, el bloque de la portada y una franja en el pie de todas las páginas. Orden: Reyes Gutiérrez (patrocinador principal, destacado), Ayuntamiento de Vélez-Málaga, Diputación de Málaga / Málaga Compite, Junta de Andalucía (logotipo blanco sobre placa oscura), Clínicas Rincón Dental, Fundación Unicaja, Fundación Carmen Iglesias Ferreiro y Aqualia (último). El logotipo de la Junta tiene las letras blancas: nunca va sobre fondo claro.
10. **Tienda oficial 2026-27:** faltan productos reales, fotografías, tallas, precios y método de venta/pedido (`tienda.html`).
11. **Dirección postal principal y redes sociales adicionales:** confirmar qué dirección priorizar en `contacto.html` (Pabellón Paco Aguilar C/ Invierno s/n, C/ Loma las Encinas 42 de Wix o C/ Rocío 6 de Asociación AMIVEL) y si se añaden Instagram, Facebook o YouTube.


---

## 3.1. Patrocinadores retirados o no incluidos (26 nov 2026)

Al incorporar los logotipos enviados por Alvaro, se ajustó el listado público de la web a esa lista exacta:

- **MiColchón Sofas & Beds:** se ha retirado de `patrocinadores.html` y no aparece en la portada ni en el pie. Constaba como «colaborador de plantilla» (almohadas viscoelásticas de viaje, noviembre de 2026), pero no está en la lista de logos facilitada. La referencia se mantiene solo como fuente en el apartado 2 de estas notas.
- **Fundación ONCE / BSR España:** se ha retirado como ficha de patrocinador o colaborador del club. Siguen mencionados como organizadores de la competición (SuperLiga Fundación ONCE / BSR España) y el logotipo de BSR España permanece en el pie, en el bloque «Competición y redes», no en la franja de patrocinadores.

Se ha añadido **Fundación Carmen Iglesias Ferreiro**, que no figuraba en el borrador anterior y sí está en la lista de Alvaro.


---

## 3.2. Preparación para publicación oculta a buscadores (27 nov 2026)

- Se ha añadido `<meta name="robots" content="noindex, nofollow">` en el `<head>` de las 9 páginas y un `robots.txt` en la raíz con `User-agent: *` y `Disallow: /`. No hay sitemap.
- Se han quitado las descripciones provisionales bajo cada patrocinador en `patrocinadores.html` y en el bloque de la portada. Quedan logotipos, nombres y el destacado de Reyes Gutiérrez (etiqueta «Patrocinador principal», logo más grande y borde dorado). Se mantienen los textos de sección y el recuadro para sumarse como patrocinador.
- El 27 nov 2026 Alvaro aprobó publicar «oculta a Google y sin las descripciones provisionales». El conector `user-GitHub-xai` (cuenta makanaki1983) puede leer el repo (es público, vacío, `has_pages: false`) pero **no puede escribir**: `push_files` y `create_or_update_file` devuelven `403 Resource not accessible by integration`. GitHub de Cursor no está conectado en esta cuenta, `gh` no tiene sesión y este executor no tiene la herramienta CloudAgent. El sitio está preparado en local (incluido un workflow `.github/workflows/pages.yml` en `/tmp/cdamivel-gh` que decodifica los `.b64` y despliega con `actions/configure-pages` `enablement: true`, `upload-pages-artifact` y `deploy-pages`). Falta una vía de escritura al repo; después, si Pages no se enciende solo, hay que ir a Settings → Pages → Source: **GitHub Actions**.

---

## 4. Preguntas abiertas para Alvaro

1. ¿Tienes el escudo/logotipo del CD Amivel en SVG o PNG de alta resolución?
2. ¿Qué dorsal lleva Julio Vilas en esta temporada 2026-27 y tienes fotos de estudio o de partido de cada jugador?
3. ¿Cuál es la URL exacta de la cuenta de Flickr «AmivelRG» (o si ya está unificada en `203475003@N02`)?
4. ¿Quieres activar ya alguna referencia en la Tienda (aunque sea bajo pedido por correo/WhatsApp) o mantener «Próximamente»?
5. ¿Qué dirección postal oficial prefieres como principal en Contacto y pie de página?
6. Cuando revises este borrador y las capturas, ¿damos el visto bueno para crear/subir a `https://cdamivel.github.io`?
