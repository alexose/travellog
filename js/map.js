/** @jsx React.DOM */

var apiKey = 'AIzaSyB0ydxHAKRpkuaKbIMRtt12XvuYjtMd2sA';

var TravellogMap = React.createClass({
	render: function(){

		var places = this.props.places;

		if (!places || places.length < 2){
			return <div></div>;
		}
		
		var origin = places.shift(),
			destination = places.pop(),
			waypoints = places.join('|');

		var string = 'origin=' + origin + '&destination=' + destination + '&waypoints=' + waypoints;
		
		var createItem = function() {
			return <iframe 
				width="600" 
				height="450" 
				frameBorder="0" 
				src = {'https://www.google.com/maps/embed/v1/directions?' + string + '&key=' + apiKey}>
			</iframe> 
		};
		
		return <div>{ createItem() }</div>;
	}
});
