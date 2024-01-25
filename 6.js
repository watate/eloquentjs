// class Vec {
//     constructor (x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     plus(a) {
//         return new Vec(this.x + a.x, this.y + a.y);
//     }

//     minus(a) {
//         return new Vec(this.x - a.x, this.y - a.y);
//     }

//     get length() {
//         return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
//     }
// }

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5

function groupExercise() {

    class Group {
        constructor() {
            this.group = [];
        }

        add(x) {
            if (!this.group.includes(x)) {
                this.group.push(x);
            }
        }

        delete(x) {
            if (this.group.includes(x)) {
                this.group.splice(this.group.indexOf(x), 1);
            }
        }

        has(x) {
            return this.group.includes(x);
        }

        static from(iterable) {
            let output = new Group();
            for (let x of iterable) {
                output.add(x);
            }
            return output;
        }
    }

    // let group = Group.from([10, 20]);
    // console.log(group.has(10));
    // // // → true
    // console.log(group.has(30));
    // // // → false
    // console.log(group);
    // group.add(10);
    // group.delete(10);
    // console.log(group.has(10));
    // // // // → false
    // console.log(group);

    // ITERABLE GROUPS
    class GroupIterator {
        constructor(group) {
            this.index = 0;
            this.group = group.group;
        }

        next() {
            if (this.index >= this.group.length) return { done: true };
            let value = this.group[this.index];
            this.index++;
            return { value, done: false };
        }
    }

    Group.prototype[Symbol.iterator] = function () {
        return new GroupIterator(this);
    }

    // group = Group.from(["a", "b", "c"]);
    // console.log(group.group.length);

    for (let value of Group.from(["a", "b", "c"])) {
        console.log(value);
    }
    // → a
    // → b
    // → c

}

// Borrowing a method
function borrowAMethodExercise() {

    let map = { one: true, two: true, hasOwnProperty: true };

    // Fix this call
    console.log(Object.prototype.hasOwnProperty.call(map, "one"));
    // → true
}

// groupExercise();
borrowAMethodExercise();