import React from 'react';

import './styles.css';

function PostHeader({comment}){
    return (
        <>
            <div className="post-header-profile">
                <img src={author.avatar} alt={author.name}/>    
            </div>
            <div className="post-header-datas">
                
                <span id="author">{author.name}</span>
                <span id="date">{date}</span>
            </div>    
        </>
    );
}
export default PostHeader;