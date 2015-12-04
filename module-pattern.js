;(function(window, undefined) {
    var MyLibrary = {};

    // ... library code

    if (typeof define === 'function' && define.amd) {
        define([], function() { return MyLibrary; });
    }

    window.MyLibrary = MyLibrary;

}(window));