var TagList = function() {
	
	self = {};
	
	self.items = [];
	
	self.addTag = function(newTag) {
		for (tag in self.items) {
			if (self.items[tag].mail == newTag.mail) {
				return;
			}
		}
		self.items.push(newTag);
	}
	self.removeTag = function(index) {
		delete self.items[index].todelete;
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
	self.deleteLastTag = function() {
		var lastTag = self.items.length-1;
		if (lastTag >= 0) {
			if (self.items[lastTag].todelete) {
				self.removeTag(lastTag);
			} else {
				self.items[lastTag].todelete = true;
			}
		}
	}
	
	return self;
}
