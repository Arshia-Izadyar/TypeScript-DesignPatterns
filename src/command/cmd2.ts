// turns request to stand-alone object that contains all info about request
// add delay or queue requests execution
interface Command{
    execute(): void
}

// contains business logic
class Receiver {
    public doSomeThing(){
        console.log('doing something');
    }

    public doSomethingEls(a: string){
        console.log(`doing something else ${a}`);
    }
} 

class CMD implements Command {
    constructor(
        private receiver: Receiver,
        private a: string
    ) {

    }

    execute(): void {
        this.receiver.doSomeThing()
        this.receiver.doSomethingEls(this.a)
    }
}

class Invoker {
    private onStart: Command | null = null
    private onFinish: Command | null = null

    doSomethingImportant() {
        console.log('init');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute()
        }

        console.log('processing it');
        
        console.log('before end');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute()
        }

    }

    setOnstart(cmd: Command) {
        this.onStart = cmd
    }
    setOnfinish(cmd: Command) {
        this.onFinish = cmd
    }

    isCommand(object: any): object is Command {
        return object.execute !== undefined
    }

}

const invoker = new Invoker()
const reciver = new Receiver()
invoker.setOnstart(new CMD(reciver, 'test'))
invoker.setOnfinish(new CMD(reciver, 'test 2'))

invoker.doSomethingImportant()