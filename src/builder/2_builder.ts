class Product1 {
    public parts: string[] = []
    showParts():string[] {
        return this.parts
    }
}

interface Product1Builder {
    addPartA(): void
    addPartB(): void
    addPartC(): void
}

class Product1B implements Product1Builder {
    private product: Product1 = new Product1()

    constructor(){
        this.reset()
    }

    reset() {
        this.product = new Product1()
    }
    
    addPartA(): void {
        this.product.parts.push('part A')
    }
    addPartB(): void {
        this.product.parts.push('part B')
    }
    addPartC(): void {
        this.product.parts.push('part C')
    }

    getProduct(): Product1{
        const result = this.product
        this.reset()
        return result
    }

}

class ProductDirector {
    constructor(private builder: Product1Builder){

    }

    createMinimal(){
        this.builder.addPartA()
    }

    createMedium(){
        this.builder.addPartA()
        this.builder.addPartB()
    }


    createFull(){
        this.builder.addPartA()
        this.builder.addPartB()
        this.builder.addPartC()
    }
}

function CodeClient(){
    const builder = new Product1B()
    const director = new ProductDirector(builder)
    director.createFull()
    console.log(builder.getProduct().showParts());
    director.createMedium()
    console.log(builder.getProduct().showParts());

    builder.addPartA()
    builder.addPartC()
    const parts = builder.getProduct().showParts()
    console.log(parts);
}

CodeClient()