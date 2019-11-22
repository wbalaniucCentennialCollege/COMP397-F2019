module math {
    export class Queue<T> {
        _arr: T[];

        constructor()
        {
            this._arr = new Array<T>();
        }

        public push(val: T) : void {
            this._arr.push(val);
        }

        public pop() : T {
            return this._arr.shift();
        }
    }
}