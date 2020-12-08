import React, { Component} from 'react';
import Cardlist from './Cardlist';
import Search from './Search';


class App extends Component{
	constructor(){
		super()
		this.state = {
			robots :[] ,
			Searchdata : ''
			}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			return this.setState({robots : users})
		})
	}
	SearchFilter=(event)=>{
		this.setState({Searchdata : event.target.value});	
		// console.log(Filtered);
	}
		
	render(){
		const Filtered = this.state.robots.filter(robot =>{
			 		return robot.name.toLowerCase().includes(this.state.Searchdata.toLowerCase());
				})
		return(
				
			<div className="tc">
			<h1>Robo Friends</h1>
			<Search Searched={this.SearchFilter}/>
			<Cardlist robots={Filtered}/>
			</div>
		)
	}
}
	
export default App;
