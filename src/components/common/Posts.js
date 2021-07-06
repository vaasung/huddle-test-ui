import React, { useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Table from './Table';
import Card from './Card';

const Posts = ({ author, title, ...props }) => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={!props.width ? 'container' : null}>
            <div className='row'>
                <div className='col s12'>
                    <div className={`card ${!props.cardBg ? 'blue-grey darken-1' : props.cardBg}`}>
                        <div className={`card-content ${!props.txtColor ? 'white-text' : props.txtColor}`}>
                            <Link to={{ pathname: '/author', state: { authorId: props.authorId } }}>
                                <span className='card-title'>{author}</span>
                            </Link>
                            <h3 className='light'>{title}</h3>
                            {props.body ? <p>{props.body}</p> : null}
                        </div>
                        {props.isAuthor
                            ?
                            <Table {...props} />
                            :
                            null
                        }
                        {props.isCommentBox ?
                            <div className={`card-content grey-text`}>
                                <h5>Comments</h5>
                                {props.comments?.map(comment => {
                                    return <Card body={comment.body} email={comment.email} />
                                })}
                            </div>
                            :
                            null
                        }
                        {!props.isNoContinue ?
                            <div className='card-action'>
                                <Link className='waves-effect waves-light btn' to={props.link}>
                                    {!props.buttonLabel ? 'Read Full Story' : props.buttonLabel}
                                </Link>
                            </div>
                            :
                            null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;