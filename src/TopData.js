import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Topsata from './Topdata.css';

export default class TopData extends Component {
  

  render() {
    return (
      <>
        <div className='topdata'>
            <div className='ad'>
                    <p>Free Shoping</p>
            </div>
            <div className='sign'>
                    <ul>
                        
                        <li>SIGN IN</li>
                        <li>RAQS</li>
                        <li>IND</li>
                    </ul>
            </div>
            
        </div>
      </>
    )
  }
}
