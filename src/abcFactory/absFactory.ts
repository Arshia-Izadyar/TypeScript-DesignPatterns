interface AbstractProductA {
    UsefulFunc(): string
}

interface AbstractProductB {
    UsefulFunc(): string
    anotherUsefulFunc(collaborator: AbstractProductA): void
}

interface AbstractFactory {
    createProductA(): AbstractProductA
    createProductB(): AbstractProductB
}

class ConcreteProductA implements AbstractProductA {
    UsefulFunc(): string {
        console.log(`in ConcreteProductA`);
        return 'result from ConcreteProductA'
    }

}

class ConcreteProductA2 implements AbstractProductA {
    UsefulFunc(): string {
        console.log(`in ConcreteProductA2`);
        return 'result from ConcreteProductA2'
    }

}


class ConcreteProductB implements AbstractProductB {
    UsefulFunc(): string {
        console.log(`in ConcreteProductB`);
        return 'result from ConcreteProductB'
    }


    anotherUsefulFunc(collaborator: AbstractProductA): void {
        console.log(`111111111 in Coolab with ${collaborator.UsefulFunc()}`);
    }

}

class ConcreteProductB2 implements AbstractProductB {
    UsefulFunc(): string {
        console.log(`in ConcreteProductB2`);
        return 'result from ConcreteProductB2'
    }


    anotherUsefulFunc(collaborator: AbstractProductA): void {
        console.log(`2222222 in Coolab with ${collaborator.UsefulFunc()}`);
    }

}


class ConcreateFactoryProductSeries1 implements AbstractFactory{
    createProductA(): AbstractProductA {
        return new ConcreteProductA()
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB()
    }

}
class ConcreateFactoryProductSeries2 implements AbstractFactory{
    createProductA(): AbstractProductA {
        return new ConcreteProductA2()
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB2()
    }
}

function clientCode(fatory: AbstractFactory) {
    let p1 = fatory.createProductA()
    let p2 = fatory.createProductB()

    console.log(p1.UsefulFunc())
    console.log(p2.UsefulFunc())
    
    p2.anotherUsefulFunc(p1)
}

function main(){
    clientCode(new ConcreateFactoryProductSeries1())
    clientCode(new ConcreateFactoryProductSeries2())
}
main()