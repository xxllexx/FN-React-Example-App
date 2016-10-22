import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: props.search
		}
	}
	onSearch({target: {value}}){
		this.setState({value});
		this.props.onSearch(value);
	}
	clearSearch(){
		this.setState({value:''});
		this.props.onSearch('');
	}
	render(){
		return (
			<div className="search-bar">
				<input type="text"
					value={this.state.value}
					onChange={this.onSearch.bind(this)}
					placeholder="Search"
				/>
				{this.state.value ? <button onClick={this.clearSearch.bind(this)}>x</button> : null}
			</div>
		)
	}
};
