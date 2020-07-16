import React, { useEffect, useState } from 'react';

const Articles = props => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch(`https://api.airtable.com/v0/app36UstLvKFZ3Aas/Articles?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`)
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