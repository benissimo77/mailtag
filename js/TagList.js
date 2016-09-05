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
		var newTag = { mail:str, displayName:str.split("@")[0], used:0 };
		self.items.push( newTag );
		return newTag;
	}
	return self;
}
