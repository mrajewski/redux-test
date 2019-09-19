import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./commentDetail";
import ApprovalCard from "./approvalCard";
import faker from "faker";


function App() {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={'Sam'}
                    timeAgo="Today at 4:00PM"
                    text='Well Done'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={'Sam'}
                    timeAgo="Today at 4:00PM"
                    text='Well Done'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={'Sam'}
                    timeAgo="Today at 4:00PM"
                    text='Well Done'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>


    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);


