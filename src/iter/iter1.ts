interface IIterator<T> {
    current() : T
    next(): T
    key(): number
    valid(): boolean
    rewind(): void
}

interface Aggregator {
    getIter(): IIterator<string>
}

class AlphaIter implements IIterator<string>{
    private collection: WordsCollection
    private position: number = 0
    constructor(collection: WordsCollection) {
        this.collection = collection
    }
    rewind(): void {
        this.position = 0
    }
    current(): string {
        return this.collection.getItems()[this.position]
    }
    key(): number {
        return this.position
    }
    next(): string {
        const item = this.collection.getItems()[this.position]
        this.position += 1
        return item
    }
    valid(): boolean {
        return this.collection.getCount() > this.position
    }
}


class WordsCollection implements Aggregator {
    private items: string[] = []
    getItems(): string[] {
        return this.items
    }

    getCount(): number {
        return this.items.length
    }

    addItem(item: string):void {
        this.items.push(item)
    }
    
    getIter(): IIterator<string> {
        return new AlphaIter(this)
    }

} 


const collection = new WordsCollection()
collection.addItem('zebra')
collection.addItem('arshia')
collection.addItem('test')

const iter = collection.getIter()

while (iter.valid()) {
    console.log(iter.next());
}

