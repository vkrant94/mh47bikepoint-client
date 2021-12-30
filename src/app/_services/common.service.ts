import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  filterObject(object: any) {
    let filteredObject: any = {};

    Object.keys(object).forEach(function (key) {
      if (object[key] instanceof Date) {
        object[key] = object[key].toISOString();
      }
      if (
        typeof object[key] != "undefined" &&
        object[key] != null &&
        object[key] != ""
      ) {
        filteredObject[key] = object[key];
      }
    });

    return filteredObject;
  }

  populatePicklistOptions(items: any[], labelKey: string, valueKey: string) {
    return items.map((item) => {
      return { label: item[labelKey], value: item[valueKey] };
    });
  }
}
