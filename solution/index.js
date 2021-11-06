module.exports = class MySet {
    items = [];
    [Symbol.toStringTag] = '^_^'

    constructor(items) {
        for (let item of items)
            this.add(item)
    }

    get size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    has(item) {
        return this.items.includes(item);
    }

    add(item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
        }
        return this;
    }

    delete(item) {
        if (!this.items.includes(item))
            return false;
        else {
            this.items = this.items.filter(x => x !== item);
            return true;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }

    *keys() {
        return this.values();
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