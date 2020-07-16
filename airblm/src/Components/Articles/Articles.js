import React, { useEffect, useState } from 'react';
import { apiUrl, paths } from '../../apiConfig';

const Articles = props => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch( apiUrl + paths.articles + process.env.REACT_APP_AIRTABLE_API_KEY)
            .then((res) => res.json())
            .then(data => {
                setArticles(data.records);
                // console.log(data.records);
            })
            .catch(console.error);
            }, []);

    // console.log(articles);

}

export default Articles;