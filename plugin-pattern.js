(function(factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    }
    else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    'use strict';

    // Plugin code ...
    console.error('init plugin');
    console.log('$', $);
}));