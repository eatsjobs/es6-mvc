export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.fetchData = this.fetchData.bind(this);

        this.model.subscribe(this.view.render);
        this.view.onButtonClick(this.fetchData);
    }

    async fetchData() {
        try {
            const response = await fetch('http://httpbin.org/ip');
            const parsedResponse = await response.json();
            this.model.data = { ip: parsedResponse.origin };            
        } catch(e) {
            console.log(e);
        }
    }
}