interface Subject {
    attach(observer: Observer): void
    detach(observer: Observer): void
    notify(): void
}

interface Observer {
    update(subject: Subject): void
}

class ConcreteSubject implements Subject {
    private observers: Observer[] = []
    public state: number = 0
    
    
    attach(observer: Observer): void {
        const i = this.observers.indexOf(observer)
        if (i !== -1) {
            console.log('observer already exists');
        }
        this.observers.push(observer)
    }
    detach(observer: Observer): void {
        const i = this.observers.indexOf(observer)
        if (i !== -1) {
            console.log('observer notfound');
        }
        this.observers.splice(i, 1)
    }
    notify(): void {
        for (const ob of this.observers) {
            ob.update(this)
        }
    }

    businessLogic(): void {
        this.state = Math.floor(Math.random() * (10 + 1));
        this.notify()
    }

}

class Observer1 implements Observer {
    update(subject: Subject): void {
        if ((subject instanceof ConcreteSubject) && subject.state < 3) {
            console.log('observer 1 notified');
        }
    }

}

class Observer2 implements Observer {
    update(subject: Subject): void {
        if ((subject instanceof ConcreteSubject) && subject.state > 3) {
            console.log('observer 2 notified');
        }
    }

}


const sub = new ConcreteSubject()
const ob1 = new Observer1()
const ob2 = new Observer2()
sub.attach(ob1)
sub.attach(ob2)

for (let i = 0; i < 10; i++) {

    sub.businessLogic()
}