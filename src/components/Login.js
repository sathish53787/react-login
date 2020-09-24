import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''	
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	validate = () => {
		let emailError="";

		if(!this.state.email.includes("@")) {
			emailError = "Invalid email";
		}

		if(emailError) {
			this.setState({emailError});
			return false;
		}

		return (alert("Logged in"));
	}
	displayLogin(e) {
		e.preventDefault(this.validate());	
		// const isValid = this.validate();		
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}
	

	render() {
		
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
							required
						/>
						<div style={{ fontSize:"12"}}>
							{this.state.emailError}
						</div>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
							required
						/>
					</div>

					<input type="submit" value="Login" />
				</form>

				<Link to="/register">Create an account</Link>
			</div>
		);
	}
}

export default Login;


