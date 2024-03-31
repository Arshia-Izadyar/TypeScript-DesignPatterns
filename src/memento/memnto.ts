class Originator {
    private state: number
    constructor(state: number) {
        this.state = state
    }
    doSomeThing():void {
        this.state = Math.random()
        console.log(`task done the state ${this.state}`);
    }
    save(): Memento {
        return new ConcretMemento(this.state)
    }
    restore(memento: Memento): void {
        this.state = memento.getState()
        console.log(`state restored ${this.state}`);
    }
}

interface Memento {
    getName(): string
    getState(): number
}

class ConcretMemento implements Memento {
    private date: Date = new Date()
    constructor (private state: number) {
    }
    getName(): string {
        return `${this.date} ${this.state}`
    }
    getState(): number {
        return this.state
    }
}


class CareTaker {
    private mementos: Memento[] = []
    constructor(private originator: Originator) {

    }
    backup(): void {
        this.mementos.push(this.originator.save())
    }
    undo(): void {
        if (!this.mementos.length) {
            return
        }
        const memento = this.mementos.pop()
        if (memento){

            this.originator.restore(memento)
        }

    }
    history(): void {
        for (const mem of this.mementos) {
            console.log(mem.getName());
        }
    }
}


const originator = new Originator(12)
const caretaker = new CareTaker(originator)

caretaker.backup()
originator.doSomeThing()

caretaker.backup()
originator.doSomeThing()

caretaker.backup()
originator.doSomeThing()

caretaker.history()

caretaker.undo()

caretaker.undo()
