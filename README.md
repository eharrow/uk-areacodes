# uk-areacodes
A very basic method to query the UK town from a STD number e.g. '01582' will return 'Luton' or undefined if no match.  The data is sourced from OFCOM.

## Installation
`npm -i uk-areacodes`

## Usage
```
const ukareacodes = require('uk-areacodes');

console.log(new ukareacodes.UKAreaCodeLookup().lookup('01582'));
```