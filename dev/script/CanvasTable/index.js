import Table from './Table';

export default class {
    constructor(selector) {
        // this.dom is canvas-table
        this.dom = document.querySelector(selector);

        new Table();

        this._createCanvas();
    }
    _createCanvas() {
        this.canvas = document.createElement('canvas');
        
        this._setCanvasStyle({
            width: '100%',
            height: '100%',
        });
        
        this.dom.appendChild(this.canvas);
    }
    _setCanvasStyle(styles) {
        for (const style in styles) {
            this.canvas.style[style] = styles[style];
        }
    }
}
