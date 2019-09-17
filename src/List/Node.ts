export default class Node {
    private _value: any = null;
    private _prev: Node = null;
    private _next: Node = null;

    constructor(value: any) {
        this._value = value;
    }

    public get value(): any {
        return this._value;
    }

    public set value(value: any) {
        this._value = value;
    }

    public get next(): Node {
        return this._next;
    }

    public set next(node: Node) {
        this._next = node;
    }

    public get prev(): Node {
        return this._prev;
    }

    public set prev(node: Node) {
        this._prev = node;
    }
}
