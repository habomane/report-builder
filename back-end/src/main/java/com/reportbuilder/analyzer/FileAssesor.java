package com.reportbuilder.analyzer;

import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;

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
                List<DataRow> fileRowLine = this.mapRowData((rowItems), lineNumber);

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

    private List<DataRow> mapRowData(String[] rowDataContent, int rowNumY)
    {
        try
        {
            List<DataRow> rowInformation = new ArrayList<DataRow>();
            if(rowDataContent.length == 0) { throw new Exception("Empty array"); }
            int rowNumX = 0;

            for(String content: rowDataContent)
            {
                DataRow rowData = new DataRow(rowNumY, rowNumX, content);
                rowInformation.add(rowData);
                rowNumX++;
            }

            return rowInformation;
        }
        catch(Exception e)
        {
            System.out.println("Error: " + e);
            return new ArrayList<DataRow>();
        }
    }

}



