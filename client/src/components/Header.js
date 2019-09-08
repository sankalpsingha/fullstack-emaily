import React, { Component } from 'react';
import { connect } from 'react-redux';
import authReducer from '../reducers/authReducer';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">Emaily</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a>Sign with Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};
export default connect(mapStateToProps)(Header);
