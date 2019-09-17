import LinkedList from "./LinkedList";

describe("Creation", () => {
    test("should create Linked List", () => {
        const linkedList: LinkedList<any> = new LinkedList();

        expect(linkedList).toBeDefined();
    });
});

describe("Size", () => {
    describe("Size changing correct when adding values", () => {
        test("should have correct size, when list is empty", () => {
            const linkedList: LinkedList<any> = new LinkedList();

            expect(linkedList.getSize()).toBe(0);
        });

        test("should have correct size, when insert in empty list", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.addFirst(5);

            expect(linkedList.getSize()).toBe(1);
        });

        test("should have correct size, when insert in not empty list", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.add(5);
            linkedList.addFirst(2);
            linkedList.addLast(8);
            linkedList.add(1);
            linkedList.addFirst(12);

            expect(linkedList.getSize()).toBe(5);
        });
    });

    describe("Size changing correct when removing values", () => {
        test("should have correct size, when removing from the end of the list", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.add(5);
            linkedList.addFirst(2);
            linkedList.addLast(8);
            linkedList.add(1);
            linkedList.removeLast();

            expect(linkedList.getSize()).toBe(3);
        });

        test("should have correct size, when removing from the start of the list", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.add(5);
            linkedList.addFirst(2);
            linkedList.addLast(8);
            linkedList.add(1);
            linkedList.removeFirst();

            expect(linkedList.getSize()).toBe(3);
        });

        test("should have correct size, when removing from the middle of the list", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.add(5);
            linkedList.addFirst(2);
            linkedList.addLast(8);
            linkedList.add(1);
            linkedList.remove(2);

            expect(linkedList.getSize()).toBe(3);
        });

        test("should have correct size, when insert in not empty list", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.add(5);
            linkedList.addFirst(2);
            linkedList.addLast(8);
            linkedList.add(1);
            linkedList.addFirst(12);
            linkedList.clear();

            expect(linkedList.getSize()).toBe(0);
        });
    });
});

describe("Adding", () => {
    describe("Insert at begin", () => {
        test("should insert value as first, when list is empty", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.addFirst(5);

            expect(linkedList.getFirst()).toBe(5);
        });

        test("should insert value as first, when list is not empty", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.addFirst(5);
            linkedList.addFirst(10);
            linkedList.addFirst(15);

            expect(linkedList.getFirst()).toBe(15);
        });
    });

    describe("Insert at end of the list", () => {
        test("should insert value as last, when list is empty", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.addLast(5);

            expect(linkedList.getLast()).toBe(5);
        });

        test("should insert value as last, when list is not empty", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.addLast(5);
            linkedList.addLast(10);
            linkedList.addLast(15);

            expect(linkedList.getLast()).toBe(15);
        });
    });

    describe("Insert at custom position of the list", () => {
        test("should insert as first value", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.add(5);
            linkedList.add(10);
            linkedList.add(15);

            linkedList.add(1, 0);

            expect(linkedList.get(0)).toBe(1);
        });

        test("should insert as n-th value", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.add(5);
            linkedList.add(10);
            linkedList.add(15);
            linkedList.add(25);

            linkedList.add(100, 2);

            expect(linkedList.get(2)).toBe(100);
        });
    });
});

describe("Removing", () => {
    describe("Remove from begin", () => {
        test("should remove value as first, when list is empty", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.addFirst(5);
            linkedList.removeFirst();

            expect(linkedList.getFirst()).toBe(null);
        });

        test("should remove value as first, when list is not empty", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.addFirst(5);
            linkedList.addFirst(10);
            linkedList.addFirst(15);
            linkedList.removeFirst();

            expect(linkedList.toArray()).toEqual([10, 5]);
        });
    });

    describe("Remove from end of the list", () => {
        test("should remove last value, when list is empty", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.removeLast();

            expect(linkedList.getLast()).toBe(null);
        });

        test("should remove last value, when list is not empty", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.addLast(5);
            linkedList.addLast(10);
            linkedList.addLast(15);
            linkedList.removeLast();

            expect(linkedList.toArray()).toEqual([5, 10]);
        });
    });

    describe("Remove from custom position of the list", () => {
        test("should remove first value", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.add(5);
            linkedList.add(10);
            linkedList.add(15);
            linkedList.add(20);
            linkedList.remove(0);

            expect(linkedList.toArray()).toEqual([10, 15, 20]);
        });

        test("should remove n-th value", () => {
            const linkedList: LinkedList<any> = new LinkedList();
            linkedList.add(5);
            linkedList.add(10);
            linkedList.add(15);
            linkedList.add(20);
            linkedList.add(25);
            linkedList.remove(3);

            expect(linkedList.toArray()).toEqual([5, 10, 15, 25]);
        });
    });
});

describe("Getting", () => {
    const linkedList: LinkedList<any> = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    test("should return first value", () => {
        expect(linkedList.get(0)).toBe(1);
    });

    test("should return value in middle", () => {
        expect(linkedList.get(2)).toBe(3);
    });

    test("should return last value", () => {
        expect(linkedList.get(4)).toBe(5);
    });
});

describe("Utils", () => {
    test("should return array", () => {
        const linkedList: LinkedList<any> = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);
        linkedList.add(5);

        const arr = linkedList.toArray();
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test("should clear linked list", () => {
        const linkedList: LinkedList<any> = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);
        linkedList.add(5);

        linkedList.clear();

        expect(linkedList.toArray()).toEqual([]);
    });
});

describe("Element existence", () => {
    test("should return true if list is contains element", () => {
        const linkedList: LinkedList<any> = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);

        expect(linkedList.contains(2)).toBeTruthy();
    });

    test("should return false if list is not contains element", () => {
        const linkedList: LinkedList<any> = new LinkedList();

        expect(linkedList.contains(12)).toBeFalsy();
    });

    test("should return index of element", () => {
        const linkedList: LinkedList<any> = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);

        expect(linkedList.indexOf(2)).toEqual(1);
    });

    test("should return -1 if list is not contains element", () => {
        const linkedList: LinkedList<any> = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);

        expect(linkedList.indexOf(12)).toEqual(-1);
    });

    test("should return last index of element", () => {
        const linkedList: LinkedList<any> = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);
        linkedList.add(2);

        expect(linkedList.lastIndexOf(2)).toEqual(4);
    });

    test("should return -1 if list is not contains element", () => {
        const linkedList: LinkedList<any> = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);

        expect(linkedList.lastIndexOf(12)).toEqual(-1);
    });
});
