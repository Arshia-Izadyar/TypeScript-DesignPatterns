interface Handler {
    setNext(handler: Handler): Handler
    handle(request: string): string
}

abstract class AbstractHandler implements Handler {
    private next: Handler | null = null

    setNext(handler: Handler): Handler {
        this.next = handler
        return handler
    }
    handle(request: string): string {
        if (this.next) {
            return this.next.handle(request)
        }
        return request
    }
}

class FirstHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request == 'NotAuth') {
            return 'not authenticated'
        } 
        return super.handle(request)
    }
}

class SecondHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request == 'NotAdmin') {
            return 'you cant access cuse your not admin'
        }
        return super.handle(request)
    }
}

class ThiredHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request == 'Xss') {
            return 'cant perform Xss'
        }
        return super.handle(request)
    }
}

function Clientcodee(handler: Handler) {
    const li = ['Xss', 'NotAdmin', 'NotAuth', 'Kss']
    for (const c of li) {
        console.log(handler.handle(c))
    }
}

const first = new FirstHandler()
const second = new SecondHandler()
const thired = new ThiredHandler()

first.setNext(second).setNext(thired)

Clientcodee(first)



