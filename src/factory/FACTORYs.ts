interface Oprand {
    sayHi():string
}
abstract class Creator {
    public opration():void{
        const oprand = this.getOprand()
        console.log(oprand.sayHi());
        return
    }

    public abstract getOprand():Oprand
}

class EnHi implements Oprand {
    sayHi(): string {
        return 'hello there'
    }

}


class SpHi implements Oprand{

    sayHi(): string {
        return 'hola amigo'
    }
}

class PrHi implements Oprand {
    sayHi(): string {
        return 'salam dada'
    }
    
}

class InternationalHi extends Creator {
    constructor(private lang: string){
        super()
    }

    public getOprand(): Oprand {
        switch (this.lang) {
            case 'en':
                return new EnHi()
            case 'sp':
                return new SpHi()
            case 'pr':
                return new PrHi()
            default:
                return new EnHi()
        }


    }

}
// or

class ConcreateEn extends Creator {
    public getOprand(): Oprand {
        return new EnHi()
    }
}
class ConcreateSp extends Creator {
    public getOprand(): Oprand {
        return new SpHi()
    }
}

class ConcreatePr extends Creator {
    public getOprand(): Oprand {
        return new PrHi()
    }
}


// client code

function test(creator: Creator){
    creator.opration()
}

function main(){
    test(new ConcreateEn())
    test(new ConcreateSp())
    test(new InternationalHi('pr'))
    test(new InternationalHi('sp'))
    test(new InternationalHi('en'))
}

main()