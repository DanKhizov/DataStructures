import IQueue from "./IQueue";
import LinkedList from "../List/LinkedList";

export default class Queue<T> implements IQueue<T> {
    private _list: LinkedList<T>;

    constructor() {
        this._list = new LinkedList();
    }

    public isEmpty(): boolean {
        return this._list.getSize() === 0;
    }

    public add(element: T): T {
        this._list.addFirst(element);
        return this._list.getFirst();
    }

    public remove(): T {
        if (this.isEmpty()) throw new Error();
        return this._list.removeLast();
    }

    public peek(): T {
        if (this.isEmpty()) return null;
        return this._list.getLast();
    }

    public toArray(): Array<T> {
        return this._list.toArray();
    }
    public getSize(): number {
        return this._list.getSize();
    }
}
