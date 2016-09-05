
var AutoComplete = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
		index: React.PropTypes.number.isRequired,
		visible: React.PropTypes.bool.isRequired
	},

	render: function() {
	
		var createItem = function(item, index) {
			var selectedClass = index == this.props.index ? "selected" : "";

			return (
				<li key={index} class={"suggestion-item " + selectedClass}>
					<div>
					  <div style={ {float: 'left', border:'1px #ccccdd solid'} }>
						<img src={'https://robohash.org/' + item.mail + '/size=64'} width="64" height="64"/>
					  </div>
					  <div style={ {float:'left', marginLeft: 5} }>
						<div style={ {marginTop: 5} }>
						  <div><span style={ {fontSize: 16} }>{item.displayName} ({item.used})</span></div>
						  <div><span style={ {fontSize: 14} }>{item.mail}</span></div>
						</div>
					  </div>
					</div>
				</li>
			);
		}
		var items = this.props.items.map( createItem, this );
		
		return ( this.props.visible &&
			<div id="autocomplete">
				<ul class="suggestion-list">
					{ items }
				</ul>
			</div>
			);
	}
});

cupenyaApp.value('AutoCompleteComponent', AutoComplete)
