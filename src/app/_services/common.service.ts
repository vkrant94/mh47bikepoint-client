import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  filterObject(object: any) {
    let filteredObject: any = {};

    Object.keys(object).forEach(function (key) {
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
}
