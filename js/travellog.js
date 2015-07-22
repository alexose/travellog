/** @jsx React.DOM */

var firebaseUrl = "https://travellog.firebaseio.com";

var Travellog = React.createClass({
	mixins : [ReactFireMixin],
	render: function() {

		var createItem = function(item, index) {
			return <li key={ index }>{item.mode}</li>;
		};

		return <ul>{ this.state.locations.map(createItem) }</ul>;
	},
	componentWillMount: function() {
		var ref = new Firebase(firebaseUrl + '/alex/locations');
		this.bindAsArray(ref, "locations");
	}
});

React.render(
  <Travellog />,
  document.getElementById('content')
);
