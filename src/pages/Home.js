import React, { useContext, useEffect } from 'react';

import Posts from '../components/common/Posts';
import { PostsContext } from '../store/store';


const Home = () => {
    const [state, dispatch] = useContext(PostsContext);

    useEffect(() => {
        const getData = async () => {
            try {
                dispatch({ type: 'LOADING', payload: true });
                let posts = await fetch(
                    'https://jsonplaceholder.typicode.com/posts', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    cache: 'default'
                });
                posts = await posts.json();
                let authors = await fetch(
                    'https://jsonplaceholder.typicode.com/users',
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        cache: 'default'
                    });
                authors = await authors.json();
                posts?.map(async (post) => {
                    await authors?.filter((author) => {
                        if (author.id === post.userId) {
                            post.author = author;
                        }
                    })
                });
                dispatch({ type: 'GET_POST', payload: posts });
                dispatch({ type: 'LOADING', payload: false })
            } catch (error) {
                dispatch({ type: 'ERRORS', payload: error });
                dispatch({ type: 'LOADING', payload: false });
            }
        }
        getData()
    }, [dispatch]);

    const { posts } = state;

    return (
        <>
            {
                posts?.map(post => <React.Fragment key={post.id}>
                    <Posts
                        author={post.author.name}
                        authorId={post.author.id}
                        title={post.title}
                        link={`/post/${post.id}`}
                    />
                </React.Fragment>)
            }
        </>
    )
}

export default Home;