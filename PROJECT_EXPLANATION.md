# Explicación del Proyecto Claude Code Templates y Adaptación a Angular Code Templates

## ¿Qué es Claude Code Templates?

Claude Code Templates es un sistema de plantillas y componentes diseñado para potenciar el flujo de trabajo de desarrollo con Claude Code (la herramienta de IA de Anthropic). Es un repositorio que contiene más de 500 componentes reutilizables organizados en categorías específicas:

- **Agentes**: Asistentes de IA especializados en dominios específicos
- **Comandos**: Comandos slash personalizados para automatizar tareas
- **MCPs (Model Context Protocols)**: Integraciones con herramientas externas
- **Settings**: Configuraciones predefinidas para diferentes escenarios
- **Hooks**: Scripts que se ejecutan en eventos específicos
- **Templates**: Pilas completas de desarrollo preconfiguradas

## Arquitectura del Proyecto

### Estructura de Directorios
```
cli-tool/
├── components/           # Componentes principales
│   ├── agents/          # Agentes especializados
│   ├── commands/        # Comandos personalizados
│   ├── mcps/           # Integraciones MCP
│   ├── settings/       # Configuraciones
│   └── hooks/          # Scripts de eventos
├── templates/          # Plantillas completas
├── src/               # Código fuente del CLI
└── bin/              # Ejecutables

docs/                  # Documentación web
api/                  # API endpoints
```

### Componentes Principales

#### 1. Agentes
- **Ubicación**: `cli-tool/components/agents/{categoria}/{nombre}.md`
- **Formato**: Markdown con frontmatter YAML
- **Ejemplo**:
```yaml
---
name: react-performance-optimization
description: Usa este agente cuando [condiciones]. Se especializa en [áreas]. Ejemplos: <example>...
color: red
---

[Prompt del sistema del agente]
```

#### 2. Comandos
- **Ubicación**: `cli-tool/components/commands/{categoria}/{nombre}.md`
- **Formato**: Markdown con instrucciones de implementación
- **Función**: Comandos slash que se pueden ejecutar en Claude Code

#### 3. MCPs (Model Context Protocols)
- **Ubicación**: `cli-tool/components/mcps/{categoria}/{nombre}.json`
- **Función**: Integraciones con herramientas externas (bases de datos, APIs, etc.)

#### 4. Settings
- **Ubicación**: `cli-tool/components/settings/{categoria}/{nombre}.json`
- **Función**: Configuraciones predefinidas para diferentes escenarios

#### 5. Hooks
- **Ubicación**: `cli-tool/components/hooks/{categoria}/{nombre}.md`
- **Función**: Scripts que se ejecutan en eventos específicos

## Cómo Crear Componentes

### Creando un Agente

1. **Crear el archivo**:
```bash
mkdir -p cli-tool/components/agents/angular
touch cli-tool/components/agents/angular/angular-component-generator.md
```

2. **Estructura del archivo**:
```yaml
---
name: angular-component-generator
description: Usa este agente cuando necesites generar componentes Angular. Se especializa en Angular CLI, TypeScript y mejores prácticas. Ejemplos: <example>Contexto: Usuario necesita crear un componente Angular usuario: 'Crea un componente de login' asistente: 'Usaré el agente angular-component-generator para crear el componente' <commentary>Especialista en generación de componentes Angular</commentary></example>
color: blue
---

Eres un especialista en desarrollo Angular. Tu función es ayudar a crear componentes, servicios y módulos siguiendo las mejores prácticas de Angular...

Instrucciones específicas para el agente...
```

3. **Instalación**: `npx claude-code-templates@latest --agent angular-component-generator`

### Creando un Comando

1. **Crear el archivo**:
```bash
mkdir -p cli-tool/components/commands/angular
touch cli-tool/components/commands/angular/generate-component.md
```

2. **Contenido**: Instrucciones detalladas para implementar el comando

### Creando MCPs

1. **Crear archivo JSON** con configuración del servidor MCP
2. **Definir herramientas disponibles**
3. **Configurar endpoints y autenticación**

## Adaptación a Angular Code Templates

### Visión del Proyecto Adaptado

Angular Code Templates sería una versión especializada del sistema Claude Code Templates, enfocada específicamente en el desarrollo con Angular. En lugar de ser genérico, se centraría en:

- **Agentes especializados en Angular**: Generación de componentes, servicios, guards, etc.
- **Comandos Angular CLI**: Automatización de tareas comunes de Angular
- **Integraciones específicas**: Nx, Angular DevKit, testing frameworks
- **Settings optimizados**: Configuraciones para diferentes tipos de proyectos Angular
- **Templates especializadas**: Pilas para SPA, SSR, PWA, microfrontends

### Cambios Esenciales para Adaptar

#### 1. Renombrado y Rebranding
- Cambiar nombre del proyecto a "Angular Code Templates"
- Actualizar documentación y README
- Modificar mensajes de instalación y comandos

#### 2. Reestructuración de Categorías
```
components/
├── agents/
│   ├── components/     # Generadores de componentes
│   ├── services/       # Lógica de negocio
│   ├── routing/        # Configuración de rutas
│   ├── state/          # Gestión de estado
│   └── testing/        # Testing utilities
├── commands/
│   ├── generate/       # ng generate wrappers
│   ├── build/          # Build optimizations
│   └── deploy/         # Deployment helpers
└── ...
```

#### 3. Especialización de Contenido
- **Agentes**: Enfocados en Angular patterns (standalone components, signals, etc.)
- **Comandos**: Integración profunda con Angular CLI
- **MCPs**: Conexiones a Angular-specific tools (Angular DevKit, Nx, etc.)
- **Templates**: Proyectos Angular optimizados (SSR, PWA, etc.)

#### 4. Configuraciones Específicas
- **Angular version targeting**: Soporte para Angular 14+
- **TypeScript strict mode**: Configuraciones optimizadas
- **Build tools**: Integration con Vite, Webpack, esbuild

### Configuraciones Obligatorias

#### Variables de Entorno
```bash
# .env
ANGULAR_VERSION=17
TYPESCRIPT_VERSION=5.2
NODE_VERSION=18
NPM_REGISTRY=https://registry.npmjs.org
```

#### Configuración del Proyecto
```json
// angular-code-templates.json
{
  "name": "angular-code-templates",
  "version": "1.0.0",
  "angular": {
    "minVersion": "14.0.0",
    "maxVersion": "18.0.0",
    "defaultVersion": "17.0.0"
  },
  "typescript": {
    "strict": true,
    "target": "ES2022"
  }
}
```

#### Dependencias Obligatorias
```json
// package.json
{
  "dependencies": {
    "@angular/cli": "^17.0.0",
    "@angular/core": "^17.0.0",
    "typescript": "^5.2.0",
    "rxjs": "^7.8.0",
    "zone.js": "^0.14.0"
  }
}
```

### Proceso de Adaptación Paso a Paso

1. **Fork del repositorio original**
2. **Renombrar proyecto y actualizar branding**
3. **Reestructurar directorios según especialización Angular**
4. **Crear agentes especializados en Angular**
5. **Desarrollar comandos específicos para Angular CLI**
6. **Configurar integraciones con herramientas Angular**
7. **Crear templates optimizadas para diferentes tipos de proyectos**
8. **Actualizar documentación y ejemplos**
9. **Testing exhaustivo con proyectos Angular reales**

### Beneficios de la Adaptación

- **Especialización**: Conocimiento profundo de Angular ecosystem
- **Eficiencia**: Comandos y agentes optimizados para flujos de trabajo Angular
- **Actualización**: Mantenerse al día con las últimas features de Angular
- **Comunidad**: Enfoque en desarrolladores Angular específicamente

Esta adaptación convertiría un sistema genérico en una herramienta altamente especializada para el desarrollo con Angular, proporcionando mayor valor y eficiencia para los desarrolladores que trabajan con este framework.
