const csvFilePath = 'areacodes-uk.csv';
const csv = require('csvtojson');
const fs = require('fs');

(async () => {
  const jsonarray = await csv({
    headers: ['code', 'area', 'ofcomDesc', 'previousBTAreaName'],
    trim: true,
    ignoreEmpty: true,
  }).fromFile(csvFilePath);
  // convert JSON object to string
  const data = JSON.stringify(jsonarray, null, 4);

  // write JSON string to a file
  try {
    fs.writeFileSync('areacodes-uk.json', data);
    console.log('JSON data is saved.');
  } catch (error) {
    console.error(error);
  }
})();
