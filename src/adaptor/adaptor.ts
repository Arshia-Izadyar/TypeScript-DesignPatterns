class Target {
    public request() {
        return 'this is a request.'
    }
}

class Adaptee {
    public specificRequest(){
        return '.eetpadA eht fo roivaheb laicepS'
    }
}

class Adaptor extends Target{
    private adaptee: Adaptee

    constructor(adaptee: Adaptee) {
        super()
        this.adaptee = adaptee
    }

    public request(): string {
        const req = this.adaptee.specificRequest().split('').reverse().join('') // what ever operation
        return req
    }
}

function client(target: Target) {
    console.log(target.request());
    
}

const t = new Target()
client(t)

const a = new Adaptee()
console.log(a.specificRequest());

const adapter = new Adaptor(a)
client(adapter)
