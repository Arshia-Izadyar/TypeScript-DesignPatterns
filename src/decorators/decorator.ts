class UserClass {
    constructor(
        private firstName: string,
        private lastName: string,
        private balance: number
    ) {

    }

    public getFirstName(): string{ 
        return this.firstName
    }
    public getLastName():string {
        return this.lastName
    }
    public getBalance():number {
        return this.balance
    }
}

// docorator
class UserPresenter {
    constructor(private user: UserClass) {
        
    }
    public fullName():string {
        return `${this.user.getFirstName()} ${this.user.getLastName()}`
    }

    public rialBalance():number {
        return this.user.getBalance() * 10
    }
}


const user = new UserClass("arshia", "izadyar", 123)
const userPresent = new UserPresenter(user)
console.log(userPresent.fullName())
console.log(`${userPresent.rialBalance()} rial`)


