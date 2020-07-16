import React, { useEffect, useState } from 'react';
import { apiUrl, paths } from '../../apiConfig';

const Petitions = props => {
    const [petitions, setPetitions] = useState([]);

    useEffect(() => {
        fetch(apiUrl + paths.petitions + process.env.REACT_APP_AIRTABLE_API_KEY)
            .then((res) => res.json())
            .then(data => {
                setPetitions(data.records);
                // console.log(data.records);
            })
            .catch(console.error);
            }, []);

    // console.log(petitions);

}

export default Petitions;

