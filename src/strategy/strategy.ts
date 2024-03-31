class Ctx {
    constructor(private str: Strategy) {

    }
    setStrategy(str: Strategy) {
        this.str = str
    }

    doTask(): void {
        const data = ['a', 's', 'd', 'f', 'z', 't']
        const result = this.str.doAlgo (data)
        console.log(result);
    }
}

interface Strategy {
    doAlgo(data: string[]): string[]
}


class Str1 implements Strategy {
    doAlgo(data: string[]): string[] {
        return data.sort()
    }
}

class Str2 implements Strategy {
    doAlgo(data: string[]): string[] {
        return data.sort().reverse()
    }
}


const c = new Ctx(new Str1())
c.doTask()
c.setStrategy(new Str2())
c.doTask()

