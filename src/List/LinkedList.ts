import IList from "./ILinkedList";
import Node from "./Node";

export default class LinkedList<E extends Object> implements IList<E> {
    private _head: Node;
    private _tail: Node;
    private _size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    private get tail(): Node {
        return this._tail;
    }

    private set tail(node: Node) {
        this._tail = node;
    }

    private get head(): Node {
        return this._head;
    }

    private set head(node: Node) {
        this._head = node;
    }

    private get size(): number {
        return this._size;
    }

    private set size(size: number) {
        this._size = size;
    }

    private createFirstNodeInList(element: E) {
        const newNode = new Node(element);

        this.head = newNode;
        this.tail = newNode;

        this.size++;
    }

    public getSize(): number {
        return this.size;
    }

    public get(index: number): E {
        if (index >= this.size || index < 0) throw new Error();

        if (index === 0) return this.getFirst();
        if (index === this.size) return this.getLast();

        let currentNode: Node = this.head;
        for (let i = 0; currentNode !== null; i++) {
            if (i === index) return currentNode.value;
            currentNode = currentNode.next;
        }

        return null;
    }

    public getFirst(): E {
        return this.head ? this.head.value : null;
    }

    public getLast(): E {
        return this.tail ? this.tail.value : null;
    }

    public add(element: E, index?: number): void {
        if (index >= this.size || index < 0) throw new Error();

        if (index === undefined) return this.addLast(element);
        if (index === 0) return this.addFirst(element);

        let currentNode: Node = this.head;
        for (let i = 0; currentNode !== null; i++) {
            if (i === index) {
                const newNode = new Node(element);

                newNode.next = currentNode;
                newNode.prev = currentNode.prev;

                currentNode.prev.next = newNode;
                currentNode.prev = newNode;
                this.size++;
                return;
            }

            currentNode = currentNode.next;
        }
    }

    public addFirst(element: E): void {
        if (this.size === 0) return this.createFirstNodeInList(element);

        const newNode = new Node(element);

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }

    public addLast(element: E): void {
        if (this.size === 0) return this.createFirstNodeInList(element);

        const newNode = new Node(element);

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        this.size++;
    }

    public remove(index: number): E {
        if (index >= this.size || index < 0) throw new Error();

        if (index === undefined) return this.removeLast();
        if (index === 0) return this.removeFirst();

        let currentNode: Node = this.head;
        for (let i = 0; currentNode !== null; i++) {
            if (i === index) {
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                this.size--;
                return;
            }

            currentNode = currentNode.next;
        }
    }

    public removeFirst(): E {
        if (this.head === null) return null;

        const firstElement: E = this.head.value;
        this.head = this.head.next;

        this.size--;

        return firstElement;
    }

    public removeLast(): E {
        if (this.tail === null) return null;

        const lastElement: E = this.tail.value;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;

        this.size--;

        return lastElement;
    }

    public clear(): void {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public traverse(callback: (currentNode: Node, i: number) => void): void {
        let currentNode: Node = this.head;

        for (let i = 0; currentNode !== null; i++) {
            callback(currentNode, i);
            currentNode = currentNode.next;
        }
    }

    public contains(value: E): boolean {
        let currentNode: Node = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.next;
        }

        return false;
    }

    public indexOf(value: E): number {
        let currentNode: Node = this.head;
        for (let i = 0; currentNode !== null; i++) {
            if (currentNode.value === value) return i;
            currentNode = currentNode.next;
        }

        return -1;
    }

    public lastIndexOf(value: E): number {
        let currentNode: Node = this.tail;
        for (let i = this.size - 1; currentNode !== null; i--) {
            if (currentNode.value === value) return i;
            currentNode = currentNode.prev;
        }

        return -1;
    }

    public set(index: number, element: E): E {
        if (index >= this.size || index < 0) throw new Error();

        let currentNode: Node = this.head;
        for (let i = 0; currentNode !== null; i++) {
            if (i === index) {
                currentNode.value = element;
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    public toArray(): Array<E> {
        const res: Array<E> = [];
        this.traverse(el => res.push(el.value));

        return res;
    }
}
