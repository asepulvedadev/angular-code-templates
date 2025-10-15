# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Angular Code Templates** is a specialized CLI tool for Angular development with Claude Code. It's a fork of Claude Code Templates focused specifically on Angular ecosystem workflows, providing Angular-specific agents, commands, MCPs, settings, and templates.

**Key differentiator**: While the parent project is framework-agnostic, this fork specializes in Angular development patterns, Angular CLI integration, TypeScript best practices, and RxJS workflows.

## Development Commands

### Package Management
```bash
# Root project (website/API)
npm install                    # Install all dependencies
npm run dev                    # Start Vercel dev server
npm start                      # Start Vercel dev server
npm run build                  # Build project

# CLI tool (the actual npm package)
cd cli-tool
npm install                    # Install CLI dependencies
npm start                      # Run CLI interactively
npm test                       # Run test suite
npm run test:watch             # Run tests in watch mode
npm run test:coverage          # Generate coverage report
```

### Development & Testing
```bash
# Link for local development
cd cli-tool
npm run dev:link               # Link package globally
npm run dev:unlink             # Unlink package

# Testing workflows
npm run test:unit              # Unit tests only
npm run test:integration       # Integration tests only
npm run test:e2e              # End-to-end tests
npm run test:analytics         # Analytics module tests
npm run test:all              # Comprehensive test suite
```

### CLI Tool Commands
```bash
# Interactive installation
npx angular-code-templates@latest

# Install specific Angular components
npx angular-code-templates@latest --agent angular/component-generator
npx angular-code-templates@latest --command angular/generate-module
npx angular-code-templates@latest --mcp angular/nx-integration

# Available tools
npx angular-code-templates@latest --analytics      # Analytics dashboard
npx angular-code-templates@latest --chats          # Chat monitor
npx angular-code-templates@latest --health-check   # System diagnostics
npx angular-code-templates@latest --plugins        # Plugin dashboard
```

### Component Generation
```bash
# Regenerate components catalog (after adding/modifying components)
python generate_components_json.py

# Generate agents API
python generate_agents_api.py

# Generate Claude jobs
python generate_claude_jobs.py
```

### Publishing Workflow
```bash
# Version management
npm version patch              # 1.22.0 -> 1.22.1
npm version minor              # 1.22.0 -> 1.23.0
npm version major              # 1.22.0 -> 2.0.0

# Publish to npm (from cli-tool directory)
cd cli-tool
npm publish
```

## Project Architecture

### High-Level Structure
```
angularcode/
├── cli-tool/                  # Main npm package (angular-code-templates)
│   ├── components/           # Component catalog
│   │   ├── agents/          # Angular-specialized AI agents
│   │   ├── commands/        # Custom slash commands
│   │   ├── mcps/           # External integrations (MCP servers)
│   │   ├── settings/       # Claude Code configurations
│   │   └── hooks/          # Automation triggers
│   ├── templates/           # Complete project templates
│   ├── src/                # CLI source code
│   │   ├── index.js        # Main CLI entry point
│   │   ├── analytics.js    # Analytics dashboard server
│   │   ├── analytics/      # Analytics modules (StateCalculator, etc.)
│   │   └── sdk/            # Global agent manager SDK
│   └── bin/                # Executable scripts
├── docs/                    # Static website (aitmpl.com)
├── api/                     # API endpoints (Vercel functions)
├── docu/                    # Documentation site (Docusaurus)
└── .claude/                 # Project's own Claude Code config
```

### Component System

This project manages **600+ agents, 200+ commands, and numerous MCPs/settings/hooks** for Claude Code, specialized for Angular development.

#### Component Types

**🤖 Agents** (`cli-tool/components/agents/`)
- Markdown files with YAML frontmatter defining AI specialists
- Categories: `angular/`, `development-team/`, `domain-experts/`, `business-team/`
- Angular-specific: component generators, routing specialists, state management experts
- Example: `agents/angular/component-generator.md`

**⚡ Commands** (`cli-tool/components/commands/`)
- Custom slash commands for Claude Code
- Categories: `angular/`, `git-workflow/`, `testing/`, `deployment/`, `performance/`
- Installed to `.claude/commands/` in user projects
- Example: `commands/angular/generate-component.md`

**🔌 MCPs** (`cli-tool/components/mcps/`)
- JSON configurations for external service integrations
- Categories: `database/`, `integration/`, `cloud/`, `ai-services/`
- Angular-specific: Nx integration, Angular DevKit connections
- Example: `mcps/angular/nx-integration.json`

**⚙️ Settings** (`cli-tool/components/settings/`)
- Claude Code configuration presets
- Categories: `performance/`, `ui/`, `security/`, `statusline/`
- Special: Statuslines can include Python scripts (auto-installed to `.claude/scripts/`)

**🪝 Hooks** (`cli-tool/components/hooks/`)
- Automation triggers for development events
- Categories: `git/`, `development/`, `testing/`, `notifications/`
- Example: Pre-commit validation, post-save linting

**📦 Templates** (`cli-tool/templates/`)
- Complete project configurations with CLAUDE.md + .claude/* files
- Structure: `templates/{language}/` and `templates/{language}/examples/{framework}/`
- Angular focus: Angular SPA, SSR, PWA, microfrontend templates

### Component Installation Flow

When users run `npx angular-code-templates@latest --agent angular/component-generator`:

1. **CLI Entry** (`cli-tool/bin/create-claude-config.js`) parses arguments
2. **Main Logic** (`cli-tool/src/index.js`) handles component installation
3. **File Operations** (`cli-tool/src/file-operations.js`) downloads from GitHub
4. **Installation** - Files copied to `.claude/agents/`, `.claude/commands/`, etc.
5. **Validation** - Post-installation checks ensure proper setup
6. **Tracking** - Usage tracked to Supabase for analytics

### Analytics Dashboard Architecture

The analytics system (`cli-tool/src/analytics.js`) provides real-time monitoring of Claude Code sessions:

**Backend Modules** (`cli-tool/src/analytics/`)
- `core/StateCalculator.js` - Detects conversation state (active, idle, user typing)
- `core/ProcessDetector.js` - Identifies running Claude Code processes
- `core/ConversationAnalyzer.js` - Parses conversation JSON files
- `core/FileWatcher.js` - Monitors file changes with chokidar
- `data/DataCache.js` - Multi-level caching system
- `notifications/WebSocketServer.js` - Real-time updates via WebSocket
- `utils/PerformanceMonitor.js` - System health metrics

**Frontend** (`cli-tool/src/analytics-web/`)
- Vanilla JavaScript (no framework dependencies)
- WebSocket client for real-time updates
- Chart.js for visualizations
- Mobile-responsive design

**Access**: `npm run analytics:start` → http://localhost:3333

## Angular-Specific Patterns

### Agent Specialization

Angular agents follow specific naming and organization:
- **Component Generation**: `agents/angular/component-generator.md`
- **Service Creation**: `agents/angular/service-specialist.md`
- **Routing**: `agents/angular/routing-specialist.md`
- **State Management**: `agents/angular/state-management-expert.md`
- **Testing**: `agents/angular/testing-specialist.md`

### Angular CLI Integration

Commands integrate deeply with Angular CLI:
```bash
/generate-component <name>    # Wraps ng generate component
/generate-service <name>      # Wraps ng generate service
/generate-module <name>       # Wraps ng generate module
```

### TypeScript & RxJS Focus

All Angular components emphasize:
- **Strict TypeScript**: Type safety and strict mode
- **RxJS Patterns**: Observable workflows, operators, subjects
- **Standalone Components**: Angular 14+ standalone architecture
- **Signals**: Angular 16+ signals for reactivity

## Component Development Guidelines

### Creating Angular-Specific Agents

1. **File Location**: `cli-tool/components/agents/angular/{name}.md`
2. **Structure**:
```markdown
---
name: angular-component-name
description: Use this agent when [conditions]. Specializes in Angular [domain]. Examples: <example>...</example>
color: blue
---

# Agent system prompt
You are an Angular specialist focusing on [domain]...

## Expertise
- Angular CLI
- TypeScript best practices
- RxJS patterns
- Component architecture

## Examples
[Detailed Angular-specific examples]
```

3. **Best Practices**:
   - Reference Angular version compatibility (Angular 14+)
   - Include TypeScript strict mode considerations
   - Provide RxJS operator recommendations
   - Show standalone component patterns
   - Link to Angular documentation

### Creating Angular Commands

1. **File Location**: `cli-tool/components/commands/angular/{name}.md`
2. **Structure**:
```markdown
# /command-name

Brief description of what this command does for Angular projects.

## Purpose
What this command accomplishes in Angular development workflow.

## Usage
/command-name [arguments]

## Implementation
Detailed steps including Angular CLI integration.

## Examples
Practical Angular scenarios where this command is useful.
```

### Testing Components

```bash
# Test individual component installation
cd cli-tool
npm run dev:link
angular-code-templates --agent angular/component-generator --dry-run

# Test with real installation
angular-code-templates --agent angular/component-generator

# Verify installation
ls -la ~/.claude/agents/        # For user-level agents
ls -la .claude/agents/          # For project-level agents
```

### Updating Component Catalog

After adding/modifying components:
```bash
# Regenerate docs/components.json (used by aitmpl.com)
python generate_components_json.py

# This script:
# - Scans cli-tool/components/ recursively
# - Excludes .py files from public listings
# - Embeds file content into JSON
# - Fetches download stats from Supabase
# - Generates final catalog for web interface
```

## Technology Stack

### Core Technologies
- **Node.js** 14+ (CLI runtime)
- **Python** 3.x (build scripts)
- **Vercel** (website deployment)
- **Supabase** (analytics database)

### CLI Dependencies
- **commander** - CLI argument parsing
- **inquirer** - Interactive prompts
- **chalk** - Terminal styling
- **ora** - Loading spinners
- **boxen** - Terminal boxes
- **fs-extra** - Enhanced file operations
- **open** - Cross-platform opener

### Analytics Dependencies
- **express** - Web server
- **ws** - WebSocket library
- **chokidar** - File watcher
- **uuid** - Unique identifiers

### Testing
- **Jest** - Testing framework
- **jest-watch-typeahead** - Interactive watching
- Coverage threshold: 70%+ (80%+ for core modules)

## Path Handling (CRITICAL)

### Always Use Relative Paths
```javascript
// ✅ CORRECT - Relative to project
'.claude/scripts/context-monitor.py'
'.claude/agents/angular-specialist.md'
'.claude/commands/generate-component.md'

// ❌ WRONG - Absolute paths
'/Users/username/.claude/scripts/...'
'C:\\Users\\username\\.claude\\...'
```

### Cross-Platform Compatibility
```javascript
// ✅ CORRECT - Use path.join()
const configPath = path.join('.claude', 'agents', 'angular-specialist.md');

// ❌ WRONG - Hardcoded separators
const configPath = '.claude/agents/angular-specialist.md';  // Unix only
```

### Statusline Python Scripts

Statuslines can reference Python scripts that get auto-installed:
```javascript
// Implementation in src/index.js:installIndividualSetting()
if (settingName.includes('statusline/')) {
  const pythonFileName = settingName.split('/')[1] + '.py';
  const pythonUrl = githubUrl.replace('.json', '.py');
  additionalFiles['.claude/scripts/' + pythonFileName] = {
    content: pythonContent,
    executable: true
  };
}
```

Example: `statusline/context-monitor` installs both `.json` config and `.py` script.

## Error Handling Patterns

### Async Operations
```javascript
try {
  const result = await someAsyncOperation();
  // Handle success
} catch (error) {
  console.error(chalk.red('Error:'), error.message);
  // Provide helpful user-facing message
  // Log detailed error for debugging
}
```

### Network Operations
```javascript
// Always include fallback mechanisms
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return await response.json();
} catch (error) {
  console.warn(chalk.yellow('Network error, using cache...'));
  return getCachedData();
}
```

### File Operations
```javascript
// Handle missing files gracefully
if (!fs.existsSync(filePath)) {
  console.warn(chalk.yellow(`File not found: ${filePath}`));
  return defaultValue;
}
```

## Pre-Commit Checklist

Before committing changes:
1. Run full test suite: `npm test`
2. Check TypeScript/JavaScript syntax: `node --check src/index.js`
3. Test CLI locally: `npm run dev:link && angular-code-templates`
4. Regenerate components catalog: `python generate_components_json.py`
5. Test analytics if modified: `npm run analytics:test`
6. Verify no hardcoded paths or credentials
7. Update version if needed: `npm version patch|minor|major`

## Publishing Workflow

### Pre-Publish Steps
1. All tests passing (`npm test` in cli-tool/)
2. Component catalog updated (`python generate_components_json.py`)
3. Version bumped appropriately
4. No console errors in browser (for analytics changes)
5. Git commits include all relevant files

### Publishing
```bash
cd cli-tool
npm version patch              # Update version
npm publish                    # Publish to npm
git push && git push --tags    # Push changes
```

### Post-Publish
1. Verify on npm: https://www.npmjs.com/package/angular-code-templates
2. Test installation: `npx angular-code-templates@latest`
3. Update website if needed (docs/, api/)
4. Announce in GitHub Discussions

## Security Considerations

- Never hardcode API keys or credentials in components
- Validate all user inputs before file operations
- Use relative paths (`.claude/`) instead of absolute paths
- Sanitize file paths to prevent directory traversal
- Review components for vulnerabilities before publishing
- Use environment variables for sensitive config (Supabase keys)

## Additional Resources

- **Website**: https://aitmpl.com
- **Documentation**: https://docs.aitmpl.com
- **GitHub**: https://github.com/asepulvedadev/angular-code-templates
- **npm**: https://www.npmjs.com/package/angular-code-templates
- **Parent Project**: https://github.com/anthropics/claude-code-templates

This project bridges Claude Code's AI capabilities with Angular's development ecosystem, providing specialized tools and templates that understand Angular's conventions, best practices, and modern features like standalone components and signals.
