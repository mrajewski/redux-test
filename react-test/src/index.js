import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./commentDetail";
import faker from "faker";


function App() {
    return (
        <div className="ui container comments">
            <CommentDetail
                author={'Sam'}
                timeAgo="Today at 4:00PM"
                text='Well Done'
                avatar={faker.image.avatar()}/>
            <CommentDetail
                author={'Alex'}
                timeAgo="Today at 2:00AM"
                text='Im gonna try this'
                avatar={faker.image.avatar()}/>
            <CommentDetail
                author={'Jane'}
                timeAgo="Yesterday at 9:00PM"
                text='I dont like it at all'
                avatar={faker.image.avatar()}/>
        </div>


    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);


