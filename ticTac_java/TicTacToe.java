import java.lang.Thread.State;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class TicTacToe {
    public static void main(String[] args){
        
        // 2d array
        // chars used for characters
        // 5 rows with columns
        char[][] hashtag = {{' ', '|', ' ', '|', ' '}, 
            {'-', '+', '-', '+', '-'},
            {' ', '|', ' ', '|', ' '},
            {'-', '+', '-', '+', '-'},
            {' ', '|', ' ', '|', ' '}};
            
        printhashtag(hashtag);

        while(true){
            // get input from user
            Scanner scan = new Scanner(System.in);
            // prompt for user input
            System.out.println("Enter Number (1-9) for placement:");
            
            // user output
            int player = scan.nextInt();
            exesOhs(hashtag, player, "player");
            
            // cpu randomized output
            Random bot = new Random();
            int cpu = bot.nextInt(9) + 1;
            exesOhs(hashtag, cpu, "cpu");

            printhashtag(hashtag);
        }
    }
        
    // prints out hashtag (using shorthand)
    public static void printhashtag(char[][] hashtag) {
        for(char[] row : hashtag){
            for(char c : row){
                System.out.print(c);
            }
            // after each row, print line
            System.out.println();
        }
    }

    public static void exesOhs(char[][] hashtag, int player, String user) {
        
        char symbol = ' ';

        if(user.equals("player")) {
            symbol = 'X';
        } else if(user.equals("cpu")) {
            symbol = 'O';
        }

        // switch playerition based on user input
        switch(player) {
            case 1: 
                hashtag[0][0] = symbol;
                break;
            case 2: 
                hashtag[0][2] = symbol;
                break;
            case 3: 
                hashtag[0][4] = symbol;
                break;
            case 4: 
                hashtag[2][0] = symbol;
                break;
            case 5: 
                hashtag[2][2] = symbol;
                break;
            case 6: 
                hashtag[2][4] = symbol;
                break;
            case 7: 
                hashtag[4][0] = symbol;
                break;
            case 8: 
                hashtag[4][2] = symbol;
                break;
            case 9: 
                hashtag[4][4] = symbol;
                break;
            default:
                break;
        }
    }

    public static String winner() {
        List topRow = Arrays.asList(1, 2, 3);
        List midRow = Arrays.asList(4, 5, 6);
        List bottomRow = Arrays.asList(7, 8, 9);

        List leftCol = Arrays.asList(1, 4, 7);
        List midCol = Arrays.asList(2, 5, 8);
        List rightCol = Arrays.asList(3, 6, 9);

        List leftDiag = Arrays.asList(1, 5, 9);
        List rightDiag = Arrays.asList(3, 5, 7);


        return "";
    }
}