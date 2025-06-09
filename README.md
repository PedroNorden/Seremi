# Presentado por
- Ignacio Ávila
- Joaquin Fuenzalida
- Pedro Nordenflycht
- Maximiliano Bustamante
# Página informativa sobre alimentación para Seremi de salud

## Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Requerimientos](#requerimientos)
3. [Diseño de prototipos](#prototipo-de-diseño)
4. [Librerías en Angular](#liberías-usadas-con-angular)

## Resumen del Proyecto

En colaboración con el Seremi de salud de Valparaiso, desarrollamos una aplicación web que permite a niños, niñas y adolescentes informarse sobre una alimentación saludable de manera didáctica y efectiva.
De esta manera, podemos ayudar al combate contra la obesidad infantil, incentivando a los jovenes a involucrarse en la elaboración de alimentos, a educarse de manera entretenida y cambiar sus hábitos alimentarios.

## Requerimientos

## Roles de sistema
- **Administrador**: Control total sobre el sistema.
- **Usuario**: Puede interactuar con el sistema y todo los servicios que tiene.
- **Visitante**: Puede acceder a información sobre guías alimentarias, mas no a los juegos.

## Requerimientos funcionales por rol

### Rol-Administrador

- **RF-ADM-01**: El administrador puede editar las imágenes mostradas en la página.
- **RF-ADM-02**: El administrador puede agregar juegos nuevos y editar los existentes.
- **RF-ADM-03**: El administrador puede editar cualquier texto existente.
- **RF-ADM-04**: El administrador puede gestionar las cuentas existentes de los usuarios.

### Rol-Usuario

- **RF-USR-01**: El usuario puede acceder a todos los documentos descargables.
- **RF-USR-02**: El usuario puede acceder a los juegos disponibles.
- **RF-USR-03**: El usuario puede guardar su progreso en los juegos.

### Rol-Visitante

- **RF-VST-01**: El visitante puede acceder a la información mostrada en página.
- **RF-VST-01**: El visitante puede descargar las guías disponibles.

## Requerimientos no funcionales

- **RNF-01: Tiempo de respuesta**
  -- El sistema debe poder cambiar entre páginas y realizar operaciones en menos de **2 segundos** en el 95% de los casos

- **RNF-02: Seguridad**
  -- El sistema requiere que los usuarios se registren antes de interactuar con los juegos u otras funcionalidades que interactuen con el servidor

## Prototipo de diseño
  [Figma - Prototipo de Gestión de Productos](https://www.figma.com/design/CyMXU4iewzxkBKHLAQkgN8/Proyecto-seremi?node-id=0-1&p=f)

## Librerías usadas con Angular

 - Capacitor
 
## Tecnologías

- **Ionic Framework**
- **Angular**
- **Capacitor**
- **Angular Router**
