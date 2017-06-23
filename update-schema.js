import fs from 'fs';

fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
    if(err) throw err;
    console.log("JSON schema created");
});
