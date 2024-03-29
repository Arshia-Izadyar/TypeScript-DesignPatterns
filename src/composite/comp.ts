abstract class Component {
    protected parent !: Component | null
    public setParent(parent: Component | null) {
        this.parent = parent
    }
    public getParent(): Component | null {
        return this.parent
    }

    public add(comp: Component):void{}
    public remove(comp: Component):void{}

    public isComponent():boolean {
        return false
    }
    public abstract operation():string
}

class Leaf extends Component{
    private name: string
    constructor(name: string){
        super()
        this.name = name
    }
    public operation(): string {
        return `leaf operation ${this.name}`
    }

}

class Composite extends Component{
    private children: Component[] = []

    public add(comp: Component): void {
        this.children.push(comp)
    }

    public remove(comp: Component): void {
        const index = this.children.indexOf(comp)
        this.children.splice(index, 1)
        return
    }



    public isComponent(): boolean {
        return true;
    }

    public operation(): string {
        let result: string[] = []
        for (const ch of this.children){
            let res = ch.operation()
            result.push(res)
        }
        return result.join(' + ')
    }

}

function clientCodecomposite(component: Component){
    let resut = component.operation()
    console.log(resut);   
}

const simple = new Leaf("simple")
clientCodecomposite(simple)
const branch1 = new Composite()
branch1.add(new Leaf("1"))
branch1.add(new Leaf("2"))
const branch2 = new Composite()
branch2.add(new Leaf("4"))
branch2.add(new Leaf("3"))
const tree = new Composite()
tree.add(branch1)
tree.add(branch2)
clientCodecomposite(tree)
