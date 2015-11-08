/*globals XULXlam, XULXlamLib, alert */
/*jshint -W079 */
/*jslint node: true */

if ('undefined' === XULXlam) {
    var XULXlam = {};
}

XULXlam.runApp = function () {
    alert('runApp()');
    XULXlamLib.test();
};
