class Context {
    
    constructor(private state: State){
        this.transitionTo(state)

    }
    transitionTo(state: State): void {
        this.state = state
        this.state.setContext(this)
    }

    request1(): void {
        this.state.handle1()
    }

    request2(): void {
        this.state.handle2()
    }
}

abstract class State {
    protected context: Context | null = null;
    public setContext(context: Context) {
        this.context = context
    }
    public abstract handle1(): void
    public abstract handle2(): void

} 


class ConcreteStateA extends State {
    public handle1(): void {
        console.log('ConcreteStateA handled1 ');
        console.log('switching');
        
        this.context?.transitionTo(new ConcreteStateB())
        
    }
    public handle2(): void {
        console.log('ConcreteStateA handled2 ');
    }

}


class ConcreteStateB extends State {
    public handle1(): void {
        console.log('ConcreteStateB handled1 ');

        
    }
    public handle2(): void {
        console.log('ConcreteStateB handled2 ');
        this.context?.transitionTo(new ConcreteStateA())

    }

}


const context = new Context(new ConcreteStateA())
context.request1()
context.request2()
context.request1()
context.request2()