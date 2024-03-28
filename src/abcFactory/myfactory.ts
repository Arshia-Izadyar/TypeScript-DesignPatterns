interface Prod1 {
    turnOn(duration:string): void
}

interface Prod2 {
    transmit(packet:string):void
}


class var1Product1 implements Prod1{
    turnOn(duration: string): void {
        console.log(`v1 turning on for ${duration}`);
    }
}

class var1Product2 implements Prod2 {
    transmit(packet: string): void {
        console.log(`v1 sent ${packet}`);   
    }
}

class var2Product1 implements Prod1{
    turnOn(duration: string): void {
        console.log(`V2 turning on for ${duration}`);
    }
}

class var2Product2 implements Prod2 {
    transmit(packet: string): void {
        console.log(`V2 sent ${packet}`);   
    }
}


interface IProductFactory {
    createProd1(): Prod1
    createProd2(): Prod2
}


class var1ProductFactory implements IProductFactory{
    createProd1(): Prod1 {
        return new var1Product1()
    }
    createProd2(): Prod2 {
        return new var1Product2()
    }
}

class var2ProductFactory implements IProductFactory{
    createProd1(): Prod1 {
        return new var2Product1()
    }
    createProd2(): Prod2 {
        return new var2Product2()
    }
}


function test(factory: IProductFactory) {
    const p1 = factory.createProd1()
    const p2 = factory.createProd2()
    p1.turnOn('10s')
    p2.transmit('lol')
}

function main(){
    test(new var1ProductFactory())

    test(new var2ProductFactory())
}

main()