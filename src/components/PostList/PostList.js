import React ,{ Component} from 'react';

import './styles.css';

import PostItem from '../../components/PostItem';

class PostList extends Component{
    state = {
        posts: [
            {
                id: 1,
                author: {
                name: "Julio Alcantara",
                avatar: "https://i.pravatar.cc/150?img=11"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                        name: "Diego Fernandes",
                        avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
                        },
                        content: "Conteúdo do comentário"
                    }
                ]
            }

        ]
    }
    render(){
        
        const {posts} = this.state;
        return (
            <div className="post-list">
               {posts.map(post => (
                    <PostItem 
                        key={post.id} 
                        {...post}
                    />
                ))} 
            </div>
        );

    }    
    
}

export default PostList;