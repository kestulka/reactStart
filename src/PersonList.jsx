import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://reqres.in/api/users?page=1`).then((res) => {
      console.log(res);
      const personsArr = res.data.data;
      this.setState({ persons: personsArr }); // naudoti persons jei sutampa
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>
            {person.first_name} - {person.last_name}
          </li>
        ))}
      </ul>
    );
  }
}
