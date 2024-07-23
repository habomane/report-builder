package csvanalyzer;

import java.util.*;
import java.io.File; 
import java.io.FileNotFoundException;  
import java.util.Scanner; 

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
            File targetFile = new File(this.filepath);
            if(!targetFile.exists()) { throw new FileNotFoundException("Could not locate file"); }

            Scanner fileReader = new Scanner(targetFile);
            while(fileReader.hasNextLine())
            {   
                String rowData = fileReader.nextLine();
                String[] rowItems = this.getRowItems(rowData);
                for(String item : rowItems)
                {
                    System.out.println(item);
                }
                
            }

            fileReader.close();
        }
        catch(FileNotFoundException error)
        {
            System.out.println("Error: " + error.getMessage());
        }
    }   

    private String[] getRowItems(String currentLine)
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

}
