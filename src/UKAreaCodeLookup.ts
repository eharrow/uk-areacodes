const data = require('./areacodes-uk.json');

export class UKAreaCodeLookup {
  lookup(areacode: string): string {
    const hit = data.find(
      (element: { code: string }) => element.code === areacode
    );

    return hit ? hit.area : undefined;
  }

  startsWith(phonenumber: string): string {
    const hit = data.find((element: { code: string }) =>
      phonenumber.startsWith(element.code)
    );

    return hit ? hit.area : undefined;
  }
}
