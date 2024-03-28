class F1Car {
    constructor(public parts: string[] = []){

    }

    public showParts(): string[]{
        return this.parts
    }

}

interface F1Builder {
    part1Add(): void
    part2Add(): void
    part3Add(): void
}


class FB implements F1Builder {
    private car: F1Car = new F1Car()
    constructor(){
        this.reset()

    }

    reset(){
        this.car = new F1Car()
    }

    
    part1Add(): void {
        this.car.parts.push('part 1')
    }
    part2Add(): void {
        this.car.parts.push('part 2')
    }
    part3Add(): void {
        this.car.parts.push('part 3')
    }

    getCar():F1Car {
        const result = this.car
        this.reset()
        return result
    }
}

class Director {
    private builder: F1Builder
    
    public constructor(builder: F1Builder){
        this.builder = builder
    }

    createMinimal(){
        this.builder.part1Add()
    }

    createNormal(){
        this.builder.part1Add()
        this.builder.part2Add()
    }

    createfull(){
        this.builder.part1Add()
        this.builder.part2Add()
        this.builder.part3Add()
    }
}

function Clientcode(){
    const builder = new FB()
    const director = new Director(builder)
    director.createMinimal()
    const c1 = builder.getCar()
    console.log(c1.showParts());
    director.createfull()
    console.log(builder.getCar().showParts())
    
    
}
Clientcode()