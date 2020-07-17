import React, { useEffect, useState } from "react";
import { apiUrl, paths } from "../../apiConfig";

const Donations = (props) => {
  const [donations, setDonations] = useState([]);
  const [ppeDonations, setPpeDonations] = useState([]);
  const url1 =
    apiUrl + paths.orgDonations + process.env.REACT_APP_AIRTABLE_API_KEY;
  const url2 =
    apiUrl + paths.ppeDonations + process.env.REACT_APP_AIRTABLE_API_KEY;

  useEffect(() => {
    Promise.all([fetch(url1), fetch(url2)])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        setDonations(res1.records);
        setPpeDonations(res2.records);
        // console.log(res1.records, res2.records);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Donations</h1>
    </div>
  );
};

export default Donations;
