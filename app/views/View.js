export default class View {
    constructor(model, mountPoint) {
        this.model = model;
        this.element = document.getElementById(mountPoint);
        this.render = this.render.bind(this);
        this.render();
        this.btnElement = document.getElementById('btn-trigger');
    }

    onButtonClick(fn){
        this.btnElement.addEventListener('click', fn, false);
    }

    render() {
        this.element.innerHTML = `
            <div>
                <h1>${this.model.data.ip}</h1>                
                <button id="btn-trigger">Get Your IP</button>
            </div>
        `;
    }
}