import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Form = props => {
	const {
		values: { name, email, password, confirmPassword },
		errors,
		touched,
		handleSubmit,
		handleChange,
		isValid,
		setFieldTouched
	} = props;
	console.table(props);

	const change = (name, e) => {
		e.persist();
		handleChange(e);
		setFieldTouched(name, true, false);
	};
	return (
		<form onSubmit={handleSubmit}>
			<TextField
				name="name"
				helperText={touched.name ? errors.name : ""}
				error={Boolean(errors.name)}
				label="Name"
				value={name}
				onChange={handleChange}
				fullWidth
			/>
			<div>{Boolean(errors.name) ? errors.name : ""}</div>
			<TextField
				name="email"
				helperText={touched.email ? errors.email : ""}
				error={Boolean(errors.email)}
				label="Email"
				fullWidth
				value={email}
				onChange={handleChange}
			/>
			<div>{Boolean(errors.email) ? errors.email : ""}</div>
			<TextField
				name="password"
				helperText={touched.password ? errors.password : ""}
				error={Boolean(errors.password)}
				label="Password"
				fullWidth
				type="password"
				value={password}
				onChange={handleChange}
			/>
			<div>{errors.password}</div>
			<TextField
				name="confirmPassword"
				helperText={touched.confirmPassword ? errors.confirmPassword : ""}
				error={Boolean(errors.confirmPassword)}
				label="Confirm Password"
				fullWidth
				type="password"
				value={confirmPassword}
				onChange={handleChange}
			/>
			<div>{errors.confirmPassword}</div>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				disabled={!isValid}
			>
				Submit
			</Button>
		</form>
	);
};
