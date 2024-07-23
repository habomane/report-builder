import csvanalyzer.*;

public class Main {
    public static void main(String[] args) throws Exception {
        FileAssesor fileAssesor = new FileAssesor("test.csv");
        String path = fileAssesor.getFilePath();

        System.out.println(path);
    }
}
