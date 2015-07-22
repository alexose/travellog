/** @jsx React.DOM */

var firebaseUrl = "https://travellog.firebaseio.com";

var Travellog = React.createClass({
	mixins : [ReactFireMixin],
	render: function() {

		var places = this.state.locations.map(function(d, i){
			return d.placename;	
		});

		return <div>
			<TravellogTable locations={ this.state.locations } />
			<TravellogMap places={ places } />
		</div>;
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
