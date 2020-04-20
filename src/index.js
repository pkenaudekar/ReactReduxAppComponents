import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4.45PM" 
                    content="Nice blog" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>               
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2.00PM" 
                    content="Really good" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5.00PM" 
                    content="Loved it" 
                    avatar={faker.image.avatar()} 
                />    
            </ApprovalCard>       
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));