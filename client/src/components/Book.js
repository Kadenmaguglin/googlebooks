import React from 'react';

class Book extends React.Component{
    render(){
        return(<div className="card">
            <h3 className="card-title">{this.props.title}</h3>
            <div className="card-body">
                <p>{this.props.description}</p>
                <h6>{this.props.author}</h6>
            </div>

        </div>)
    }
}

export default Book;
