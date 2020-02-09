import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';

const getAuthorsQuery = gql`
{
	authors{
		name
		id
	}
}
`

const getBooksQuery = gql`
{
	books{
		name
		id
	}
}
`
const addBookMutation = gql`
mutation($name: String!, $genre:String!, $authorId:ID!){
	addBook(name:$name, genre:$genre, authorid:$authorId){
		name
		id
	}
}
`

const getBookQuery = gql`
	query($id:ID){
		book(id:$id){
			id
			name
			genre
			author{
				id
				name
				age
				book{
					name
					id
				}
			}
		}
	}
`

export { getAuthorsQuery,getBooksQuery, addBookMutation, getBookQuery }