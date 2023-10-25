## SASS Patrón 7-1
#### Estructura de directorios:

``` txt
scss/                           # Carpeta de estilos en SASS
    │
    ├── abstracts               # Estilos que se implementan en los módulos
    │   ├── _functions.scss
    │   ├── _helpers.scss
    │   ├── _mixins.scss
    │   └── _variables.scss
    ├── bases                   # Estilos básicos que implementan todas las páginas
    │   ├── _reset.scss
    │   └── _typography.scss
    ├── components              # Estilos de componentes
    │   ├── _alerts.scss
    │   ├── _buttons.scss
    │   ├── _modals.scss
    │   ...
    ├── layout                  # Estilos de bloques
    │   ├── _navbar.scss
    │   ├── _forms.scss
    │   ├── _footer.scss
    │   ├── _grid.scss
    │   ├── _header.scss
    │   ├── _main.scss
    │   ├── _sidebar.scss
    │   ...
    ├── pages                   # Estilos propios de cada página
    │   ├── _about.scss
    │   ├── _contact.scss
    │   ├── _gallery.scss
    │   ├── _home.scss
    │   ...
    ├── themes                  # Estilos de temas
    │   ├── _dark.scss
    │   ├── _light.scss
    │   ...
    └── main.scss               # Archivo integrador de módulos SASS
```