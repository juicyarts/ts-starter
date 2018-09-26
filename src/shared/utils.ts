export class Constructable {
  constructor(obj?: { [key: string]: any }) {
    if (obj)
      for (const key in obj) if (obj.hasOwnProperty(key)) this[key] = obj[key]
  }
}
