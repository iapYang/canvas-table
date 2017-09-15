import Point from './Point';

export default class {
    constructor({
        x,
        y,
        width,
        height,
        hasBorder,
        ctx,
    }) {
        this.startPoint = new Point({x, y});
        this.width = width || 120;
        this.height = height || 20;
        this.hasBorder = true;
        this.ctx = ctx;
    }
    render() {
        this.ctx.save();
        this.ctx.strokeRect(this.startPoint.getX(), this.startPoint.getY(), this.width, this.height);
        this.ctx.restore();
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
