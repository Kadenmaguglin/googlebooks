import React from "react";
import Axios from "axios";

class BookInfo extends React.Component{
    saveBook=()=>{
        Axios.post("/api/savebook", {
            title: this.props.title,
            author: this.props.author,
            description: this.props.description,
            id: this.props.id
        }).then(results=>{
            console.log(results);
            this.props.saveBook(this.props.id)
        })
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h6>{this.props.author}</h6>
                <p>{this.props.description}</p>
                {this.props.saved ? <h5>Book Already Saved</h5>:
                <button onClick={this.saveBook}>Save Book!</button>}
            </div>
        )
    }
}

export default BookInfo