import React from 'react';

import './styles.css';
import PostHeader from '../PostHeader';
import PostContent from '../PostContent';


function PostItem({author,date,content,coments}){
    return (
        <>
        <div className="post-item">
            <PostHeader author={author} date={date} />
             
        </div>
        <PostContent content={content} /> 
        </>   
    );
}
export default PostItem;