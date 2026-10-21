const fs = require('fs');
const path = require('path');

const opps = JSON.parse(fs.readFileSync('opps.json', 'utf8'));
const keys = Object.keys(opps);

let filteredOpps = [];

for (let i = 0; i < keys.length; i++) {
    const opp = opps[keys[i]];
    for (let j = 0; j < opp.length; j++) {
        const oppItem = opp[j];
        if (!!oppItem.url) filteredOpps.push(oppItem);
    }
}

fs.writeFileSync('filteredOpps.json', JSON.stringify(filteredOpps, null, 2));