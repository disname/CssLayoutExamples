/**
 * Created by s_vinnik on 22.09.2015.
 */
function Node(data, next) {
    this.data = data;
    this.next = next;
}


function List() {
    this.name = 'list';
}

function LinkedList() {

}
var llst = function () {
    this.name = 'name';
};
LinkedList.prototype = new Function();

LinkedList.prototype.add = function (data) {
    if (data) {
        if (!this.start) {
            this.start = this.make();
            this.end = this.start;
        } else {
            this.end.next = this.make();
            this.end = this.end.next;
        }
        this.end.data = data;
    }
};
LinkedList.prototype.first = function () {
    return this.start;
};
LinkedList.prototype.last = function () {
    return this.end;
};

LinkedList.prototype.search = function (data) {
    var current = this.start;
    while (current) {
        if (current.data == data) {
            return current;
        }
        current = current.next;

    }
    return null;
};

LinkedList.prototype.make = function () {
    return new Node();
};


LinkedList.prototype.remove = function (data) {
    var toRemove = this.search(data);


};

function fract(num) {
    var result = 0;
    this.cache = this.cache || [];
    if (this.cache[num])
        result = this.cache[num];
    if (num > 0) {
        result = num === 1 ? 1 : num * fract(num - 1);
        result = this.cache[num] = result;
    }

    return result;
}

(function () {
    var l1 = new LinkedList(),
        l2 = new LinkedList();
    for (var i = 1; i <= 10; i++)
        l1.add(i);

    console.log(LinkedList.prototype.prototype);
    /*console.log(LinkedList.constructor);
    console.log(LinkedList.constructor.prototype);
    console.log(LinkedList.prototype);
    console.log(LinkedList.prototype.constructor);*/
/*    console.log(l1.constructor);
    console.log(l1.constructor.prototype);
    console.log(l1.prototype);*/

    console.log((new Function()).prototype);
    console.log((new Function()).constructor);


})();
