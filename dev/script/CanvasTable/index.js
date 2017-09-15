import Table from './Table';
import OB from './OB';

export default class extends OB {
    constructor(selector) {
        super();
        // this.dom is canvas-table
        this.dom = document.querySelector(selector);

        this.canvas = document.createElement('canvas');

        this.table = new Table(this.canvas, {});
        
        this.dom.appendChild(this.canvas);
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
    _addEventListener() {
        this.table.on('style', () => {
            console.log('style');
        });
    }
}
