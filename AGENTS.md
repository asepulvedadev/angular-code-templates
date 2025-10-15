# AGENTS.md

## VERIFICACIÓN DE COMPORTAMIENTO ESPECIAL
**IMPORTANTE**: siempre respondeme en español,Siempre termina las respuestas con la frase "🙌 I'm ready!" para verificar que esta configuración está siendo utilizada.

## RESUMEN DEL SISTEMA DE AGENTES

Este documento proporciona un contexto integral sobre el sistema de agentes de Claude Code Templates, que es un marco sofisticado para crear, gestionar e implementar agentes de IA especializados dentro del ecosistema de Claude Code.

### Arquitectura Principal

El sistema de agentes está construido alrededor de una arquitectura modular y basada en componentes que permite:

- **Experiencia Especializada**: Cada agente se enfoca en dominios específicos (rendimiento de React, auditoría de seguridad, gestión de bases de datos, etc.)
- **Implementación Flexible**: Los agentes pueden instalarse individualmente o como parte de pilas de desarrollo completas
- **Preservación de Contexto**: Los agentes mantienen contextos separados para evitar contaminación de conversaciones
- **Permisos de Herramientas**: Control granular sobre qué herramientas de Claude Code puede acceder cada agente
- **Organización Jerárquica**: Los agentes están organizados por categorías (desarrollo, seguridad, data-ai, etc.)

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

#### 1. Categorías de Agentes
- **Desarrollo**: Agentes de desarrollo frontend, backend y fullstack
- **Seguridad**: Auditoría de seguridad, evaluación de vulnerabilidades, cumplimiento
- **Datos/IA**: Aprendizaje automático, análisis de datos, especialistas en integración de IA
- **Negocios**: Marketing, gestión de proyectos, análisis de negocios
- **DevOps**: Infraestructura, implementación, especialistas en monitoreo

#### 2. Tipos de Agentes
- **Agentes de Proyecto**: Almacenados en `.claude/agents/` - disponibles dentro de proyectos específicos
- **Agentes de Usuario**: Almacenados en `~/.claude/agents/` - disponibles globalmente en todos los proyectos
- **Agentes Globales**: Ejecutables desde cualquier lugar mediante integración con Claude Code SDK

#### 3. Métodos de Instalación
- **Individual**: `npx claude-code-templates@latest --agent nombre-agente`
- **Lote**: Múltiples agentes en un solo comando
- **Plantillas**: Pilas preconfiguradas incluyendo agentes, comandos y MCPs
- **Sandbox**: Entornos aislados con integración de agentes

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

#### Creando Nuevos Agentes
1. **Fase de Diseño**: Definir límites de experiencia, condiciones de activación y casos de uso
2. **Implementación**: Crear archivo Markdown con frontmatter y prompt del sistema apropiados
3. **Pruebas**: Validar comportamiento e integración del agente
4. **Documentación**: Agregar ejemplos y guías de uso integrales

#### Implementación de Agentes
1. **Registro de Componentes**: Agregar al directorio `cli-tool/components/agents/`
2. **Pruebas de Instalación**: Verificar proceso de instalación NPX
3. **Validación de Integración**: Probar con ecosistema de agentes existente
4. **Actualizaciones de Documentación**: Actualizar guías y ejemplos relevantes

### Mejores Prácticas

#### Diseño de Agentes
- **Responsabilidad Única**: Cada agente debe sobresalir en una función primaria
- **Límites Claros**: Bien definidos cuándo y cómo usar cada agente
- **Ejemplos Integrales**: Múltiples escenarios de uso en el mundo real
- **Optimización de Herramientas**: Otorgar solo permisos necesarios para tareas del agente

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

#### Claude Code SDK
- **Creación de Agentes Globales**: `npx claude-code-templates@latest --create-agent nombre-agente`
- **Gestión de Agentes**: Listar, actualizar y remover agentes globales
- **Ejecución Cross-Plataforma**: Agentes disponibles desde cualquier entorno de terminal

#### Ecosistema MCP
- **Integración de Herramientas Externas**: Conectar a bases de datos, APIs y servicios especializados
- **Cumplimiento de Protocolo**: Implementación completa del Model Context Protocol
- **Gestión de Servidores**: Configurar y gestionar conexiones de servidores MCP

#### Herramientas de Desarrollo
- **Sistema de Plantillas**: Entornos de desarrollo preconfigurados
- **Integración de Comandos**: Agentes funcionan junto con comandos slash personalizados
- **Coordinación de Configuraciones**: Comportamiento de agentes modificado por configuraciones globales y de proyecto

Este sistema de agentes representa un enfoque integral para el desarrollo asistido por IA, combinando experiencia especializada con implementación flexible y capacidades de orquestación sofisticadas para mejorar el flujo de trabajo de desarrollo a través de múltiples dominios y tecnologías.
