import React, { useEffect, useState } from "react";
import { apiUrl, paths } from "../../apiConfig";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Donations.css";

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
      })
      .catch(console.error);
  }, []);

  const ppeDonationsJsx = ppeDonations.map((ppeDonation) => (
    <Card variant="outlined" className="ppe-donation-card">
      <CardContent>
        <Typography
          className="donation-name"
          color="textSecondary"
          gutterBottom
        >
          {ppeDonation.fields.Name}
        </Typography>
        <Typography className="ppe-items" style={{ "font-size": "10px" }}>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[0]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[1]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[2]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[3]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[4]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[5]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[6]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[7]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[8]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[9]}
          </span>
          <span className="ppe-donation-type">
            {ppeDonation.fields.Attachments[10]}
          </span>
        </Typography>
      </CardContent>
      <CardActions
        className="ppe-actions"
        style={{ "justify-content": "center" }}
      >
        <Button
          variant="contained"
          color="primary"
          size="small"
          href={ppeDonation.fields.Status}
          target="_blank"
        >
          Learn More
        </Button>
      </CardActions>
      <Typography className="ppe-contact" style={{ "font-size": "12px" }}>
        <a
          href={`mailto:${ppeDonation.fields["Preferred Method of Contact"]}`}
          style={{ color: "#3199e4" }}
        >
          Contact: {ppeDonation.fields["Preferred Method of Contact"]}
        </a>
      </Typography>
    </Card>
  ));

  let org;

  const donationsJsx = donations.map((donation) => (
    //     let org
    //   switch (true) {
    //   case donation.fields.Type === 'Educational':
    //       org = 'educational'
    //       break;
    //   case donation.fields.Type === 'Civil Rights Organization':
    //       org = 'civil'
    //       break;
    //   case donation.fields.Type === 'Nonprofit':
    //       org = 'nonprofit'
    //       break;
    //   case donation.fields.Type === 'For profit':
    //       org = 'profit'
    //       break;
    //   case donation.fields.Type === 'Grassroots':
    //       org = 'grassroots'
    //       break;
    //   case donation.fields.Type === 'Fundraisers':
    //       org = 'fundraisers'
    //       break;
    //   default:
    //       org = ''
    // }

    <Card
      variant="outlined"
      className="donation-card"
      style={{ "background-color": "#ffeddb", "border-radius": "10px" }}
    >
      <CardContent>
        <Typography
          className="donation-name"
          color="textSecondary"
          gutterBottom
        >
          {donation.fields.Name}
        </Typography>
        <Typography style={{ "font-size": "10px" }}>
          <span className={`donation-type ${org}`}>{donation.fields.Type}</span>
        </Typography>
      </CardContent>
      <CardActions className="donation-actions" style={{ display: "block" }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          href={donation.fields.Link}
          target="_blank"
          style={{ "margin-left": "10px" }}
        >
          Learn More
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          href={donation.fields["Donation Link"]}
          target="_blank"
        >
          Take Action
        </Button>
      </CardActions>
    </Card>
  ));

  return (
    <div className="donation">
      <h1>Donations</h1>
      <h2>PPE Donations</h2>
      <div className="donations-container">{ppeDonationsJsx}</div>
      <h2>Organizations</h2>
      <div className="donations-container">{donationsJsx}</div>
    </div>
  );
};

export default Donations;
