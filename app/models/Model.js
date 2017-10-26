import Events from './Events.js';

export default class Model extends Events {
    constructor() {
        super();
        this._data = {
            ip: null
        };
    }

    set data(data) {        
        if(JSON.stringify(this._data) !== JSON.stringify(data)){
            this._data = data;
            this.trigger(this._data);
        }
    }

    get data(){
        return this._data;
    }
}