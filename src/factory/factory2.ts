interface Account {
    minimumBalance():number
}

abstract class AccountCreator {
    public abstract createAccount(): Account

    public registerAccount(balance:number):CustomerAccount {
        const acc = this.createAccount()
        if (balance < acc.minimumBalance()) {
            throw new Error('kir')
         
        }

        const cosAcc =  new CustomerAccount(balance, "cos")
        cosAcc.save()
        return cosAcc
    }
}


class CustomerAccount {
    constructor(
        private balance:number,
        private name:string
    ) {

    }

    save():void {

    }

}


// ------------------------------------------------------------

class Alert {
    constructor(
        public level:string,
        public message:string
    ){

    }
}

interface Notifier {
    notify(alert:Alert):void
}

abstract class NotifierService {
    public notify(alert: Alert): void {
        const notifier = this.createNotifier()
        notifier.notify(alert)
        return
    }

    public abstract createNotifier():Notifier

}


class TelegramNotifier implements Notifier {
    notify(alert: Alert): void {
        console.log(alert.message);       
    }
}
