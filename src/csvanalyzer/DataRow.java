package csvanalyzer;

public class DataRow 
{
    public int Column;
    public int Row;
    public String Content;

    public DataRow(int column, int row, String content)
    {
        this.Column = column;
        this.Row = row;
        this.Content = content;
    }

}
