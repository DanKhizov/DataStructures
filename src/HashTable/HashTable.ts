import LinkedList from '../List/LinkedList';

class HashTable<T> {
    private arr: Array<T> = new Array(32);

    private getHash(key: string): number {
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
        return sum;
    }

    private getIndexByKey(key: string): number {
        const hash = this.getHash(key);
        return hash % (this.arr.length - 1);
    }

    put(key: string, value: T): void {
        const idx = this.getIndexByKey(key);
        this.arr[idx] = value;
    }

    get(key: string): T {
        const idx = this.getIndexByKey(key);
        return this.arr[idx];
    }
}

const table: HashTable<String> = new HashTable();
table.put("foo", "bar");

const elem: String = table.get("foo");
console.log(elem);
