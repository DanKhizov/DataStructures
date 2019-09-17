import IStack from "./IStack";
import LinkedList from "../List/LinkedList";

export default class Stack<T> implements IStack<T> {
    private _list: LinkedList<T>;

    constructor() {
        this._list = new LinkedList();
    }

    public push(element: T): T {
        this._list.addLast(element);
        return this._list.getLast();
    }

    public pop(): T {
        if (this.isEmpty()) throw new Error();
        return this._list.removeLast();
    }

    public peek(): T {
        return this._list.getLast();
    }

    public isEmpty(): boolean {
        return this._list.getSize() === 0;
    }

    public getSize(): number {
        return this._list.getSize();
    }

    public toArray(): Array<T> {
        return this._list.toArray();
    }
}
