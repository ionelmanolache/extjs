// IIFE - Immediately Invoked Function Expression
// clojure
(function () {
    if (typeof MyExt === 'undefined') {
        this.MyExt = {
            add: function (a, b) {
                return a + b;
            }
        };
    }
})();

console.log(MyExt.add(1, 2));

{/* 
    
<div id="MyDivId">
    Hi
</div>

use

Ext.Get("MyDivId");

*/}


