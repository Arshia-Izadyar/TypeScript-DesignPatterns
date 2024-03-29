abstract class Menu {
    public abstract operation():string
    public add(item: Menu):void{}
    public remove(item: Menu):void{}
}


class Item extends Menu {
     constructor(private name:string) {
        super()
    }
    public operation(): string {
        return `menu item operation ${this.name}`
    }
}

class MenuList extends Menu {
    constructor(private name:string) {
        super()
    }
    private itemList: Array<Menu> = []
    public add(item: Menu): void {
        this.itemList.push(item)
    }
    public remove(item: Menu): void {
        let index = this.itemList.indexOf(item)
        if (index == -1) {
            return
        }
        this.itemList.splice(index, 1)
        return
    }
    public operation(): string {
        let result = ''
        for (const item of this.itemList) {
            result += `${this.name} --- ${item.operation()}\n`
        }
        return result
    }
}



function runnn(list: Menu){
    console.log(list.operation())
}

function wellermen(){
    const menuList = new MenuList('main')
    const menu1 = new MenuList('lunch')
    menu1.add(new Item('mahi'))
    menu1.add(new Item('an'))
    menu1.add(new Item('goh'))
    menu1.add(new Item('shah'))
    const menu2 = new MenuList('dinner')
    menu2.add(new Item('gav'))
    menu2.add(new Item('khar'))
    menu2.add(new Item('sglh'))
    menuList.add(menu1)
    menuList.add(menu2)
    runnn(menuList)
}

wellermen()