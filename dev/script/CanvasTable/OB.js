/*
    Abstract: 基类
*/

export default class {
    constructor() {
        this.eventList = [];
    }
    on(name, callback) {
        this.eventList.push({
            name,
            callback,
        });
    }
    fireEvent(eventName, ...rest) {
        const event = this.eventList.find(event => event.name === eventName);
        event.callback.apply(this, 
            rest);
    }
}
