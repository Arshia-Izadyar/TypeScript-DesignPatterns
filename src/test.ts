interface strategy {
    doalgo(li: string[]): string[]
}

class Sorter {
    constructor (private alg: strategy) {

    }

    sort(li: string[]): string[] {
        return this.alg.doalgo(li)
    }
}
class concreteStrategy implements strategy{
    doalgo(li: string[]): string[] {
        return li.sort().reverse()
    }

} 

const rev = new concreteStrategy()
const s = new Sorter(rev)
console.log(s.sort(['a', 'z', 'f', 's', 'b', 't']));
