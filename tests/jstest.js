'use strict';

/*jshint strict:false */
/*jshint -W117 */
/*jslint node: true */
/*globals w, window */

var message = 'Hello!';
w('parseInt message', parseInt(message, 10));
w('parseInt 10', parseInt(10, 10));
w('parseInt \'50\'', parseInt('50', 10));

var num = 10;
w('num.toString()', num.toString());
w('parseInt(\'30\').toString(2)', parseInt('30', 10).toString(2));
w('num.toString(2)', num.toString(2));
//w(null.toString()); //error

var num2 = Number('25');
w('num2', num2);
num2.txt = '35';
w('num2 + \' \' + num2.txt', num2 + ' ' + num2.txt);

function Person(namestr) {

    var name = namestr || 'Unknown';

    this.setName = function (namestr) {
        name = namestr;
    };

    this.getName = function () {
        return name;
    };
}

w('window.name', window.name);
var me = new Person('Serg');
w('me.name 1', me.name);
w('me.getName()', me.getName());
me.name = 'xlam';
w('window.name', window.name);
w('me.name 2', me.name);
w('me.getName()', me.getName());
me.name = function () {
    return me.getName();
};
//w('me.name 2.5', me.name);
w('me.name()', me.name());
me.name = me.getName();
w('me.name 3', me.name);
w('me.getName()', me.getName());
me.setName('Hrun');
w('me.name 4', me.name);
w('me.getName()', me.getName());
w('window.name', window.name);

var f1 = function (num) {
    return num;
}

var f2 = function (num) {
    return num + 100;
}

f1 = f2;

w("f1(500)", f1(500));

function Person2(namestr) {

    var name = namestr || 'Unknown';

    this.setName = function (namestr) {
        name = namestr;
    };

    this.getName = function () {
        return name;
    };
}

    function Person3(){
    }
    
    Person3.prototype.name = "Nicholas";
    Person3.prototype.age = 29;
    Person3.prototype.job = "Software Engineer";
    Person3.prototype.sayName = function(){
        alert(this.name);
    };
    
    var person1 = new Person3();
    var person2 = new Person3();
    
    person1.name = "Greg";
    w('person1.name', person1.name);   //"Greg" – from instance
    w('person2.name', person2.name);   //"Nicholas" – from prototype
    w('Object.getPrototypeOf(person1).name', Object.getPrototypeOf(person1).name);
    w('person1.constructor', person1.constructor);
    w('Object.getPrototypeOf(person1).constructor', Object.getPrototypeOf(person1).constructor);
    