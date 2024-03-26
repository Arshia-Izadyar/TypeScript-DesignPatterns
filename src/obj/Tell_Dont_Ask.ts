/*
    * all the decision making should occur inside the class
    * if you apply logic outside of the class you are breaking the tell / don't ask rule
    * only the class it self should be aware of logic implementation
*/

class User {
  private readonly name: string
  private balance: number
  constructor (name: string) {
    this.name = name
    this.balance = 0
  }

  public setWallet (amount: number): void {
    this.balance = amount
  }

  public getWallet (): number {
    return this.balance
  }

  public incWallet (amount: number): void {
    if (amount < 0) {
      return
    }
    this.balance += amount
  }
}

function main (): void {
  const usr = new User('mmd')
  usr.setWallet(usr.getWallet() + 1000) // wrong you should not handel this logic that modifies class attrs outside of the obj
  usr.incWallet(1000) // correct
}

main()
