export default interface List<E> {
    // Inserts the specified element at the specified position in this list.
    add(element: E, index: number): void;

    // Inserts the specified element at the beginning of this list.
    addFirst(e: E): void;

    // Appends the specified element to the end of this list.
    addLast(e: E): void;

    // Removes all of the elements from this list.
    clear(): void;

    // Returns true if this list contains the specified element.
    contains(o: Object): boolean;

    // Returns the element at the specified position in this list.
    get(index: number): E;

    // Returns the first element in this list.
    getFirst(): E;

    // Returns the last element in this list.
    getLast(): E;

    // Returns the index of the first occurrence of the specified element in this list, or - 1 if this list does not contain the element.
    indexOf(o: Object): number;

    // Returns the index of the last occurrence of the specified element in this list, or - 1 if this list does not contain the element.
    lastIndexOf(o: Object): number;

    // Removes the element at the specified position in this list.
    remove(index: number): E;

    // Removes and returns the first element from this list.
    removeFirst(): E;

    // Removes and returns the last element from this list.
    removeLast(): E;

    // Replaces the element at the specified position in this list with the specified element.
    set(index: number, element: E): E;

    // Returns an array containing all of the elements in this list in proper sequence(from first to last element).
    toArray(): Object[];
}
