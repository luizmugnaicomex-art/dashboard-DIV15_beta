const fs = require('fs');
let content = fs.readFileSync('index.tsx', 'utf8');

const replacements = {
    "const lcl = parseInt(shipment['LCL_UNUSED'], 10) || 0;": "const lcl = 0;",
    "summing 'QTY CONTAINER' and 'LCL_UNUSED' columns": "summing 'QTY CONTAINER' column"
};

for (const [oldStr, newStr] of Object.entries(replacements)) {
    content = content.split(oldStr).join(newStr);
}

fs.writeFileSync('index.tsx', content);
console.log('Done');
