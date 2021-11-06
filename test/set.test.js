const MySet = require('../solution');
const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

const object = {
    getValue () { return this.value }
}

const data = {
    value: 42
}

describe('немного тестов', () => {
    it('хранит только уникальные значения', () => {
        expect([...set]).toEqual([ 4, 8, 15, 16, 23, 42 ]);
    })
    it('есть свойство size', () => {
        expect(set.size).toEqual(6);
    })
    it('работает в цикле for-of', () => {
        for (const item of set) {
            console.log(item); // 4 8 15 16 23 42
        }
    })
    it('есть методы keys, values, entries', () => {
        for (const item of set.entries()) {
            console.log(item); // [ 4, 4 ] [ 8, 8 ] ...
        }
    })
    it('есть метод clear', () => {
        set.clear();
        expect(set.size).toEqual(0);
    })
    it('есть метод add', () => {
        set.add(object);
        set.add(data);
    })
    it('add может работать в цепочке вызовов', () => {
        set.add(object).add(object).add(object);
    })
    it('есть метод delete', () => {
        set.delete(data);
    })
    it('есть метод has', () => {
        expect(set.has({})).toEqual(false);
        expect(set.has(object)).toEqual(true);
        expect(set.has(data)).toEqual(false);
    })
    it('корректный [[Class]]', () => {
        expect(String(set)).toEqual('[object ^_^]');
        expect(Object.prototype.toString.call(set)).toEqual('[object ^_^]');
    })
    it('проверка на примитив', () => {
        expect(set === set.valueOf()).toEqual(true);
    })
    it('forEach', () => {
        set.forEach(function (item) {
            expect(item.getValue.call(this)).toEqual(42); // 42
        }, data)
    })
})