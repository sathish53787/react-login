import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstname:"",
			lastname: "",
			email: '',
			mobile: "",
			password: '',
			notes:""
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

	displayLogin(e) {
		e.preventDefault();
			alert('You have successfully registered');
		console.log(this.state);
		this.setState({
			firstname: "",
			lastname: "",
			email: '',
			password: '',
			notes: "",
			gender: "",
			hobby: ""
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="firstname">
						<input
							type="text"
							placeholder="Enter your FirstName"
							name="firstname"
							value={this.state.firstname}
							onChange={this.update}
						    required
						/>
					</div>

					<div className="lastname">
						<input
							type="text"
							placeholder="Enter your LastName"
							name="lastname"
							value={this.state.lastname}
							onChange={this.update}
						    required
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						    required
						/>
					</div>

					<div className="mobile no">
						<input
							type="text"
							placeholder="Mobile No"
							name="mobile"
							value={this.state.mobile}
							onChange={this.update}
						    required
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
							required
						/>
					</div>

					<div className="gender">
						<p><strong>Gender: </strong>&emsp; Male<input type="radio" name="status" />
						&ensp; Female<input type="radio" name="status" /></p> 
					</div>

					<div className="hobbies">
						<p className="" required><strong>Hobby:</strong>&emsp; 
						<input type="checkbox" name="hobby" />Cricket &nbsp;
						<input type="checkbox" name="hobby" />Football  &nbsp;
						<input type="checkbox" name="hobby" />Carrom  &nbsp;
						<input type="checkbox" name="hobby" />Reading
						</p>
					</div>

					<div className="notes">
						<input
							type="text"
							placeholder="Notes"
							name="notes"
							value={this.state.notes}
							onChange={this.update}
							required
						/>
					</div>

					<div className="select country">
						<p><strong>Select country:</strong> &emsp;
						<select className="country" required >
							<option className="" data-live-search="true"></option>
							<option value="Afganistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>							
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
							<option value="Chile">Chile</option>
                            <option value="China">China</option>
							<option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
							<option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
							<option value="Indonesia">Indonesia</option>
                            <option value="India">India</option>
                            <option value="Iran">Iran</option>
							<option value="Myanmar">Myanmar</option>
							<option value="Nepal">Nepal</option>
							<option value="Nigeria">Nigeria</option>
							<option value="Pakistan">Pakistan</option>
							<option value="Peru">Peru</option>
							<option value="Saudi Arabia">Saudi Arabia</option>
							<option value="South Africa">South Africa</option>
							<option value="Thailand">Thailand</option>
							<option value="Yemen">Yemen</option>
							<option value="Zimbabwe">Zimbabwe</option>
						</select> 
						</p>
					</div>

					<input type="submit" value="Register" />
				</form>

				<Link to="/">Login Here</Link>
				<br></br>
				<br></br>
				<br></br>
			</div>
		);
	}
}

export default Register;