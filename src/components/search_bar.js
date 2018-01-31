import React, {Component} from 'react';

class SearchBar extends Component {//class component this is es6
	constructor(props) {
		super(props);

		this.state = {searchTerm: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input onChange={evt => this.onInputChange(evt.target.value)}/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

/*

 class component is used when you want component to have some kind of record keeping.
 const SearchBar = () => { //this is a functional component because it is a function.
 return <input />;
 }
 export default SearchBar;

 //put it in the dom?
 index to use search_Bar it needs a reference,
 so we have to export something and then import it in index.js
 */
export default SearchBar;