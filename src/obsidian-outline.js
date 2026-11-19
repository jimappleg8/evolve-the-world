import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// CONFIGURATION
const username = "jimappleg8";
const websitePath = "evolve-the-world";
const obsidianPath = "Obsidian/My Creative Practice/Efforts/Open Artifacts";
const obsidianFile = "Evolve The World (OA).md";
const directoriesToIgnore = [
  // Add directory names here to exclude them from the outline
  "_includes",
  "_layouts",
  "_public",
  "starter-kit",
];

const ELEVENTY_CONTENT_DIR = path.resolve(`/Users/${username}/code/${websitePath}/templates`); 
const OBSIDIAN_VAULT_OUTLINE_PATH = path.resolve(`/Users/${username}/${obsidianPath}/${obsidianFile}`);

function scanDirectory(dirPath, depth = 0) {
  let markdown = '';
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  const indent = '  '.repeat(depth);

  // Separate directories and files for organized sorting
  const dirs = items.filter(item =>
    item.isDirectory() &&
    !item.name.startsWith('.') &&
    !directoriesToIgnore.includes(item.name)
  );
  const files = items.filter(item => item.isFile() && /\.(md|njk|html|yaml|js)$/.test(item.name));

  // Process Directories
  for (const dir of dirs) {
    markdown += `${indent}- 📁 **\`${dir.name}\`**\n`;
    markdown += scanDirectory(path.join(dirPath, dir.name), depth + 1);
  }

  // Process Files
  for (const file of files) {
    const fullPath = path.join(dirPath, file.name);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    
    // Parse front matter to get the actual page title if it exists
    let displayName = file.name;
    try {
      const { data } = matter(fileContent);
      if (data.title) displayName = data.title;
    } catch (e) {
      // Fallback to filename if front matter parsing fails
    }

    // Build the native VS Code Mac URL scheme
    const vsCodeLink = `vscode://file${fullPath}`;

    markdown += `${indent}- 📄 [${displayName}](${vsCodeLink}) *\`(${file.name})\`*\n`;
  }

  return markdown;
}

function main() {
  console.log('Generating outline...');
  const header = `# Eleventy Site Content Outline\n\n*Last updated: ${new Date().toLocaleString()}*\n\n`;
  const content = scanDirectory(ELEVENTY_CONTENT_DIR);
  
  fs.writeFileSync(OBSIDIAN_VAULT_OUTLINE_PATH, header + content, 'utf8');
  console.log(`Outline written to ${OBSIDIAN_VAULT_OUTLINE_PATH}`);
}

main();