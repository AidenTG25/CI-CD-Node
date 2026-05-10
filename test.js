const { add } =require('./app');

if (add(20,30)===50) {
    console.log("Test Case Passed");
    process.exit(0);
} else {
    console.log("Test Case Failed");
    process.exit(1);
}