interface IEncoder {
    encode(data: any): string
}

interface IEncoderConfig {
    addEncoder(format: string, encoder: IEncoder): void
}

interface IEncoderCreate {
    createEncoder(format:string): IEncoder
}

class EncoderFactory implements IEncoderConfig, IEncoderCreate {
    private encoders: Map<string, IEncoder> = new Map<string, IEncoder>()
    createEncoder(format: string): IEncoder {
        if (!this.encoders.has(format)) {
            throw new Error('error')
        }
        return this.encoders.get(format) as IEncoder
    }

    addEncoder(format: string, encoder: IEncoder): void {
        this.encoders.set(format, encoder)
    }
}


class GenericEncoder{
    constructor(private EncoderFactory: IEncoderCreate){

    }
    public encode(data: any, format: string): string {
        const encoder = this.EncoderFactory.createEncoder(format)
        return encoder.encode(data)
    }
}
