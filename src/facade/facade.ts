/*
Facade is a structural design pattern that provides a simplified interface to a library,
a framework, or any other complex set of classes
*/

class SystemA {
    operation1(): string {
        return 'operation 1 at systemA\n'
    }

    operationA(): string {
        return 'operation A at systemA\n'
    }
}


class SystemB {
    operation1(): string {
        return 'operation 1 at systemB\n'
    }

    operationZ(): string {
        return 'operation Z at systemB\n'
    }
}

class Facade {
    private systemA: SystemA
    private systemB: SystemB
    constructor(systemA?:SystemA, systemB?:SystemB) {
        this.systemA = systemA || new SystemA()
        this.systemB = systemB || new SystemB()
    }

    operation():string {
        let result = "Facade initializing systems ... \n"
        result += this.systemA.operation1()
        result += this.systemB.operation1()
        result += "Facade executing system functions ... \n"
        result += this.systemA.operationA()
        result += this.systemB.operationZ()
        return result
    }
}


function clientCode(facade: Facade) {
    console.log(facade.operation());
}

clientCode(new Facade())