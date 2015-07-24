/** @jsx React.DOM */

var firebaseUrl = "https://travellog.firebaseio.com";

var Travellog = React.createClass({
	mixins : [ReactFireMixin],
	render: function() {

		function createUser(d,i){
			return <TravellogUser user={d} />;
		};

		return <div>
			<div className="container">
				{this.state.users.map(createUser)}
			</div>
			<footer className="footer">
				<div className="container">
					<TravellogNav users={this.state.users} />
				</div>
			</footer>
		</div>
	},
	componentWillMount: function() {
		var ref = new Firebase(firebaseUrl);
		this.bindAsArray(ref, "users");
	}
});

React.render(
  <Travellog />,
  document.getElementById('content')
);
