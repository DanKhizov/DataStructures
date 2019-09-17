export default interface IQueue<T> {
    add(element: T): T;
    remove(): T;
    isEmpty(): boolean;
    peek(): T;
    toArray(): Array<T>;
}
