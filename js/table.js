/** @jsx React.DOM */

var TravellogTable = React.createClass({
	render: function(){
		return <div class="handsontable"></div>;
	},
	componentDidMount: function() {
		if (!this.rte) {
			this.installRTE();
		}
	},

	componentWillReceiveProps: function (nextProps) {
		if (!this.hot) {
			this.installRTE();
		}
		this.hot.loadData(this.getData());
	},	

	installRTE: function(){

		var el = this.getDOMNode();

		this.hot = new Handsontable(el, {
			data : this.getData()
		}); 
	},

	getData: function(){
		return this.props.locations.map(function(d){
			return [d.timestamp, d.placename];
		});
	}
});
