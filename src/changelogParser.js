/* eslint-disable no-empty */
const fs = require('fs');
const Path = require('path');
const md = require('markdown-it')();

/* reads changelog file */
let changelogs = "## Cannot get changelogs!";
try {
    changelogs = fs.readFileSync(Path.join(__dirname, './CHANGELOG.md')).toString();
} catch (ex) {
    console.error(ex);
}
/* parsing */
let parsedChangelogs = md.render(changelogs);

module.exports = parsedChangelogs;
