import Point from './Point';

export default class {
    constructor({
        x,
        y,
        width,
        height,
        hasBorder,
    }) {
        this.startPoint = new Point({x, y});
        this.width = width || 40;
        this.height = height || 20;
        this.hasBorder = true;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getX() {
        return this.startPoint.getX();
    }
    getY() {
        return this.startPoint.getY();
    }
}
