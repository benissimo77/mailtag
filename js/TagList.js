var TagList = function() {
	
	self = {};
	
	self.items = [];
	
	self.addTag = function(tag) {
		self.items.push(tag);
	}
	self.removeTag = function(index) {
		self.items.splice(index, 1);
	}
	self.newTag = function(str) {
		var mail = str;
		var name = str.split("@")[0];
		if (str.indexOf("<") > -1) {
			var parts = str.split("<");
			name = parts[0].trim();
			mail = parts[1].substring(0, parts[1].indexOf(">"));
		}
		var newTag = { displayName: name, mail:mail, used:0 };
		self.items.push( newTag );
		return newTag;
	}
	return self;
}
