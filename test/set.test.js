MySet = require('../solution');

const object = {
    getValue () { return this.value }
}

const data = {
    value: 42
}

const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

describe('немного тестов', () => {
    it('хранит только уникальные значения', () => {
        expect([...set]).toEqual([ 4, 8, 15, 16, 23, 42 ]);
    })
    it('есть свойство size', () => {
        expect(set.size).toEqual(6);
    })
    it('работает в цикле for-of', () => {
        let result = '';
        for (const item of set) {
            result+=item + ' ';
        }
        expect(result).toEqual('4 8 15 16 23 42 ');
    })
    it('есть методы keys, values, entries', () => {
        let result = '';
        for (const item of set.entries()) {
            result+=item + ' ';
        }
        expect(result).toEqual('4,4 8,8 15,15 16,16 23,23 42,42 ');

        result = '';
        for (const item of set.keys()) {
            result+=item + ' ';
        }
        expect(result).toEqual('4 8 15 16 23 42 ');
    })
    it('есть метод clear', () => {
        set.clear();
        expect(set.size).toEqual(0);
    })
    it('есть метод add', () => {
        set.add(object);
        set.add(data);
        expect([...set]).toEqual([ object, data ]);
    })
    it('add может работать в цепочке вызовов', () => {
        set.add(object).add(object).add(object);
        expect([...set]).toEqual([ object, data ]);
    })
    it('есть метод delete', () => {
        set.delete(data);
        expect([...set]).toEqual([ object ]);
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
            expect(item.getValue.call(this)).toEqual(42);
        }, data)
    })
})