class HashTable<V> {
    private arr: Array<V>;

    constructor(initialCapacity: number = 32 /* loadFactor: number = 0.75 */) {
        this.arr = new Array<V>(initialCapacity);
    }

    private getIndexByKey(key: string): number {
        let sum = 0;

        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }

        return sum % (this.arr.length - 1);
    }

    public put(key: string, value: V): void {
        const idx = this.getIndexByKey(key);
        this.arr[idx] = value;
    }

    public get(key: string): V {
        const idx = this.getIndexByKey(key);
        return this.arr[idx];
    }
}

const table: HashTable<String> = new HashTable();
table.put("foo", "bar");

const elem: String = table.get("foo");
console.log(elem);
