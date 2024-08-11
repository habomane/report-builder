export class ReportDimension {
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
        this.unit = "cm";
    }

    getUnit() { return this.unit; }

    getHeightPixels() { 
        return this.height * 96;
    }

    getWidthPixels() {
        return this.width * 96;
    }
}