// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;
import java.time.*;


// the main class
public class NNN {

    // main function of our java code


    
    public static void main(String args[]){

        LocalDate localDate = LocalDate.now();//For reference
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd LLLL yyyy");
        String formattedString = localDate.format(formatter);
        
    }
}