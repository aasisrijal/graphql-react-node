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

  	const { loading, error, data } = useQuery(getBooksQuery);
  	console.log(data);
  	return(
      <div>
      <li>Book name</li >
      </div>
      )
  }
    
    


export default BookList;