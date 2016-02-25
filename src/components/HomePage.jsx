var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomePage = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Home</h1>
				<ul>
					<li><Link to="/product/55">iOS</Link></li>
					<li><Link to="/product/67">Reactjs</Link></li>
					<li><Link to="/product/78">Python</Link></li>
				</ul>
			</div>
		);
	}
});

module.exports = HomePage;