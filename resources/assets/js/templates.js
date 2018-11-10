//Require Module
app = require('./config');
//Define Module
app.Template = (() => {

	function getSelectBox(data){
		var selectBox = '<select id="select-team-member" class="form-control"><option value="">Select Team</option>';

		for(key in data){
			selectBox += '<option value="'+data[key].name+'">'+data[key].name+'</option>'
		}

		selectBox += '</select>';

		return selectBox;

	}

	return {
		getSelectBox: getSelectBox,
	}
})();

module.exports = app.Template;
