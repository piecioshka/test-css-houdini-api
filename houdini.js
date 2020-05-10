registerPaint('dark', class {
    static get inputProperties() {
        return ['--dark-color', '--dark-ratio'];
    }

    paint(ctx, geom, properties) {
        const ratio = Number(properties.get('--dark-ratio').toString());
        const color = properties.get('--dark-color').toString().trim();

        const colors = color.match(/\d{1,3}/g);
        const updatedColors = colors.map(c => c * ratio);

        this._paintRect(ctx, updatedColors, geom);
    }

    _paintRect(ctx, updatedColors, geom) {
        ctx.beginPath();
        ctx.fillStyle = `rgb(${updatedColors})`;
        ctx.rect(0, 0, geom.width, geom.height);
        ctx.fill();
    }
});
