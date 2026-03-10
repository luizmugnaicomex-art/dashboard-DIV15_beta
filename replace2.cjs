const fs = require('fs');
let content = fs.readFileSync('index.tsx', 'utf8');

const replacements = {
    "'VOYAGE', ": "",
    "'VOYAGE'": "''",
    "const voyage = row[''] ? String(row['']).trim().toUpperCase() : '';": "",
    "const name = voyage ? `${vesselName} - ${voyage}` : vesselName;": "const name = vesselName;",
    "'Voyage': shipment[''] || '',": "",
    "'Voyage', ": "",
    "headers = ['PURCHASE ORDER', '', ...baseHeaders];": "headers = ['PURCHASE ORDER', ...baseHeaders];",
    "headers = ['VESSEL/FLIGHT', '', ...baseHeaders];": "headers = ['VESSEL/FLIGHT', ...baseHeaders];",
    "headers = ['VESSEL/FLIGHT', '', 'PURCHASE ORDER', ...baseHeaders];": "headers = ['VESSEL/FLIGHT', 'PURCHASE ORDER', ...baseHeaders];",
    "'': 'Viagem',": ""
};

for (const [oldStr, newStr] of Object.entries(replacements)) {
    content = content.split(oldStr).join(newStr);
}

fs.writeFileSync('index.tsx', content);
console.log('Done');
