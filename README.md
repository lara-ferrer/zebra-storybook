# Componente Card de Zebra Ventures

Este proyecto contiene el componente `Card` implementado en React con TypeScript, documentado con Storybook y compatible con temas claro y oscuro.

## Estructura del Proyecto

- `src/components/Card.tsx`: El componente React `Card`.
- `src/components/Card.module.css`: Estilos CSS modularizados para el componente `Card`.
- `src/styles/tokens.css`: Definición de los tokens de diseño (colores, espaciado, tipografía, etc.) para los temas claro y oscuro.
- `src/components/Card.stories.tsx`: Historias de Storybook para el componente `Card`, mostrando sus diferentes estados y temas.

## Cómo Levantar el Proyecto

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

1.  **Clonar el repositorio** (si aplica):

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd zebra-card-component
    ```

2.  **Instalar dependencias**:

    Navega a la raíz del proyecto (`zebra-card-component/`) e instala las dependencias usando npm:

    ```bash
    npm install
    ```

3.  **Ejecutar el proyecto en modo desarrollo**:

    Puedes iniciar la aplicación React en modo desarrollo con:

    ```bash
    npm run dev
    ```

    Esto generalmente inicia el servidor en `http://localhost:5173` (o un puerto similar).

## Storybook

Storybook se ha configurado para documentar y probar el componente `Card` de forma aislada.

### Iniciar Storybook

Para iniciar la interfaz de usuario de Storybook, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm run storybook
```

Una vez iniciado, Storybook estará disponible en `http://localhost:6006` (o un puerto similar). Podrás ver las historias del componente `Card` y jugar con sus propiedades (args) para ver cómo se comporta en diferentes escenarios y temas.

### Visualización de Tokens

Dentro de Storybook, en la sección de documentación de cada historia del componente `Card`, podrás observar cómo se aplican los tokens de diseño (colores, espaciado, tipografía) definidos en `src/styles/tokens.css` para los temas claro y oscuro.
