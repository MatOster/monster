import React, {Component} from 'react';
import {CardList} from './component/card-list/card-list.component';
import './App.css';
import {SearchBox} from './component/searchbox/searchbox.components'

class App extends Component {
  constructor(){
    super()
    this.state = {monster: [
      {name: 'Fish', id:'fish'},
      {name: 'Crab', id: 'crab'},
      {name: 'Spider', id:'spider'}


    ],
    searchField: ''
    
  }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster: users}))

  }
  handleChange = (e) =>   {
      this.setState({searchField: e.target.value}) ;
    }
  render(){
    const {monster, searchField} = this.state;
    const filteredMonster = monster.filter(mo => mo.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <header className="App-header">    
        <h1>Hello World of Monsters</h1>    
       <SearchBox placeholder = 'Find your Muh...' 
       handleChange = {this.handleChange}
 />
        <CardList monster ={ filteredMonster}></CardList>
        <p>I am a Monster
        </p>
      <button>Change Crab</button>
       
      </header>
    </div>
  );
}
}
export default App;
