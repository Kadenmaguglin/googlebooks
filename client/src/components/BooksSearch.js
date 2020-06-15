import React from "react";
import Axios from "axios";
import BookInfo from "./BookInfo";

class BooksSearch extends React.Component {
    state = {
        Book:"",
        bookResults:[]
    } 

    handleFormSubmit = ()=>{
        let params = this.state.Book
        Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + params
           ).then(results => {
              console.log("API REsponse",results)
              var data = results.data.items
              var bookResults = []
              let element =""
              for (let index = 0; index < data.length; index++) {
                  if( data[index].volumeInfo.authors){
                  element = {
                      title: data[index].volumeInfo.title,
                      author: data[index].volumeInfo.authors[0],
                      description: data[index].volumeInfo.description,
                      id: data[index].id,
                      saved:false
                    };
                }
                else{
                     element = {
                        title: data[index].volumeInfo.title,
                        author: "No author available",
                        description: data[index].volumeInfo.description
                        
                      };
                }
                  bookResults.push(element);
              }
              this.setState({bookResults})
              console.log(this.state.bookResults)
          })
    
    }
     saveBook = (id) =>{
         
         var books = this.state.bookResults;
         for(let i=0;i<books.length;i++){
            console.log(id,books[i].id)
             if(books[i].id ===id){
                 books[i].saved = true
             }
         }
         this.setState({bookResults : books});
         console.log(this.state.bookResults)
     }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    render() {
        return (
        <div>
            <div className="form-group">
                <label htmlFor="Query">
                    <strong>BooksSearch</strong>
                </label>
                <input
                    className="form-control"
                    name="Book"
                    type="text"
                    value={this.state.BookVal}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="pull-right">
                <button
                    onClick={this.handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-danger float-right"
                >
                    Search
            </button>
            </div>
            <div className="container">
                {this.state.bookResults.map((book,key) => (
                    <BookInfo 
                    title = {book.title}
                    description = {book.description}
                    saved ={book.saved}
                    author = {book.author}
                    key={key}
                    id={book.id}
                    saveBook ={this.saveBook}
                    />
                ))}
            </div>
        </div>
        )
    }
}

export default BooksSearch