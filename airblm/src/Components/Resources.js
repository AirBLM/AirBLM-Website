import React, {Component} from 'react'
import './Resources.css'
import Modal from './Modal'


class Resources extends Component{
    render(){
        return(
            <div className='Resources'>
            <h1>Resources</h1>
            <p>View our national list of resources by category.</p>
            <div className='Modals'> <Modal text='Petitions'></Modal> </div>
            <div className='Modals'> <Modal text='Donations'></Modal> </div>
            <div className='Modals'> <Modal text='Get Involved'></Modal> </div>
            <div className='Modals'> <Modal text='Articles'></Modal> </div>
            <div className='Modals'> <Modal text='Contacts'></Modal> </div>
            
            </div>
        )
    }
}

export default Resources;