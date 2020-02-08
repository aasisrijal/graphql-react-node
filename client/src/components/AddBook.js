import React, {Component} from 'react';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {graphql} from 'react-apollo';

const getAuthorsQuery = gql`
{
	authors{
		name
		id
	}
}
`



export class AddBook extends React.Component {

	displayAuthors(){
		var data = this.props.data;
		if(data.loading){
			return(
          <option disable>Author loading..</option>
          );
		} else{
			return data.authors.map((author, index) =>{
        return (
          <option key={index}>{author.name}</option>
          );
      })
		}
	}
	render() {
		return (
			<form id="add-book">
			  <div className="field">
			    <label>
			      Book name:
			    </label>
			    <input type="text" name=""/>
			  </div>

			  <div className="field">
			    <label>
			      Book Genre:
			    </label>
			    <input type="text" name=""/>
			  </div>

			  <div className="field">
			    <label>
			      author:
			    </label>
			    <select>

			    <option>Select author
			     </option>
			      { this.displayAuthors() }
			    </select>
			   

			  </div>
			</form>
		);
	}
}

export default graphql(getAuthorsQuery)(AddBook)
// export default AddBook


    
    


