import Td from './Td';
import OB from './OB';

export default class extends OB {
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        console.log('this is table');
        this.canvas.width = 0;
        this.canvas.height = 0;
        this._initDefaultData();
        this.tableStructure = this._buildTdStructure();

        this._changeCanvasSize();
        
        this.render();

        this._addEventListener();
    }
    _initDefaultData() {
        this.tableRows = 200;
        this.tableCols = 200;
    }
    _changeCanvasSize() {
        const width = this._calacWidth();
        const height = this._calacHeight();
        const ratio = 1.2;

        this._setCanvasStyle({
            width: `${width / ratio}px`,
            height: `${height / ratio}px`,
        });

        this.canvas.width = width;
        this.canvas.height = height;
    }
    _calacWidth() {
        let width = 0;
        this.tableStructure[0].forEach(structure => {
            width += structure.getWidth();
        });

        return width;
    }
    _calacHeight() {
        let height = 0;
        this.tableStructure.forEach(structure => {
            height += structure[0].getHeight();
        });

        return height;
    }
    _buildTdStructure() {
        const structure = [];
        for (let row = 0; row < this.tableCols; row++) {
            const array = [];
            for (let col = 0; col < this.tableRows; col++) {
                const x = col === 0 ? 0 : array[col - 1].getWidth() + array[col - 1].getX();
                const y = row === 0 ? 0 : structure[row - 1][col].getHeight() + structure[row - 1][col].getY();

                array.push(new Td({
                    x,
                    y,
                    ctx: this.ctx,
                }));
            }
            structure.push(array);
        }

        return structure;
    }
    render() {
        for (let row = 0; row < this.tableRows; row++) {
            for (let col = 0; col < this.tableRows; col++) {
                this.tableStructure[row][col].render();
            }
        }
    }
    _setCanvasStyle(styles) {
        for (const style in styles) {
            this.canvas.style[style] = styles[style];
        }
    }
    _addEventListener() {
        // this.on('style', () => {
        //     console.log('here is table');
        // });
    }
}
