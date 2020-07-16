import React, {Component} from 'react'
import './Resources.css'
import Button from './Button'


class Resources extends Component{
    render(){
        return(
            <div className='Resources'>
            <h1>Resources</h1>
            <p>View our national list of resources by category.</p>
            <div className='Button'> <Button text='Petitions'></Button> </div>
            <div className='Button'> <Button text='Donations'></Button> </div>
            <div className='Button'> <Button text='Get Involved'></Button> </div>
            <div className='Button'> <Button text='Articles'></Button> </div> 
            </div>
        )
    }
}

export default Resources;