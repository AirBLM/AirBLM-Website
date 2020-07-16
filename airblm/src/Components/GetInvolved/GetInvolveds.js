import React, { useEffect, useState } from 'react';

const GetInvolveds = props => {
    const [getInvolveds, setGetInvolveds] = useState([])

    useEffect(() => {
        fetch(`https://api.airtable.com/v0/app36UstLvKFZ3Aas/Get%20Involved?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`)
            .then((res) => res.json())
            .then(data => {
                setGetInvolveds(data.records);
                console.log(data.records);
            })
            .catch(console.error);
            }, [getInvolveds]);

    console.log(getInvolveds)

}

export default GetInvolveds;