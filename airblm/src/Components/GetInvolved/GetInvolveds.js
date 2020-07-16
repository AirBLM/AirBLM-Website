import React, { useEffect, useState } from 'react';
import { apiUrl, paths } from '../../apiConfig';

const GetInvolveds = props => {
    const [getInvolveds, setGetInvolveds] = useState([]);

    useEffect(() => {
        fetch(apiUrl + paths.getInvolveds + process.env.REACT_APP_AIRTABLE_API_KEY)
            .then((res) => res.json())
            .then(data => {
                setGetInvolveds(data.records);
                // console.log(data.records);
            })
            .catch(console.error);
            }, []);
  
    // console.log(getInvolveds)

}

export default GetInvolveds;