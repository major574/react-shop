var React = require('react');
var NavBar = require('./nav/NavBar.jsx')

var navLinks = [
	{
		title: "Home",
		href: "/"
	},
	{
		title: "iOS",
		href: "/product/55"
	},
	{
		title: "React",
		href: "/product/67"
	},
	{
		title: "Python",
		href: "/product/78"
	}
];

var BasePage = React.createClass({
	render: function(){
		return (
			<div>
				<NavBar bgColor="#FFF" titleColor="#3097d1" navData={navLinks}/>
				{this.props.children}
			</div>
		);
	}
});

module.exports = BasePage;