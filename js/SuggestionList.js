var SuggestionList = function() {
	
	var self = {};

	self.allitems = [];

	self.items = [];

	self.set = function(addresslist) {
		self.allitems = addresslist;
	}
	self.addItem = function(item) {
		self.allitems.push(item);
	}

	self.reset = function() {
		self.items = [];
		self.visible = false;
		self.index = -1;
		self.selected = null;
		self.query = null;
	};

	self.filteritems = function(val) {
		self.items = self.allitems.filter(function(item) {
			return item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
		}).sort( function(a,b) {
			if (a.used < b.used) return 1; else return -1;
		});
		if (self.items.length == 0 || val.length == 0) {
			self.reset();
		} else {
			if (self.selected && self.items.filter(function(item) { return item.mail === self.selected.mail; }).length == 0) {
				self.selected = null;
			}
			if (!self.selected) {
				self.select(0);
			}
			self.visible = true;
		}
	}

	self.selectNext = function() {
		self.select(++self.index);
	};
	self.selectPrior = function() {
		self.select(--self.index);
	};

	self.select = function(index) {
		if (index < 0) {
			index = self.items.length - 1;
		}
		else if (index >= self.items.length) {
			index = 0;
		}
		self.index = index;
		self.selected = self.items[index];
	};

	self.selectedClass = function(index) {
		if (self.index == index) {
			return "selected";
		} else {
			return "";
		}
	}

	self.reset();

	return self;
    };

