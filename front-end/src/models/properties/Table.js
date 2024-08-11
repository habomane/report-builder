export class TableProperties {
    constructor(tableName, tableType, tableWidth, tableHeight,
        tableLocationBegin, tableLocationEnd, borderWidth, borderColor
    )
    {
        this.tableName = tableName;
        this.tableType = tableType;
        this.tableWidth = tableWidth;
        this.tableHeight = tableHeight;
        this.tableLocationBegin = tableLocationBegin;
        this.tableLocationEnd = tableLocationEnd;
        this.borderWidth = borderWidth;
        this.borderColor = borderColor;
    }
}