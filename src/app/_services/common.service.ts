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

  createQueryString(queryObject: any): string[] {
    return Object.keys(queryObject).map((key) => {
      return `${key}=${queryObject[key]}`;
    });
  }

  /**
   * Convert BASE64 to BLOB
   * @param base64Image Pass Base64 image data to convert into the BLOB
   */
  convertBase64ToBlob(base64Image: string): any {
    // Split into two parts
    const parts = base64Image.split(";base64,");

    // Hold the content type
    const imageType = parts[0].split(":")[1];

    // Decode Base64 string
    const decodedData = window.atob(parts[1]);

    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);

    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }

    // Return BLOB image after conversion
    return new Blob([uInt8Array], { type: imageType });
  }
}
