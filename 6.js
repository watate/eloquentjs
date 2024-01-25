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

let group = Group.from([10, 20]);
console.log(group.has(10));
// // → true
console.log(group.has(30));
// // → false
console.log(group);
group.add(10);
group.delete(10);
console.log(group.has(10));
// // // → false
console.log(group);