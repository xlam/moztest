/*jshint strict:false */
/*jshint -W117 */
/*jslint node: true */
/*globals w, window */

'use strict';

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
me.name = function() {
    return me.getName();
};
w('me.name 2.5', me.name);
w('me.name()', me.name());
me.name = me.getName();
w('me.name 3', me.name);
w('me.getName()', me.getName());
me.setName('Hrun');
w('me.name 4', me.name);
w('me.getName()', me.getName());
w('window.name', window.name);
