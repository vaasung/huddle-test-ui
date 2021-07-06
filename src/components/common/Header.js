import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PostsContext } from '../../store/store';

const Header = () => {
    const [state] = useContext(PostsContext);
    const [searchData, setSearchData] = useState([]);
    const [searchkeywords, setSearchkeywords] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    const history = useHistory();

    const onSearchChange = evt => {
        const { value } = evt.target;
        setSearchkeywords(value);
        const data = [...searchData].filter(d => d.name.toLowerCase().includes(value.toLowerCase()));
        setSearchedData(data.length ? data : ['[.___.]']);
    }

    useEffect(() => {
        const authors = state.posts?.map(post => post.author);
        const filteredAuthors = new Set(authors?.map(author => author));
        setSearchData(filteredAuthors);
    }, [state.posts]);

    const onSearch = (auth) => {
        history.push({
            pathname: '/author',
            state: {
                authorId: auth.id
            }
        });
        setSearchkeywords('');
    }

    return (
        <div className='col s1' style={{ position: 'relative' }}>
            <div style={{ height: '100px', lineHeight: '100px', fontSize: '50px', marginBottom: '40px' }} className='grey-text white z-depth-2 center'>
                {
                    state?.isLoading
                        ?
                        <div className='progress' style={{ margin: 0 }}>
                            <div className='indeterminate'></div>
                        </div>
                        : null
                }
                <div>{`{JSON} Placeholder API`}</div>
            </div>
            <div className='searchBar'>
                <input
                    className='autocomplete'
                    placeholder='Search by authors'
                    onChange={onSearchChange}
                    // onBlur={()=>setSearchkeywords('')}
                    value={searchkeywords}
                />
                {!searchedData.includes('[.___.]') && searchkeywords !== ''
                    ?
                    <ul>
                        {searchedData?.map(data => <li key={data.id} onClick={() => onSearch(data)}>
                            {data.name}
                        </li>)}
                    </ul>
                    :
                    null
                }
                {searchedData.includes('[.___.]') ? <p>:)</p> : null}
            </div>
        </div>
    )
}

export default Header;