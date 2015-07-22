/** @jsx React.DOM */

var Table = React.createClass({
	render: function(){
		return <div class="handsontable"></div>;
	},
	componentDidMount: function() {
		console.log(this);
		if (!this.rte) {
			this.installRTE();
		}
	},
	installRTE: function(){

		var el = this.getDOMNode();

		var data = this.props.locations.map(function(d){
			return [d.timestamp, d.placename];
		});

		console.log(el);

		new Handsontable(el); 

		this.rte = true;
	}
});
