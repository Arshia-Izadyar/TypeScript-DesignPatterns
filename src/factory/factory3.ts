interface Transporter {
    transport():void
}


// mail
abstract class Mail{
    public send(shipment:string): void {
        const transporter = this.createTransporter()
        transporter.transport()
        console.log('sent');
        return
        
    }

    public abstract createTransporter():Transporter
}

class Plane implements Transporter {
    transport(): void {
        console.log('transporting');
    }

}

class Car implements Transporter {
    transport(): void {
        console.log('transporting');
    }

}

class Truck implements Transporter {
    transport(): void {
        console.log('transporting');
    }

}

class Ship implements Transporter{
    transport(): void {
        console.log('transporting');
    }

}

class Boat implements Transporter{
    transport(): void {
        console.log('transporting');
    }

}

class SeaMail extends Mail {
    constructor(private size: number) {
        super()
    }
    public createTransporter(): Transporter {
        if (this.size > 1000 ) {
            return new Ship()
        } else {
            return new Boat()
        }
    }



}

class AirMail extends Mail {
    public createTransporter(): Transporter {
        return new Plane()       
    }

}


class GroundMail extends Mail {
    constructor(private type:string){
        super()
    }

    public createTransporter(): Transporter {
        if (this.type == 'truck'){
            return new Truck()
        } else {
            return new Car()
        }
    }   
}

