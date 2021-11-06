module.exports = class MySet {
    items = [];
    size = 0;
    [Symbol.toStringTag] = '^_^'

    constructor(items) {
        for (let item of items)
            this.add(item)
    }

    clear() {
        this.items = [];
        this.size = 0;
    }

    has(item) {
        return this.items.includes(item);
    }

    add(item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
            this.size++;
        }
        return this;
    }

    delete(item) {
        if (!this.items.includes(item))
            return false;
        else {
            this.items = this.items.filter(x => x !== item);
            this.size--;
            return true;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }

    *keys() {
        for (let item of this.items) {
            yield item;
        }
    }

    *values() {
        for (let item of this.items) {
            yield item;
        }
    }

    *entries() {
        for (let item of this.items) {
            yield [item, item];
        }
    }

    forEach(fn, context) {
        this.items.forEach(fn, context);
    }

}