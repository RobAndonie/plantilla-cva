# Plantilla CVA

## Descripción

La **Plantilla CVA** es un proyecto diseñado para facilitar la creación y gestión de cursos en línea a través del **Centro Virtual de Aprendizaje** (CVA). Esta plantilla proporciona una estructura básica y componentes reutilizables que permiten a los desarrolladores y educadores crear contenido educativo de manera eficiente y estandarizada.

## Estructura del Proyecto

El proyecto está organizado en varios directorios y archivos clave:

- **components/**: Contiene los componentes reutilizables como la barra de navegación, la barra lateral y el pie de página.
- **css/**: Contiene los archivos de estilos CSS utilizados en el proyecto.
- **images/**: Contiene las imágenes utilizadas en el proyecto.
- **modulos/**: Contiene los módulos y lecciones del curso.
- **index.html**: La página principal del proyecto.
- **README.md**: Este archivo de documentación.

## Componentes

### Navbar

El componente `navbar.js` proporciona una barra de navegación que incluye enlaces a las secciones principales del curso y una barra de búsqueda con autocompletado.

### Sidebar

El componente `sidebar.js` proporciona una barra lateral con enlaces a las lecciones del curso.

### Footer

El componente `footer.js` proporciona un pie de página con información de contacto y enlaces adicionales.

## Estilos

Los estilos CSS están organizados en varios archivos para facilitar su gestión:

- **styles.css**: Estilos generales del proyecto.
- **navbar.css**: Estilos específicos para la barra de navegación.
- **curso.css**: Estilos específicos para el contenido del curso.
- **sidebar.css**: Estilos específicos para la barra lateral.
- **footer.css**: Estilos específicos para el pie de página.

## Uso

Para utilizar esta plantilla, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador para ver la página principal.
3. Personaliza los componentes y estilos según tus necesidades.
4. Agrega el contenido de tu curso en los archivos HTML dentro del directorio `modulos`.

## Ejemplo de Código

### HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plantilla CVA</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/curso.css">
    <link rel="stylesheet" href="css/sidebar.css">
    <link rel="stylesheet" href="css/footer.css">
    <script src="components/navbar.js" defer></script>
    <script src="components/sidebar.js" defer></script>
    <script src="components/footer.js" defer></script>
</head>
<body>
    <nav-bar></nav-bar>
    <div class="container">
        <side-bar></side-bar>
        <main class="content">
            <!-- Contenido del curso -->
        </main>
    </div>
    <footer-comp></footer-comp>
</body>
</html>
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube los cambios a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.