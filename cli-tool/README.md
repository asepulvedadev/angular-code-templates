[![npm version](https://img.shields.io/npm/v/angular-code-templates.svg)](https://www.npmjs.com/package/angular-code-templates)
[![npm downloads](https://img.shields.io/npm/dt/angular-code-templates.svg)](https://www.npmjs.com/package/angular-code-templates)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/asepulvedadev/angular-code-templates/blob/main/CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/asepulvedadev/angular-code-templates.svg?style=social&label=Star)](https://github.com/asepulvedadev/angular-code-templates)

# Angular Code Templates CLI

**CLI tool specialized for Angular development with Claude Code** - Quick setup for Angular projects with 600+ specialized agents, commands, and MCPs, plus real-time monitoring dashboard.

## 🚀 Quick Start

```bash
# Interactive setup (recommended)
npx angular-code-templates@latest

# Install Angular-specific components
npx angular-code-templates@latest --agent angular/component-generator
npx angular-code-templates@latest --command angular/generate-service

# Real-time analytics dashboard
npx angular-code-templates@latest --analytics

# System health check for Angular projects
npx angular-code-templates@latest --health-check
```

## ✨ Core Features

- **🅰️ Angular Specialization** - 600+ agents, 200+ commands specifically designed for Angular development
- **📋 Smart Angular Setup** - Auto-detect Angular CLI, TypeScript, RxJS and configure with best practices
- **📊 Real-time Analytics** - Monitor Claude Code sessions with live state detection and performance metrics
- **🔍 Health Check** - Comprehensive Angular project validation with actionable recommendations
- **🧩 Individual Components** - Install specialized Angular agents (component-generator, routing-specialist, etc.)
- **🌍 Global Angular Agents** - Create AI agents for Angular workflows accessible from anywhere

## 🎯 What You Get

| Component | Description | Angular Examples |
|-----------|-------------|------------------|
| **CLAUDE.md** | Angular project-specific configuration | TypeScript strict mode, RxJS patterns, standalone components |
| **Commands** | Custom slash commands for Angular tasks | `/generate-component`, `/generate-service`, `/optimize-bundle` |
| **Agents** | AI specialists for Angular development | `angular/component-generator`, `angular/routing-specialist`, `angular/state-management-expert` |
| **MCPs** | External Angular integrations | Nx, Angular DevKit, Supabase, GitHub |
| **Analytics** | Real-time monitoring dashboard | Live Angular session tracking, usage statistics, exports |

## 🛠️ Angular Focus & Technologies

| Technology | Features | Status |
|------------|----------|---------|
| **Angular 14+** | Standalone Components, Signals (16+), Angular CLI | ✅ Primary Focus |
| **TypeScript** | Strict mode, Type inference, Advanced patterns | ✅ Full Support |
| **RxJS** | Observables, Operators, Subject patterns | ✅ Full Support |
| **State Management** | NgRx, Signals, Component Store | ✅ Full Support |
| **Testing** | Karma, Jasmine, Jest, Cypress | ✅ Full Support |
| **Nx Monorepo** | Nx workspace integration | ✅ Full Support |
| **Other Frameworks** | React, Vue, Node.js, Python (legacy support) | ⚠️ Limited Support |

## 🌍 Global Agents (Claude Code SDK Integration)

Create AI agents that can be executed from anywhere using the Claude Code SDK:

```bash
# Create a global Angular agent (one-time setup)
npx angular-code-templates@latest --create-agent angular-component-generator

# Use the agent from anywhere
angular-component-generator "Create a user profile component"
angular-routing-specialist "Setup lazy loading for admin module"
angular-performance-optimizer "Analyze and optimize bundle size"
```

### Available Global Angular Agents

| Agent | Usage | Description |
|-------|-------|-------------|
| `angular-component-generator` | `angular-component-generator "create component"` | Generate Angular components with best practices |
| `angular-service-specialist` | `angular-service-specialist "create auth service"` | Create Angular services and business logic |
| `angular-routing-specialist` | `angular-routing-specialist "setup routing"` | Configure Angular routing and navigation |
| `angular-state-management` | `angular-state-management "implement store"` | NgRx, Signals, RxJS state patterns |
| `angular-performance-optimizer` | `angular-performance-optimizer "optimize app"` | Angular performance expert |
| `angular-testing-specialist` | `angular-testing-specialist "write tests"` | Unit, integration, E2E testing for Angular |

### Global Agent Management

```bash
# List installed global agents
npx angular-code-templates@latest --list-agents

# Update an Angular agent to latest version
npx angular-code-templates@latest --update-agent angular-component-generator

# Remove an agent
npx angular-code-templates@latest --remove-agent angular-component-generator
```

### How It Works

1. **Download Agent**: Fetches the latest agent from GitHub
2. **Generate Executable**: Creates a Node.js script that calls Claude Code SDK
3. **Add to PATH**: Makes the agent available globally in your shell
4. **Ready to Use**: Execute `agent-name "your prompt"` from any directory

The agents use the Claude Code SDK internally to provide specialized AI assistance with domain-specific knowledge and best practices.

## 📖 Documentation

**[📚 Complete Documentation](https://asepulvedadev.github.io/angular-code-templates/)** - Comprehensive guides, examples, and API reference

Quick links:
- [Getting Started](https://asepulvedadev.github.io/angular-code-templates/) - Installation and first steps
- [Project Setup](https://asepulvedadev.github.io/angular-code-templates/) - Configure your projects
- [Analytics Dashboard](https://asepulvedadev.github.io/angular-code-templates/) - Real-time monitoring
- [Individual Components](https://asepulvedadev.github.io/angular-code-templates/) - Agents, Commands, MCPs
- [CLI Options](https://asepulvedadev.github.io/angular-code-templates/) - All available commands

## 🤝 Contributing

We welcome contributions! Browse available templates and components at **[asepulvedadev.github.io/angular-code-templates](https://asepulvedadev.github.io/angular-code-templates/)**, then check our [contributing guidelines](https://github.com/asepulvedadev/angular-code-templates/blob/main/CONTRIBUTING.md).

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **🌐 Browse Components**: [asepulvedadev.github.io/angular-code-templates](https://asepulvedadev.github.io/angular-code-templates/)
- **📚 Documentation**: [asepulvedadev.github.io/angular-code-templates](https://asepulvedadev.github.io/angular-code-templates/)
- **🐛 Issues**: [GitHub Issues](https://github.com/asepulvedadev/angular-code-templates/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/asepulvedadev/angular-code-templates/discussions)

---

**⭐ Found this useful? Give us a star to support the project!**
