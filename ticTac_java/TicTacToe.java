import java.lang.Thread.State;

public class TicTacToe {
    public static void main(String[] args){
        
        // 2d array
        // chars used for characters
        // 5 rows with columns
        char[][] gameboard = {{' ', '|', ' ', '|', ' '}, 
            {'-', '+', '-', '+', '-'},
            {' ', '|', ' ', '|', ' '},
            {'-', '+', '-', '+', '-'},
            {' ', '|', ' ', '|', ' '}};
            
            printGameBoard(gameboard);
    }
        
        // prints out gameboard (using shorthand)
        public static void printGameBoard(char[][] gameboard) {
        for(char[] row : gameboard){
            for(char c : row){
                System.out.print(c);
            }
            // after each row, print line
            System.out.println();
        }
    }
}