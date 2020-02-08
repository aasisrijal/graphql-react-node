import React, {Component} from 'react';

import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getBooksQuery = gql`
{
	books{
		name
		id
	}
}
`;


export function BookList()  {

  	const { data, loading, error } = useQuery(getBooksQuery);
  	
    console.log(data)
      
    if(loading){
      return(
      <React.Fragment>
      <h1>Book names</h1>

      <div>
      <li>Book names</li>
      </div>
      </React.Fragment>
      )
    }else{
      return data.books.map((book, index) =>{
        return (
          <li key={index}>{book.name}</li>
          )
      })
    }
  	
  }


    
    


export default BookList;

