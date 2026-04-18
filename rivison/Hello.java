import java.util.SortedMap;
import java.util.TreeMap;

public class Hello {

    public static void main(String[] args) {
        SortedMap<String, Integer> s = new TreeMap<String, Integer>();
        s.put("B", 23);
        s.put("A", 23);
        System.out.println(s);
    }
}