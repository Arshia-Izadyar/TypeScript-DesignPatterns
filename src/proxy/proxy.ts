interface subject {
    request(): void;
}


class Requests implements subject {
    request(): void {
        console.log('user request sent!');
    }
}

class Proxy1 implements subject {
    constructor(private requests: Requests) {

    }
    request(): void {
        if (this.accessControl()){
            this.requests.request()
            this.logger()
        }
    }

    accessControl():boolean{
        console.log('prox access control');
        return true
    }

    logger():void{
        console.log('proxy logger');
        
    }
}


function clientCodec(sub: subject) {
    sub.request()
}

const req = new Requests()
// none proxy
clientCodec(req)
 

clientCodec(new Proxy1(req))

