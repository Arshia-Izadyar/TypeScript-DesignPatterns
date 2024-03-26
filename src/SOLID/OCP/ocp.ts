export default class GenericEncoder {
  public endcode (data: any, format: string): string {
    let encoder
    if (format === 'json') {
      encoder = new JsonEncoder('json')
    } else if (format === 'xml') {
      encoder = new XmlEncoder('xml')
    } else {
      return ''
    }
    return encoder.encode(data)
  }
}

interface encoder {
  encode: (data: any) => string
}

class JsonEncoder implements encoder {
  constructor (private readonly name: string) {

  }

  encode (data: any): string {
    try {
      const a = data.toString()
      return a
    } catch {
      return ''
    }
  }
}

class XmlEncoder implements encoder {
  constructor (private readonly name: string) {

  }

  encode (data: any): string {
    try {
      const a = data.toString()
      return a
    } catch {
      return ''
    }
  }
}
