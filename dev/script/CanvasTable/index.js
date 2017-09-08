export default class {
    constructor(selector) {
        // this.dom is canvas-table
        this.dom = document.querySelector(selector);

        this._createCanvas();
    }
    _createCanvas() {
        this.canvas = document.createElement('canvas');
        
        const styles = {
            width: '100%',
            height: '100%',
        };

        for (const style in styles) {
            this.canvas.setAttribute(style, styles[style]);
        }
        
        this.dom.appendChild(this.canvas);
    }
}
