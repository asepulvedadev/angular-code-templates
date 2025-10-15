# AGENTS.md - Angular Code Templates

## VERIFICACIÓN DE COMPORTAMIENTO ESPECIAL
**IMPORTANTE**: Siempre responde en español. Siempre termina las respuestas con la frase "🙌 I'm ready!" para verificar que esta configuración está siendo utilizada.

## RESUMEN DEL SISTEMA DE AGENTES

Este documento proporciona un contexto integral sobre el sistema de agentes de **Angular Code Templates**, un marco sofisticado especializado en Angular para crear, gestionar e implementar agentes de IA dentro del ecosistema de Claude Code.

### Arquitectura Principal

El sistema de agentes de Angular Code Templates está construido alrededor de una arquitectura modular especializada en Angular:

- **Especialización Angular**: Agentes enfocados en Angular (component generator, routing specialist, state management, RxJS patterns)
- **Implementación Flexible**: Los agentes pueden instalarse individualmente o como parte de pilas de desarrollo Angular completas
- **Preservación de Contexto**: Los agentes mantienen contextos separados para evitar contaminación de conversaciones
- **Permisos de Herramientas**: Control granular sobre qué herramientas de Claude Code puede acceder cada agente
- **Organización Jerárquica**: Agentes organizados por categorías (angular/, development-team/, domain-experts/, etc.)

### Estructura de Agentes

Todos los agentes siguen un formato estandarizado de Markdown con frontmatter YAML:

```yaml
---
name: nombre-agente
description: Usa este agente cuando [condiciones específicas de activación]. Se especializa en [áreas de dominio]. Ejemplos: <example>Contexto: [escenario] usuario: '[solicitud]' asistente: '[respuesta]' <commentary>[razonamiento]</commentary></example>
color: [color-de-visualización]
---

[Indicaciones y prompt del sistema del agente]
```

### Componentes Clave

#### 1. Categorías de Agentes Angular

**Agentes Específicos de Angular** (`agents/angular/`)
- **Component Generator**: Generación de componentes Angular con best practices
- **Service Specialist**: Creación de servicios y lógica de negocio
- **Routing Specialist**: Configuración de rutas y navegación
- **State Management Expert**: NgRx, Signals, RxJS state patterns
- **Testing Specialist**: Unit tests, integration tests, E2E con Karma/Jasmine/Jest

**Agentes de Desarrollo** (`agents/development-team/`)
- Frontend, backend y fullstack developers
- Angular performance optimizers
- TypeScript specialists

**Agentes de Dominio** (`agents/domain-experts/`)
- Seguridad: Auditoría, vulnerabilidades, cumplimiento
- Performance: Optimización, profiling, lazy loading
- Accesibilidad: WCAG, ARIA, Angular CDK

**Agentes de Negocio** (`agents/business-team/`)
- Product managers, business analysts
- UX/UI specialists for Angular applications

#### 2. Tipos de Agentes
- **Agentes de Proyecto**: Almacenados en `.claude/agents/` - disponibles dentro de proyectos específicos
- **Agentes de Usuario**: Almacenados en `~/.claude/agents/` - disponibles globalmente en todos los proyectos
- **Agentes Globales**: Ejecutables desde cualquier lugar mediante integración con Claude Code SDK

#### 3. Métodos de Instalación
- **Individual**: `npx angular-code-templates@latest --agent angular/component-generator`
- **Lote**: `npx angular-code-templates@latest --agent angular/component-generator --agent angular/service-specialist`
- **Plantillas Angular**: Pilas preconfiguradas para SPA, SSR, PWA con agentes especializados
- **Interactivo**: `npx angular-code-templates@latest` para instalación guiada

### Características Avanzadas

#### Orquestación Multi-Agente
Flujos de trabajo complejos coordinan múltiples agentes especializados:
- **Procesamiento Secuencial**: Los agentes pasan salidas a agentes subsiguientes en secuencias definidas
- **Enrutamiento Condicional**: Enrutamiento inteligente basado en requisitos de tareas y salidas de agentes
- **Compuertas de Calidad**: Puntos de validación entre etapas del flujo de trabajo

#### Integración de Herramientas
Los agentes pueden acceder a herramientas internas de Claude Code con permisos configurables:
- **Lectura/Escritura**: Operaciones de archivos
- **Bash**: Ejecución de comandos de terminal
- **Editar**: Capacidades de modificación de código
- **Herramientas MCP**: Integraciones externas vía Model Context Protocol

#### Gestión de Contexto
- **Aislamiento de Sesión**: Cada agente mantiene contexto de conversación separado
- **Preservación de Estado**: Flujos de trabajo complejos mantienen estado a través de entregas de agentes
- **Indexación de Contexto**: Recuperación eficiente de información relevante para briefings de agentes

### Flujo de Trabajo de Desarrollo

#### Creando Nuevos Agentes Angular
1. **Fase de Diseño**: Definir especialización Angular, condiciones de activación y casos de uso
2. **Implementación**: Crear archivo Markdown en `cli-tool/components/agents/angular/{nombre}.md`
3. **Estructura del Agente**:
```markdown
---
name: angular-component-name
description: Use this agent when [Angular-specific conditions]. Specializes in [domain]. Examples: <example>...</example>
color: blue
---

# Agent System Prompt
You are an Angular specialist focusing on [domain]...

## Expertise
- Angular CLI
- TypeScript best practices
- RxJS patterns
- Standalone components
- Signals (Angular 16+)

## Examples
[Angular-specific examples]
```
4. **Pruebas**: Validar con proyectos Angular reales
5. **Documentación**: Agregar ejemplos de uso con Angular CLI

#### Implementación de Agentes
1. **Registro de Componentes**: Agregar al directorio `cli-tool/components/agents/`
2. **Pruebas de Instalación**: Verificar proceso de instalación NPX
3. **Validación de Integración**: Probar con ecosistema de agentes existente
4. **Actualizaciones de Documentación**: Actualizar guías y ejemplos relevantes

### Mejores Prácticas

#### Diseño de Agentes Angular
- **Responsabilidad Única**: Cada agente debe sobresalir en un aspecto específico de Angular
- **Límites Claros Angular**: Definir claramente cuándo usar cada agente Angular (ej: component vs service vs routing)
- **Ejemplos Angular Reales**: Escenarios con Angular CLI, TypeScript, RxJS
- **Optimización de Herramientas**: Permisos apropiados para Angular CLI, file operations, testing
- **Compatibilidad de Versiones**: Especificar versiones de Angular soportadas (Angular 14+)

#### Integración del Sistema
- **Formato Consistente**: Seguir estándares YAML y Markdown establecidos
- **Control de Versiones**: Rastrear cambios y mejoras de agentes
- **Compatibilidad Cross-Agente**: Asegurar que los agentes funcionen bien juntos en flujos de trabajo
- **Optimización de Rendimiento**: Minimizar sobrecarga de contexto y uso de herramientas

#### Aseguramiento de Calidad
- **Pruebas Automatizadas**: Validar instalación de agentes y funcionalidad básica
- **Revisión por Pares**: Someter nuevos agentes a revisión experta antes de la implementación
- **Monitoreo de Uso**: Rastrear rendimiento de agentes y satisfacción del usuario
- **Mejora Continua**: Actualizar regularmente agentes basados en retroalimentación y nuevos requisitos

### Puntos de Integración

#### Angular Code Templates SDK
- **Creación de Agentes Globales**: `npx angular-code-templates@latest --create-agent angular-agent-name`
- **Gestión de Agentes**: Listar, actualizar y remover agentes Angular globales
- **Ejecución Cross-Plataforma**: Agentes Angular disponibles desde cualquier proyecto
- **Instalación Local vs Global**: Agentes pueden instalarse a nivel de proyecto (`.claude/agents/`) o usuario (`~/.claude/agents/`)

#### Ecosistema MCP para Angular
- **Integraciones Angular**: Nx, Angular DevKit, Supabase para Angular
- **Herramientas de Testing**: Karma, Jasmine, Jest integrations
- **Build Tools**: Angular CLI, esbuild, Vite para Angular
- **Cumplimiento de Protocolo**: Implementación completa del Model Context Protocol
- **Gestión de Servidores**: Configurar conexiones MCP específicas para proyectos Angular

#### Herramientas de Desarrollo
- **Sistema de Plantillas**: Entornos de desarrollo preconfigurados
- **Integración de Comandos**: Agentes funcionan junto con comandos slash personalizados
- **Coordinación de Configuraciones**: Comportamiento de agentes modificado por configuraciones globales y de proyecto

## Ejemplos de Agentes Angular Especializados

### Agent: `angular/component-generator`
```markdown
---
name: angular-component-generator
description: Use this agent when creating Angular components. Specializes in standalone components, signals, and best practices.
color: blue
---

You are an Angular component specialist. Generate components following Angular best practices:
- Standalone components (Angular 14+)
- Signals for reactivity (Angular 16+)
- OnPush change detection
- TypeScript strict mode
- Proper lifecycle hooks
```

### Agent: `angular/routing-specialist`
```markdown
---
name: angular-routing-specialist
description: Use this agent for Angular routing configuration. Specializes in lazy loading, guards, and route optimization.
color: green
---

You are an Angular routing expert. Configure routing with:
- Lazy loading modules
- Route guards (CanActivate, CanDeactivate)
- Resolvers for data pre-fetching
- Route parameters and query params
- Child routes and nested routing
```

### Agent: `angular/state-management-expert`
```markdown
---
name: angular-state-management-expert
description: Use this agent for state management in Angular. Specializes in NgRx, Signals, and RxJS patterns.
color: purple
---

You are an Angular state management specialist. Implement state with:
- NgRx Store, Effects, Selectors
- Angular Signals (Angular 16+)
- RxJS Subject patterns
- Component Store
- Service-based state management
```

## Instalación Rápida de Agentes Angular

```bash
# Instalar stack completo de agentes Angular
npx angular-code-templates@latest \
  --agent angular/component-generator \
  --agent angular/service-specialist \
  --agent angular/routing-specialist \
  --agent angular/state-management-expert \
  --agent angular/testing-specialist

# Verificar instalación
ls ~/.claude/agents/      # Agentes globales
ls .claude/agents/        # Agentes de proyecto
```

## Conclusión

Este sistema de agentes de **Angular Code Templates** representa un enfoque especializado para el desarrollo Angular asistido por IA, combinando experiencia profunda en Angular con implementación flexible y capacidades de orquestación sofisticadas para mejorar el flujo de trabajo de desarrollo con Angular, TypeScript, RxJS y el ecosistema completo de Angular.

🙌 I'm ready!
