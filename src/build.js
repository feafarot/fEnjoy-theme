var fs = require('fs');
var convertTheme = require('tmtheme-to-json').convertTheme;
var merge = require('merge');
 
var theme = JSON.parse(fs.readFileSync('src/f-enjoy-generated-vscode.json', 'utf-8'));
var additionalThemeProps = JSON.parse(fs.readFileSync('src/f-enjoy-add-props.json', 'utf-8'));
var compiledTheme = merge.recursive(true, theme, additionalThemeProps);
fs.writeFileSync('themes/f-enjoy.json', JSON.stringify(compiledTheme, null, 2))