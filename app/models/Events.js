export default class Events {
    constructor(name){
        this.events = [];
    }

    subscribe(callback) {        
        this.events.push(callback);
    }

    unsubscribe(callback) {
        const index = events.indexOf(callback);
        if(index > -1) { events.splice(index, 1); }
    }

    trigger(data) {        
        return this.events.map(callback => callback(data));
    }
}