import React, { Component } from 'react';
import './App.css';
import people from './contacts.json';

let data = []

for (let i = 0; i <= 4; i++) {
    data.push(people[i])
}

class App extends Component {

  state = {
    contacts: data
  }

  addContact () {
    const randomNum = Math.floor(Math.random() * people.length)
    data.push(people[randomNum])
    this.setState({ contacts: data });
  }
 

  sort (key) {
    data.sort(function (a, b) {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
    
      return 0;
    });
    this.setState( {contacts: data} )
  }




  deleteContact = (contactId) => {

    data = this.state.contacts.filter((person) => {
      if (person.id !== contactId) {
        return true;
      }
      else if (person.id === contactId) {
        return false;
      }
    });
    this.setState({ contacts: data });

  }


  render () {
    return (
       <div className="App">
        <h1>IronContacts</h1>
        <button onClick={()=> {this.addContact() }}>Add Random Contact</button>
        <button onClick={() => { this.sort('name') } }>Sort by name</button>
        <button onClick={() => { this.sort('popularity')} }>Sort by popularity</button>
        <table style={{ margin: '0 auto'}}>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            { this.state.contacts.map( (contact) => {
              return (
                <tr key={contact.id}>
                  <td> <img style={ { height: "50px" } } src={contact.pictureUrl}/></td>
                  <td>{ contact.name }</td>
                  <td>{ contact.popularity }</td>  
                  <td><button onClick={() => { this.deleteContact(contact.id) } }>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;