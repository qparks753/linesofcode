let friends = ["John", "Lauren", "Taylor", "Michael", "Thomas"];


for (let j = 0; j < friends.length; j++) {

    for (let i = 100; i >= 1; i--) {
        if (i > 2) {
            console.log(i + " lines of code in the file, " + i + " lines of code;" +
                friends[j] + " strikes one out, clears it all out," + (i - 1) + " lines of code in the file.");
        } else if (i === 2) {
            console.log(i + " lines of code in the file, " + i + " lines of code;" +
                friends[j] + " strikes one out, clears it all out , " + (i - 1) + " line of code in the file.");
        } else {
            console.log(1 + " line of code in the file, " + 1 + " line of code;" +
                friends[j] + " strikes one out, clears it all out, no more lines of code in the file.");

        }
    }
}
/*let friends = ["John", "Lauren", "Taylor", "Michael", "Thomas"];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
*/



