package BusinessLayer;

import org.apache.commons.text.similarity.LevenshteinDistance;

public class Main {
	//this class made only for tests
	public static void main(String[] args) {
		LevenshteinDistance distance = new LevenshteinDistance();
		System.out.println(distance.apply("dany", "dani"));
		System.out.println("hello world!");
	}
}
