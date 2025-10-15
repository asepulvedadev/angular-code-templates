# Angular Commands

Esta carpeta contiene los comandos personalizados para Angular Code Templates.

## ¿Cómo crear un nuevo comando?

Los comandos son archivos markdown (`.md`) que Claude Code puede ejecutar como slash commands.

### Estructura de un comando

```markdown
# /nombre-del-comando

Breve descripción de lo que hace este comando.

## Propósito
Explicación detallada del propósito del comando en el contexto de desarrollo Angular.

## Uso
/nombre-del-comando [argumentos]

## Implementación
Pasos detallados que Claude debe seguir para ejecutar este comando, incluyendo:
- Integración con Angular CLI
- Comandos específicos de Angular
- Validaciones y verificaciones

## Ejemplos
Escenarios prácticos donde este comando es útil en proyectos Angular.

## Notas
- Compatibilidad de versiones de Angular
- Dependencias requeridas
- Consideraciones especiales
```

### Categorías sugeridas

Organiza tus comandos en subcarpetas por categoría:

- `angular/` - Comandos específicos de Angular (generación de componentes, servicios, etc.)
- `testing/` - Comandos relacionados con testing (Jest, Jasmine, Karma)
- `git-workflow/` - Comandos de flujo de trabajo Git
- `deployment/` - Comandos de despliegue y build
- `performance/` - Comandos de optimización y análisis de rendimiento
- `utilities/` - Comandos de utilidad general

### Ejemplo completo

```markdown
# /generate-component

Genera un componente Angular standalone con su estructura completa.

## Propósito
Crear un nuevo componente Angular siguiendo las mejores prácticas de Angular 14+,
incluyendo componentes standalone, TypeScript estricto y RxJS patterns.

## Uso
/generate-component <nombre> [--path <ruta>] [--standalone] [--skipTests]

## Implementación
1. Validar que estamos en un proyecto Angular (verificar angular.json)
2. Ejecutar: ng generate component <nombre> --standalone
3. Verificar que se crearon los archivos necesarios
4. Mostrar resumen de archivos creados

## Ejemplos
- /generate-component user-profile
- /generate-component admin/dashboard --path src/app/admin
- /generate-component modal --standalone --skipTests

## Notas
- Requiere Angular CLI 14+
- Genera componentes standalone por defecto
- Incluye archivos .spec.ts a menos que se use --skipTests
```

## Instalación de comandos

Para instalar un comando en un proyecto:

```bash
npx angular-code-templates@latest --command angular/nombre-comando
```

## Recursos

- [Documentación oficial](https://docs.aitmpl.com)
- [Ejemplos en GitHub](https://github.com/asepulvedadev/angular-code-templates)
