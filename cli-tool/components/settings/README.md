# Angular Settings

Esta carpeta contiene las configuraciones personalizadas para Claude Code en proyectos Angular.

## ¿Cómo crear una nueva configuración?

Las configuraciones son archivos JSON que modifican el comportamiento de Claude Code.

### Estructura de una configuración

```json
{
  "name": "nombre-configuracion",
  "description": "Descripción de qué hace esta configuración",
  "category": "categoría",
  "settings": {
    "propiedad1": "valor1",
    "propiedad2": "valor2"
  }
}
```

### Tipos de configuraciones

#### 1. Configuraciones de API

```json
{
  "name": "angular-api-config",
  "description": "Configuración para desarrollo de APIs con Angular",
  "category": "api",
  "settings": {
    "apiBaseUrl": "http://localhost:4200/api",
    "timeout": 30000,
    "retryAttempts": 3
  }
}
```

#### 2. Configuraciones de Statusline

Las configuraciones de statusline pueden incluir scripts Python personalizados:

```json
{
  "name": "angular-context-monitor",
  "description": "Monitor de contexto para proyectos Angular",
  "category": "statusline",
  "settings": {
    "script": ".claude/scripts/angular-context-monitor.py",
    "refreshInterval": 5000,
    "showModules": true,
    "showComponents": true
  }
}
```

Cuando crees una configuración de statusline con un script Python, el CLI automáticamente:
1. Instalará el archivo JSON en `.claude/settings/`
2. Instalará el script Python correspondiente en `.claude/scripts/`
3. Marcará el script como ejecutable

#### 3. Configuraciones de Modelo

```json
{
  "name": "angular-development-model",
  "description": "Configuración del modelo para desarrollo Angular",
  "category": "model",
  "settings": {
    "model": "claude-3-7-sonnet-20250219",
    "maxTokens": 8000,
    "temperature": 0.7
  }
}
```

#### 4. Configuraciones de Seguridad

```json
{
  "name": "angular-security-rules",
  "description": "Reglas de seguridad para proyectos Angular",
  "category": "security",
  "settings": {
    "enableXSS": true,
    "enableCSRF": true,
    "sanitizeInputs": true
  }
}
```

### Categorías disponibles

- `api/` - Configuraciones de API y servicios HTTP
- `authentication/` - Configuraciones de autenticación (OAuth, JWT, etc.)
- `environment/` - Variables de entorno y configuraciones por ambiente
- `git/` - Configuraciones de Git y control de versiones
- `global/` - Configuraciones globales de Claude Code
- `mcp/` - Configuraciones de MCP (Model Context Protocol)
- `model/` - Configuraciones del modelo de IA
- `permissions/` - Permisos y políticas de acceso
- `statusline/` - Configuraciones de la barra de estado
- `telemetry/` - Configuraciones de telemetría y analytics
- `cleanup/` - Configuraciones de limpieza y mantenimiento

### Ejemplo completo con script Python

**Archivo:** `settings/statusline/angular-context-monitor.json`

```json
{
  "name": "angular-context-monitor",
  "description": "Monitorea el contexto del proyecto Angular (módulos, componentes, servicios)",
  "category": "statusline",
  "version": "1.0.0",
  "author": "Angular Code Templates",
  "settings": {
    "script": ".claude/scripts/angular-context-monitor.py",
    "refreshInterval": 5000,
    "showModules": true,
    "showComponents": true,
    "showServices": true,
    "maxItems": 10
  }
}
```

**Archivo:** `settings/statusline/angular-context-monitor.py`

```python
#!/usr/bin/env python3
import json
import os
import glob

def get_angular_context():
    """Obtiene el contexto del proyecto Angular actual"""
    context = {
        "modules": [],
        "components": [],
        "services": []
    }

    # Buscar módulos
    for module in glob.glob('src/**/*.module.ts', recursive=True):
        context["modules"].append(os.path.basename(module))

    # Buscar componentes
    for component in glob.glob('src/**/*.component.ts', recursive=True):
        context["components"].append(os.path.basename(component))

    # Buscar servicios
    for service in glob.glob('src/**/*.service.ts', recursive=True):
        context["services"].append(os.path.basename(service))

    return context

if __name__ == "__main__":
    context = get_angular_context()
    print(json.dumps(context, indent=2))
```

## Instalación de configuraciones

Para instalar una configuración en un proyecto:

```bash
npx angular-code-templates@latest --setting statusline/angular-context-monitor
```

## Recursos

- [Documentación oficial](https://docs.aitmpl.com)
- [Ejemplos en GitHub](https://github.com/asepulvedadev/angular-code-templates)
