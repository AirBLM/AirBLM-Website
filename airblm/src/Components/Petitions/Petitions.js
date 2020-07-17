import React, { useEffect, useState } from 'react';
import { apiUrl, paths } from '../../apiConfig';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Petitions.css';

const Petitions = (props) => {
  const [petitions, setPetitions] = useState([]);

  useEffect(() => {
    fetch(apiUrl + paths.petitions + process.env.REACT_APP_AIRTABLE_API_KEY)
      .then((res) => res.json())
      .then((data) => {
        setPetitions(data.records);
        // console.log(data.records);
      })
      .catch(console.error);
  }, []);

    // console.log(petitions);

    const petitionsJsx = petitions.map(petition => (
        <Card variant="outlined" className="petition-card">        
        <CardContent>
            <Typography className="petition-name" color="textSecondary" gutterBottom href={petition.fields.Link}>
                {petition.fields.Name}
            </Typography>
            <Typography className="petition-purpose" style={{ 'font-size': '10px' }}>
                {petition.fields.Purpose}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" href={petition.fields.Link} target="_blank" style={{ 'margin-left': '190px', 'margin-top': '-10px'}}>
                Take Action
            </Button>
        </CardActions>
        </Card>
    ))
    
    return(
      <div>
        <h2>Petitions</h2>
        <div className="petition-container">
            {petitionsJsx}
        </div>
      </div>
        )

}

export default Petitions;
