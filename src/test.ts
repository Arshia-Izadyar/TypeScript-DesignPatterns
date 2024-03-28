class Mashin {
    public parts: string[] = []
    public name: string = ""

    public showMashin(): string[] {
        return this.parts
    }
}

interface MashinBuilder {
    addPartA(): void
    addPartB(): void
    addPartC(): void
}


class MashinBuilderClass implements MashinBuilder {
    private mashin: Mashin = new Mashin()

    constructor() {
        this.reset()
    }

    reset(): void {
        this.mashin = new Mashin()
    }

    addPartA(): void {
        this.mashin.parts.push('part A')
    }
    addPartB(): void {
        this.mashin.parts.push('part B')
    }
    addPartC(): void {
        this.mashin.parts.push('part C')
    }

    getMashin(): Mashin {
        const result = this.mashin
        this.reset()
        return result
    }
}


class DirectorClass {
    constructor(private builder: MashinBuilderClass){

    }

    createMashinMinimal() {
        this.builder.addPartA()
    }

    createMashinNormal() {
        this.builder.addPartA()
        this.builder.addPartB()
    }
    createMashinFull() {
        this.builder.addPartA()
        this.builder.addPartB()
        this.builder.addPartC()
    }

}

function codycliebt(){
    const builder = new MashinBuilderClass()
    const director = new DirectorClass(builder)

    director.createMashinFull()
    console.log(builder.getMashin().showMashin());
    director.createMashinMinimal()
    console.log(builder.getMashin().showMashin());
    builder.addPartA()
    builder.addPartC()
    const car = builder.getMashin()
    console.log(car);
    
}
codycliebt()