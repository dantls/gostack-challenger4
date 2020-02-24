import React from 'react';

import './styles.css';

function PostComment({comment}){
   const {author} = comment;

   return (
    <> 
        <div className="post-comments" >
            <div className="post-comment" >
                <img src={author.avatar} alt={author.name}/> 
                <p>
                    <span>{author.name}</span>
                    {comment.content} 
                </p>
            </div> 
        </div>
       
    </>
    )
}
export default PostComment;