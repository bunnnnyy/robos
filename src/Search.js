import React from 'react';




const Search = ({Searched})=>{
	return(
		<div className="pa2">
			<input className="pa3 ba b--green bg-light-blue" type="search" placeholder="Search here" onChange={Searched} />
		</div>
		)
}

export default Search;