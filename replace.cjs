const fs = require('fs');
let content = fs.readFileSync('index.tsx', 'utf8');

const replacements = {
    "'PO SAP'": "'PURCHASE ORDER'",
    "'ARRIVAL VESSEL'": "'VESSEL/FLIGHT'",
    "'BL/AWB'": "'HBL/AWB'",
    "'SHIPOWNER'": "'TRANSPORTADORA'",
    "row.STATUS": "row['SHIPMENT STATUS']",
    "s.STATUS": "s['SHIPMENT STATUS']",
    "shipment.STATUS": "shipment['SHIPMENT STATUS']",
    "'STATUS'": "'SHIPMENT STATUS'",
    "'SHIPMENT TYPE'": "'INCOTERM'",
    "'TYPE OF CARGO'": "'MATERIAL TYPE'",
    "'BATCH CHINA'": "'SHIPMENT REFERENCE'",
    "'ACTUAL ETA'": "'DATA DE CHEGADA PORTO'",
    "'FREE TIME DEADLINE'": "'return empty container date'",
    "'BONDED WAREHOUSE'": "'warehouse'",
    "'BROKER'": "'AGENTE DE CARGAS INTL'",
    "'FCL'": "'QTY CONTAINER'",
    "'LCL'": "'LCL_UNUSED'"
};

for (const [oldStr, newStr] of Object.entries(replacements)) {
    content = content.split(oldStr).join(newStr);
}

fs.writeFileSync('index.tsx', content);
console.log('Done');
