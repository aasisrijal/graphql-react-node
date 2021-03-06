import React, {Component} from 'react';

import {getBookQuery} from '../queries/queries';
import {graphql} from 'react-apollo';


export class BookDetails extends Component {
	displayBookDetails(){
		const {book} = this.props.data;
		if(book){
			return (
				<div>
				<h2>{ book.name }</h2>
				<h2>{ book.genre }</h2>
				<p>{ book.author.name }</p>
				<p>All books by this author</p>
				<ul className="other-books">
					{ book.author.book.map(item => {
						return <li key={item.id}>{ item.name }</li>
					}) }
				</ul>
				</div>
				)
		}else{
			return (<div>No book selected</div>)
		}
		}

	render() {
		// console.log(this.props);
	
		return (
			<div id="book-details">
			{this.displayBookDetails()}
				
			</div>
		)
	}
}

export default graphql(getBookQuery, {
	options: (props)=>{
		return{
			variables: {
				id:props.bookid
			}
		}
	}
})(BookDetails)