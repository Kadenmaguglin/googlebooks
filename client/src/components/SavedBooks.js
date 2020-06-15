import React from "react";
import Axios from "axios";
import Book from "./Book";

class SavedBooks extends React.Component{
     state ={ 
         bookslist : []
     }
   componentDidMount =() => {
        Axios.get("/api/savebook").then(results=>{
          
            this.setState({bookslist:results.data})
            console.log(this.state.bookslist);
        })
    }

    refresh=() => {
        Axios.get("/api/savebook").then(results=>{
          
            this.setState({bookslist:results.data})
            console.log(this.state.bookslist);
        })
    }

    render(){
        return(<div>
            <h4>Saved Books</h4>
            <button onClick={this.refresh}>Refresh</button>
            {this.state.bookslist.map((book,key)=>(
                <Book 
                 id ={book.id}
                 title ={book.title}
                 author={book.author}
                 description={book.description}
                 _id={book._id} 
                 key={key}/>
            ))}
        </div>)
    }
}

export default SavedBooks;
