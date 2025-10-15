const fs = require('fs');
const path = require('path');
const https = require('https');

// Simple script to regenerate components.json from the Python script logic
// This is a Node.js version to avoid Python dependency issues

function scanDirectoryRecursively(directoryPath, relativeToPath = null) {
    const filesList = [];

    if (!fs.existsSync(directoryPath)) {
        return filesList;
    }

    function scan(dir) {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                scan(fullPath);
            } else if (stat.isFile()) {
                if (relativeToPath) {
                    const relativePath = path.relative(relativeToPath, fullPath);
                    filesList.push(relativePath.replace(/\\/g, '/'));
                } else {
                    filesList.push(item);
                }
            }
        }
    }

    scan(directoryPath);
    return filesList;
}

function generateComponentsJson() {
    const componentsBasePath = 'cli-tool/components';
    const templatesBasePath = 'cli-tool/templates';
    const outputPath = 'docs/components.json';
    const componentsData = {
        agents: [],
        commands: [],
        mcps: [],
        settings: [],
        hooks: [],
        sandbox: [],
        templates: [],
        plugins: []
    };

    const componentTypes = ['agents', 'commands', 'mcps', 'settings', 'hooks', 'sandbox'];

    console.log('Starting scan of components and templates...');

    // Scan components
    for (const componentType of componentTypes) {
        const typePath = path.join(componentsBasePath, componentType);
        if (!fs.existsSync(typePath)) {
            console.log(`Warning: Directory not found for type: ${componentType}`);
            continue;
        }

        console.log(`Scanning for ${componentType} in ${typePath}...`);

        const categories = fs.readdirSync(typePath).filter(item =>
            fs.statSync(path.join(typePath, item)).isDirectory()
        );

        for (const category of categories) {
            const categoryPath = path.join(typePath, category);

            const files = fs.readdirSync(categoryPath).filter(file =>
                fs.statSync(path.join(categoryPath, file)).isFile() &&
                (file.endsWith('.md') || file.endsWith('.json')) &&
                !file.endsWith('.py')
            );

            for (const fileName of files) {
                const filePath = path.join(categoryPath, fileName);
                let content = '';
                let description = '';

                try {
                    content = fs.readFileSync(filePath, 'utf-8');

                    // Extract description from JSON files
                    if (fileName.endsWith('.json')) {
                        try {
                            const jsonData = JSON.parse(content);

                            if (componentType === 'mcps') {
                                if (jsonData.mcpServers) {
                                    for (const [serverName, serverConfig] of Object.entries(jsonData.mcpServers)) {
                                        if (serverConfig.description) {
                                            description = serverConfig.description;
                                            break;
                                        }
                                    }
                                }
                            } else if (['settings', 'hooks'].includes(componentType)) {
                                if (jsonData.description) {
                                    description = jsonData.description;
                                }
                            }
                        } catch (e) {
                            console.log(`Warning: Invalid JSON in ${filePath}`);
                        }
                    }
                } catch (e) {
                    console.log(`Warning: Could not read file ${filePath}: ${e.message}`);
                    continue;
                }

                const name = path.parse(fileName).name;

                const component = {
                    name: name,
                    path: path.join(category, fileName).replace(/\\/g, '/'),
                    category: category,
                    type: componentType.slice(0, -1), // singular form
                    content: content,
                    description: description,
                    downloads: 0 // Placeholder, would need download stats
                };

                componentsData[componentType].push(component);
            }
        }
    }

    // Scan templates
    if (fs.existsSync(templatesBasePath)) {
        console.log(`Scanning for templates in ${templatesBasePath}...`);

        const languages = fs.readdirSync(templatesBasePath).filter(item =>
            fs.statSync(path.join(templatesBasePath, item)).isDirectory()
        );

        for (const language of languages) {
            const languagePath = path.join(templatesBasePath, language);

            // Collect files in the language directory (excluding examples folder)
            const languageFiles = [];
            const items = fs.readdirSync(languagePath);

            for (const item of items) {
                const itemPath = path.join(languagePath, item);
                const stat = fs.statSync(itemPath);

                if (stat.isFile()) {
                    languageFiles.push(item);
                } else if (stat.isDirectory() && item !== 'examples') {
                    if (item === '.claude') {
                        const recursiveFiles = scanDirectoryRecursively(itemPath, languagePath);
                        languageFiles.push(...recursiveFiles);
                    }
                }
            }

            // Create language template entry
            const languageTemplate = {
                name: language,
                id: language,
                type: 'template',
                subtype: 'language',
                category: 'languages',
                description: `${language.charAt(0).toUpperCase() + language.slice(1)} project template`,
                files: languageFiles,
                installCommand: `npx claude-code-templates@latest --template=${language} --yes`,
                downloads: 0
            };
            componentsData.templates.push(languageTemplate);

            // Check for examples folder (contains frameworks)
            const examplesPath = path.join(languagePath, 'examples');
            if (fs.existsSync(examplesPath)) {
                const frameworks = fs.readdirSync(examplesPath).filter(item =>
                    fs.statSync(path.join(examplesPath, item)).isDirectory()
                );

                for (const framework of frameworks) {
                    const frameworkPath = path.join(examplesPath, framework);

                    // Collect files in the framework directory
                    const frameworkFiles = fs.readdirSync(frameworkPath).filter(item =>
                        fs.statSync(path.join(frameworkPath, item)).isFile()
                    ).map(item => item);

                    // Create framework template entry
                    const frameworkTemplate = {
                        name: framework,
                        id: framework,
                        type: 'template',
                        subtype: 'framework',
                        category: 'frameworks',
                        language: language,
                        description: `${framework.charAt(0).toUpperCase() + framework.slice(1)} with ${language.charAt(0).toUpperCase() + language.slice(1)}`,
                        files: frameworkFiles,
                        installCommand: `npx claude-code-templates@latest --template=${framework} --yes`,
                        downloads: 0
                    };
                    componentsData.templates.push(frameworkTemplate);
                }
            }
        }
    }

    // Sort components
    for (const componentType of Object.keys(componentsData)) {
        if (['templates', 'plugins'].includes(componentType)) {
            componentsData[componentType].sort((a, b) => a.name.localeCompare(b.name));
        } else {
            componentsData[componentType].sort((a, b) => a.path.localeCompare(b.path));
        }
    }

    // Write output
    try {
        fs.writeFileSync(outputPath, JSON.stringify(componentsData, null, 2), 'utf-8');
        console.log(`Successfully generated ${outputPath}`);

        // Log summary
        console.log('\n--- Generation Summary ---');
        for (const [componentType, components] of Object.entries(componentsData)) {
            console.log(`  - Found and processed ${components.length} ${componentType}`);
            if (componentType === 'templates') {
                const languages = components.filter(t => t.subtype === 'language').length;
                const frameworks = components.filter(t => t.subtype === 'framework').length;
                console.log(`    • ${languages} languages, ${frameworks} frameworks`);
            }
        }
        console.log('--------------------------');

    } catch (e) {
        console.error(`Error writing to ${outputPath}: ${e.message}`);
    }
}

// Run the generation
generateComponentsJson();