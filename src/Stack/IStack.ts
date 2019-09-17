export default interface IStack<T> {
    push(element: T): T;
    pop(): T;
    peek(): T;
    isEmpty(): boolean;
}
