import React, { useEffect, useState } from 'react';

const Petitions = props => {
    const [petitions, setPetitions] = useState([])

    useEffect(() => {
        fetch(`https://api.airtable.com/v0/app36UstLvKFZ3Aas/Petitions?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`)
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

