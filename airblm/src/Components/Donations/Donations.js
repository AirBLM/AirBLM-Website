import React, { useEffect, useState } from 'react';

const Donations = props => {
    const [donations, setDonations] = useState([]);
    const [ppeDonations, setPpeDonations] = useState([]);
    const url1 = `https://api.airtable.com/v0/app36UstLvKFZ3Aas/Organizations%20in%20need%20of%20Funding%2FSupport?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;
    const url2 = `https://api.airtable.com/v0/app36UstLvKFZ3Aas/Donations?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`
    
  
    useEffect(() => {
        
        Promise.all([fetch(url1), fetch(url2)])
            .then(([res1, res2]) => { 
                return Promise.all([res1.json(), res2.json()])
            })
            .then(([res1, res2]) => {
                setDonations(res1.records);
                setPpeDonations(res2.records);
                // console.log(res1.records, res2.records);
            })
            .catch(console.error);
        }, [url1, url2]);

        // console.log(donations, ppeDonations)

}

export default Donations;