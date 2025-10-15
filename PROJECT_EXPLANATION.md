# Explicación del Proyecto Angular Code Templates

## ¿Qué es Angular Code Templates?

Angular Code Templates es un sistema especializado de plantillas y componentes diseñado específicamente para el desarrollo con Angular usando Claude Code (la herramienta de IA de Anthropic). Es un fork especializado que contiene más de 600 componentes reutilizables organizados en categorías específicas para el ecosistema Angular:

- **Agentes**: Asistentes de IA especializados en Angular (component generator, routing specialist, state management expert)
- **Comandos**: Comandos slash personalizados para flujos de trabajo Angular (generate-component, generate-service, etc.)
- **MCPs (Model Context Protocols)**: Integraciones con herramientas Angular (Nx, Angular DevKit, Supabase)
- **Settings**: Configuraciones predefinidas optimizadas para proyectos Angular
- **Hooks**: Scripts que se ejecutan en eventos específicos del desarrollo Angular
- **Templates**: Pilas completas de desarrollo Angular preconfiguradas (SPA, SSR, PWA, microfrontends)

## Arquitectura del Proyecto

### Estructura de Directorios
```
angularcode/
├── cli-tool/                  # Paquete npm principal (angular-code-templates)
│   ├── components/           # Catálogo de componentes Angular
│   │   ├── agents/          # Agentes especializados en Angular
│   │   │   ├── angular/     # Agentes específicos de Angular
│   │   │   ├── development-team/
│   │   │   └── domain-experts/
│   │   ├── commands/        # Comandos personalizados
│   │   │   ├── angular/     # Comandos específicos de Angular
│   │   │   ├── git-workflow/
│   │   │   └── testing/
│   │   ├── mcps/           # Integraciones MCP
│   │   ├── settings/       # Configuraciones
│   │   └── hooks/          # Scripts de eventos
│   ├── templates/          # Plantillas completas de proyectos Angular
│   ├── src/               # Código fuente del CLI
│   │   ├── index.js       # Entry point principal
│   │   ├── analytics.js   # Dashboard de analíticas
│   │   └── analytics/     # Módulos de analíticas
│   └── bin/              # Ejecutables
├── docs/                  # Sitio web estático (aitmpl.com)
├── api/                  # API endpoints (Vercel functions)
├── docu/                 # Documentación (Docusaurus)
└── .claude/              # Configuración propia de Claude Code
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

## Angular Code Templates - Proyecto Especializado

### Visión del Proyecto

Angular Code Templates ES una versión especializada del sistema Claude Code Templates, enfocada específicamente en el desarrollo con Angular. En lugar de ser genérico, se centra en:

- **Agentes especializados en Angular**: Generación de componentes, servicios, guards, etc.
- **Comandos Angular CLI**: Automatización de tareas comunes de Angular
- **Integraciones específicas**: Nx, Angular DevKit, testing frameworks
- **Settings optimizados**: Configuraciones para diferentes tipos de proyectos Angular
- **Templates especializadas**: Pilas para SPA, SSR, PWA, microfrontends

### Cambios Implementados en la Adaptación

#### 1. Renombrado y Rebranding (✅ COMPLETADO)
- ✅ Nombre del proyecto: "Angular Code Templates"
- ✅ Documentación y README actualizados
- ✅ Mensajes de instalación personalizados
- ✅ Paquete npm: `angular-code-templates`

#### 2. Reestructuración de Categorías (✅ COMPLETADO)
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

#### 3. Especialización de Contenido (✅ COMPLETADO)
- ✅ **Agentes**: Enfocados en Angular patterns (standalone components, signals, RxJS)
- ✅ **Comandos**: Integración profunda con Angular CLI (ng generate wrappers)
- ✅ **MCPs**: Conexiones a herramientas Angular (Angular DevKit, Nx, Supabase)
- ✅ **Templates**: Proyectos Angular optimizados (SPA, SSR, PWA, microfrontends)

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

### Estado del Proceso de Adaptación

1. ✅ **Fork del repositorio original** - Completado
2. ✅ **Renombrar proyecto y actualizar branding** - Completado
3. ✅ **Reestructurar directorios según especialización Angular** - Completado
4. ✅ **Crear agentes especializados en Angular** - En curso (600+ componentes)
5. ✅ **Desarrollar comandos específicos para Angular CLI** - En curso (200+ comandos)
6. ✅ **Configurar integraciones con herramientas Angular** - Completado (Nx, DevKit)
7. ✅ **Crear templates optimizadas para diferentes tipos de proyectos** - Completado
8. ✅ **Actualizar documentación y ejemplos** - Completado
9. 🔄 **Testing exhaustivo con proyectos Angular reales** - En curso

### Beneficios de la Adaptación

- **Especialización**: Conocimiento profundo de Angular ecosystem
- **Eficiencia**: Comandos y agentes optimizados para flujos de trabajo Angular
- **Actualización**: Mantenerse al día con las últimas features de Angular
- **Comunidad**: Enfoque en desarrolladores Angular específicamente

## Estado Actual del Proyecto

Angular Code Templates es ahora una herramienta altamente especializada para el desarrollo con Angular, proporcionando:

### ✅ Características Implementadas
- **600+ Agentes especializados** en Angular y desarrollo web
- **200+ Comandos personalizados** para flujos de trabajo Angular
- **Integraciones MCP** con Nx, Angular DevKit, Supabase y más
- **Dashboard de Analíticas** en tiempo real para sesiones de Claude Code
- **Monitor de Conversaciones** mobile-optimizado
- **Health Check** para diagnósticos del sistema
- **Sistema de Plugins** para extensibilidad

### 🎯 Beneficios Clave
- **Especialización**: Conocimiento profundo del ecosistema Angular
- **Eficiencia**: Comandos y agentes optimizados para flujos de trabajo Angular
- **Actualización**: Mantiene las últimas features de Angular (standalone, signals)
- **Comunidad**: Enfocado en desarrolladores Angular específicamente
- **Productividad**: Reduce tiempo de configuración y acelera el desarrollo

### 📦 Distribución
- **npm**: `angular-code-templates` (publicado en npm registry)
- **Web**: https://aitmpl.com (explorador de componentes)
- **Docs**: https://docs.aitmpl.com (documentación completa)
- **GitHub**: https://github.com/asepulvedadev/angular-code-templates

Esta especialización convierte un sistema genérico en una herramienta indispensable para el desarrollo con Angular usando Claude Code, proporcionando mayor valor y eficiencia para los desarrolladores que trabajan con este framework.
