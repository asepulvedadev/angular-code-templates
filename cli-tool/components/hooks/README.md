# Angular Hooks

Esta carpeta contiene los hooks de automatización para proyectos Angular con Claude Code.

## ¿Qué son los hooks?

Los hooks son scripts que se ejecutan automáticamente en respuesta a eventos específicos durante el desarrollo, como antes de hacer commit, después de guardar un archivo, antes de ejecutar una herramienta, etc.

## ¿Cómo crear un nuevo hook?

Los hooks son archivos JSON que definen cuándo y cómo ejecutar automatizaciones.

### Estructura de un hook

```json
{
  "name": "nombre-del-hook",
  "description": "Descripción de qué hace este hook",
  "type": "pre-tool|post-tool|pre-commit|post-save",
  "event": "evento-específico",
  "command": "comando a ejecutar",
  "enabled": true,
  "conditions": {
    "filePattern": "*.ts",
    "workingDirectory": "src/"
  }
}
```

### Tipos de hooks disponibles

#### 1. Pre-Tool Hooks (antes de ejecutar herramientas)

Ejecutan validaciones o preparaciones antes de que Claude Code use una herramienta:

```json
{
  "name": "angular-build-validator",
  "description": "Valida que el proyecto Angular compile antes de ejecutar comandos",
  "type": "pre-tool",
  "event": "before-bash",
  "command": "ng build --configuration development --dry-run",
  "enabled": true,
  "conditions": {
    "workingDirectory": "src/",
    "filePattern": "*.ts"
  }
}
```

#### 2. Post-Tool Hooks (después de ejecutar herramientas)

Ejecutan acciones después de que Claude Code use una herramienta:

```json
{
  "name": "angular-format-on-save",
  "description": "Formatea código TypeScript después de guardar",
  "type": "post-tool",
  "event": "after-write",
  "command": "prettier --write {{file_path}}",
  "enabled": true,
  "conditions": {
    "filePattern": "*.ts"
  }
}
```

#### 3. Git Hooks

Hooks relacionados con operaciones de Git:

```json
{
  "name": "angular-lint-pre-commit",
  "description": "Ejecuta ESLint antes de cada commit",
  "type": "pre-commit",
  "event": "before-commit",
  "command": "ng lint --fix",
  "enabled": true,
  "conditions": {
    "filePattern": "*.ts"
  }
}
```

#### 4. Testing Hooks

Hooks para automatizar testing:

```json
{
  "name": "angular-test-on-component-change",
  "description": "Ejecuta tests relacionados cuando cambia un componente",
  "type": "post-tool",
  "event": "after-write",
  "command": "ng test --include='**/*.spec.ts' --watch=false",
  "enabled": true,
  "conditions": {
    "filePattern": "*.component.ts"
  }
}
```

### Variables disponibles en hooks

Los hooks pueden usar las siguientes variables:

- `{{file_path}}` - Ruta del archivo actual
- `{{working_directory}}` - Directorio de trabajo
- `{{project_root}}` - Raíz del proyecto
- `{{tool_name}}` - Nombre de la herramienta ejecutada
- `{{timestamp}}` - Timestamp del evento

### Condiciones de ejecución

Los hooks pueden tener condiciones para ejecutarse solo en ciertos contextos:

```json
{
  "conditions": {
    "filePattern": "*.component.ts",           // Patrón de archivos
    "workingDirectory": "src/app/",            // Directorio específico
    "environment": "development",               // Entorno de ejecución
    "excludePatterns": ["*.spec.ts", "*.mock.ts"] // Excluir archivos
  }
}
```

### Categorías de hooks

Organiza tus hooks en subcarpetas por categoría:

- `automation/` - Automatizaciones generales
- `git/` - Hooks relacionados con Git
- `git-workflow/` - Flujo de trabajo de Git
- `testing/` - Hooks de testing automático
- `security/` - Validaciones de seguridad
- `performance/` - Optimizaciones de rendimiento
- `development-tools/` - Herramientas de desarrollo
- `pre-tool/` - Hooks pre-herramienta
- `post-tool/` - Hooks post-herramienta

### Ejemplo completo: Validación de TypeScript estricto

```json
{
  "name": "angular-strict-typescript",
  "description": "Valida que todo código TypeScript cumpla con strict mode",
  "type": "pre-commit",
  "event": "before-commit",
  "command": "tsc --noEmit --strict",
  "enabled": true,
  "conditions": {
    "filePattern": "*.ts",
    "excludePatterns": ["*.spec.ts", "*.d.ts"],
    "workingDirectory": "src/"
  },
  "errorMessage": "El código TypeScript debe cumplir con strict mode. Revisa los errores de compilación.",
  "successMessage": "✅ Validación de TypeScript estricto completada",
  "timeout": 30000
}
```

### Ejemplo: Optimización de imágenes automática

```json
{
  "name": "angular-optimize-assets",
  "description": "Optimiza automáticamente las imágenes al agregarlas a assets/",
  "type": "post-tool",
  "event": "after-write",
  "command": "npx sharp-cli --input {{file_path}} --output {{file_path}} --optimize",
  "enabled": true,
  "conditions": {
    "filePattern": "*.{png,jpg,jpeg,webp}",
    "workingDirectory": "src/assets/"
  }
}
```

### Ejemplo: Actualización automática de documentación

```json
{
  "name": "angular-update-component-docs",
  "description": "Actualiza automáticamente la documentación cuando se modifica un componente",
  "type": "post-tool",
  "event": "after-edit",
  "command": "compodoc --update-component {{file_path}}",
  "enabled": true,
  "conditions": {
    "filePattern": "*.component.ts",
    "excludePatterns": ["*.spec.ts"]
  }
}
```

## Patrones de hooks (HOOK_PATTERNS_COMPRESSED.json)

El archivo `HOOK_PATTERNS_COMPRESSED.json` contiene patrones reutilizables para crear hooks rápidamente.

## Instalación de hooks

Para instalar un hook en un proyecto:

```bash
npx angular-code-templates@latest --hook git/angular-pre-commit-lint
```

## Mejores prácticas

1. **Usa timeouts**: Siempre define un timeout para evitar que los hooks bloqueen el flujo
2. **Mensajes claros**: Proporciona mensajes de error y éxito descriptivos
3. **Condiciones específicas**: Usa condiciones para evitar ejecuciones innecesarias
4. **Testing**: Prueba tus hooks antes de habilitarlos en producción
5. **Documentación**: Documenta qué hace cada hook y por qué existe

## Recursos

- [Documentación oficial](https://docs.aitmpl.com)
- [Ejemplos en GitHub](https://github.com/asepulvedadev/angular-code-templates)
- [Hook Patterns](./HOOK_PATTERNS_COMPRESSED.json)
