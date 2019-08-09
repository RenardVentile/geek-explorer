import React, { Component } from "react";
import { Container } from "reactstrap";

// onClick(firstOption) {
// 	if (firstOption.hasSecondOption === true) {
// 		displaySecondSelect(event.target.id);
// 	}
// 	showResponse(event.target.id);
// }

// displaySecondSelect(id) {
// 	axios
// 		.get(`http://api/secondOption/${id}`)
// 		.then(res => res.data)
// 		.then(data => {
// 			this.setState({ response: data });
// 		})
// 		.catch(err => this.setState({ error: err.message }));

// 	return (
// 		<FormGroup>
// 			<Input type="select">
// 				{options.map(option => {
// 					return <option>{option}</option>;
// 				})}
// 			</Input>
// 		</FormGroup>
// 	);
// }

// showResponse(id) {
// 	axios
// 		.get(`http://api/usage/${id}`)
// 		.then(res => res.data)
// 		.then(data => {
// 			this.setState({ response: data });
// 		})
// 		.catch(err => this.setState({ error: err.message }));

// 	return <div>{this.state.response}</div>;
// }
class UnixPage extends Component {
  render() {
    return <Container>coucou unix</Container>;
  }
}

export default UnixPage;
