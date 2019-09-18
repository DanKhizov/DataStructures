class Pair<K, V> {
    private _key: K;
    private _value: V;

    get key(): K {
        return this._key;
    }

    set value(value: V) {
        this._value = value;
    }
}