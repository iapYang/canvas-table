import Td from './Td';

export default class {
    constructor() {
        console.log('this is table');
        this._initDefaultData();
        console.log(this._buildTdStructure());
    }
    _initDefaultData() {
        this.tableRows = 20;
        this.tableCols = 20;
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
                }));
            }
            structure.push(array);
        }

        return structure;
    }
}
