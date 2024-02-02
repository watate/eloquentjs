function compareRobots(robot1, memory1, robot2, memory2) {
    // Your code here
    let testResults1 = [];
    let testResults2 = [];
    let testResults3 = [];
    let oneWin = 0;
    let twoWin = 0;

    function runRobotTwo(state, robot, memory) {
        for (let turn = 0; ; turn++) {
            if (state.parcels.length == 0) {
                return turn;
            }
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
            // console.log(`Moved to ${action.direction}`);
        }
    }

    for (let i = 1; i < 101; i++) {
        let testVillage = VillageState.random(i);
        let testMemory1 = memory1;
        let testMemory2 = memory2;

        //run test on both robots using testVillage
        //push result to testResults array
        let result1 = runRobotTwo(testVillage, robot1, testMemory1);
        let result2 = runRobotTwo(testVillage, robot2, testMemory2);

        testResults1.push(result1);
        testResults2.push(result2);
        testResults3.push({result1, result2});
        if (result1 > result2) twoWin++;
        if (result2 > result1) oneWin++;
    }
    
    //the robot that wins the majority of tests is the better robot
    console.log(`Robot 1 won ${oneWin} times, Robot 2 won ${twoWin} times`)
    console.log(testResults3);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
// compareRobots(goalOrientedRobot, [], randomRobot, []);