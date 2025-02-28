function bingo(ticket, win) {
    let miniWins = 0;
    for (let [str, num] of ticket) {
       
        for (let char of str) {
            if (char.charCodeAt(0) === num) {
                miniWins++;
                break; 
            }
        }
    }
    return miniWins >= win ? "Winner!" : "Loser!";
}