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
        testResults3.push({ result1, result2 });
        if (result1 > result2) twoWin++;
        if (result2 > result1) oneWin++;
    }

    //the robot that wins the majority of tests is the better robot
    console.log(`Robot 1 won ${oneWin} times, Robot 2 won ${twoWin} times`)
    console.log(testResults3);
}

// compareRobots(routeRobot, [], goalOrientedRobot, []);
// compareRobots(goalOrientedRobot, [], randomRobot, []);

function walterRobot({ place, parcels }, route) {
    //generate routes for each parcel
    if (route.length === 0) {
        //separate picked from unpicked parcels
        parcels_unpicked = parcels.filter(p => p.place !== place);
        parcels_picked = parcels.filter(p => p.place === place);

        let nearestParcel = (parcels_picked.length === 0 ?
            parcels_unpicked[0] :
            parcels_picked[0]);

        let shortestRoute = (parcels_picked.length === 0 ?
            findRoute(roadGraph, place, parcels_unpicked[0].place) :
            findRoute(roadGraph, place, parcels_picked[0].address));

        //if you have parcels, compare delivery address
        if (parcels_picked.length > 0) {
            for (let parcel of parcels_picked) {
                let currentRoute = findRoute(roadGraph, place, parcel.address);
                if (currentRoute.length < shortestRoute.length) {
                    shortestRoute = currentRoute;
                    nearestParcel = parcel;
                }
                // console.log(shortestRoute);
            }
        }

        //if you have unpicked parcels, compare pickup address
        if (parcels_unpicked.length > 0) {
            for (let parcel of parcels_unpicked) {
                let currentRoute = findRoute(roadGraph, place, parcel.place);
                if (currentRoute.length < shortestRoute.length) {
                    shortestRoute = currentRoute;
                    nearestParcel = parcel;
                }
            }
        }
        route = shortestRoute;
    }

    return { direction: route[0], memory: route.slice(1) };
}
// runRobotAnimation(VillageState.random(), walterRobot, []);
// compareRobots(goalOrientedRobot, [], walterRobot, []);

class PGroup {
    constructor(members) {
        this.members = members;
    }

    // add - return PGroup with new member added, old one unchanged
    add(x) {
        if (this.has(x)) return this;
        return new PGroup(this.members.concat([x]));
    }

    // delete - new instance without a given member
    delete(x) {
        if (!this.has(x)) return this;
        return new PGroup(this.members.filter(p => p !== x));
    }

    // has - return true/false if has item
    has(x) {
        if (this.members.includes(x)) return true;
        else return false;
    }
}
PGroup.empty = new PGroup([]);
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");
console.log(a);
console.log(ab);
console.log(b);
console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false