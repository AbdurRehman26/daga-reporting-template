//Require Module
app = require('./config');
//Define Module
app.Template = (() => {

    function getSelectBox(data){
            var selectBox = '';
    }

    return {
        getSelectBox: getSelectBox,
    }
})();

module.exports = app.Template;
