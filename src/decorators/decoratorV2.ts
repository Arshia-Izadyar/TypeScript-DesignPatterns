interface Components {
    task(): string
}

class ConcertComponent implements Components {
    task(): string {
        return 'concertTask'
    }
}

class Decorator implements Components{
    constructor (private component: ConcertComponent) {
    }
    task(): string {
        return this.component.task()
    }
}

class ConcertDecoratorA extends Decorator {

    task(): string {
        return `DecoratorA(${super.task()})`
    }
}


class ConcretDecoratorB extends Decorator {

    task(): string {
        return `DecoratorB(${super.task()})`
    }
}

const comp = new ConcertComponent()
console.log(comp.task());

const decoratorA = new ConcertDecoratorA(comp)
console.log(decoratorA.task());
const decoratorB = new ConcretDecoratorB(decoratorA)
console.log(decoratorB.task());

