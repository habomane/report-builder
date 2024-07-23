package csvanalyzer;

import java.util.*;
import java.io.File; 
import java.io.FileNotFoundException;

import javax.xml.crypto.Data; 

public class FileAssesor {

    public List<Dictionary<String, Integer>> headerData;
    public List<Dictionary<String, Integer[]>> rowData;
    public String filepath;

    public FileAssesor(String filepath)
    {
        this.filepath = filepath;
        this.readFilePath();
    }

    public String getFilePath()
    {
        return this.filepath;
    }

    public List<Dictionary<String, Integer[]>> getFileItems()
    {
        return this.rowData;
    }

    private void readFilePath()
    {
        try 
        {
            int lineNumber = 0;
            File targetFile = new File(this.filepath);
            if(!targetFile.exists()) { throw new FileNotFoundException("Could not locate file"); }
            
            Scanner fileReader = new Scanner(targetFile);
            while(fileReader.hasNextLine())
            {   
                String rowData = fileReader.nextLine();
                String[] rowItems = this.getRowItems(rowData, lineNumber);
                var fileRowLine = this.mapRowData((rowItems), lineNumber);

                lineNumber++;
                
            }

            fileReader.close();
        }
        catch(FileNotFoundException error)
        {
            System.out.println("Error: " + error.getMessage());
        }
    }   

    private String[] getRowItems(String currentLine, int rowNum)
    {
        try 
        {   
            if(currentLine.isEmpty()) { return new String[0]; }

            String[] rowSplit = currentLine.split(",");
            return rowSplit;
        }
        catch(Exception error)
        {
            System.out.println("Error: " + error.getMessage());
            return new String[0];
        }
    }

    private Dictionary<String, DataRow> mapRowData(String[] rowDataContent, int rowNumY)
    {
        try 
        {
            if(rowDataContent.length == 0) { throw new Exception("Empty array"); }
            int rowNumX = 0;
            Dictionary<String, DataRow> dictRow = new Hashtable<>();

            for(String content: rowDataContent)
            {
                DataRow rowCordination = new DataRow(rowNumY, rowNumX);
                dictRow.put(content, rowCordination);
                System.out.println(dictRow);
                rowNumX++;
            } 

            return dictRow;
        }
        catch(Exception e)
        {
            System.out.println("Error: " + e);
            return new Hashtable<>();
        }
    }

}


