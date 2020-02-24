import React from 'react';

import './styles.css';
import PostHeader from '../PostHeader';
import PostContent from '../PostContent';
import PostComment from '../PostComment';

function PostItem({data}){
   const {author,date,content,comments} = data;
    return (
        <>
        <div className="post-item">
            <PostHeader author={author} date={date} />   
        </div>
        <PostContent content={content} /> 
        {comments.map(comment => {
       
            return (
                 <PostComment comment={comment} key={comment.id}/>            )
            }) } 
        </>   
    );
}
export default PostItem;