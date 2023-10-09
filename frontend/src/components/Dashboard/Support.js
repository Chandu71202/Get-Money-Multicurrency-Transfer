import React from 'react'
import "../../styles/Dashboard/Support.css"
import * as FaIcons from 'react-icons/fa';

export default function Support() {
  return (
    <div className="support-container">

      <div className="support-header">
        <h2 className='heading2'>How can we help you?</h2>
        <div className="search-bar">
          <input type="text" className='issue_input' placeholder="Describe your issue" />
          <button type="button" className='search'><FaIcons.FaSearch /></button>
        </div>
      </div>

      <div className="support_videos">
        <h1 className='heading3'>Watch GET-Money Support Videos</h1>
        <p className='check'>Check out our official Youtube channel to help you get the most from your device</p>
        <a href="https://www.youtube.com/channel/UCI1-dWB83HQEud8-SHh6bQw" className='youtube-link'>Visit  GET-Money Support on Youtube<FaIcons.FaAngleRight /></a>
        <div>
          <img className="youtube" src="https://www.dignited.com/wp-content/uploads/2023/06/watching-Youtube3.jpg"></img>
        </div>
      </div>

      <div className="side-container">
        <div className="box-left">
          <h4>Get Support</h4>
          <p>Give us a few details and we'll offer the best solution. Connect by phone, chat, email and more</p>
          <button type="button" className='start'>Start now</button>
          <div>
            <img src="https://img.freepik.com/premium-vector/woman-works-laptop-computer-talks-phone-sitting-table-home-with-cup-coffee-papers_186332-271.jpg" alt="Image 1"></img>
          </div>
        </div>
        <div className="box-right">
          <h4>GET-Money Support app</h4>
          <p>Get help for all of your issue in one place, or connect with the experts</p>
          <a href="https://www.youtube.com/channel/UCI1-dWB83HQEud8-SHh6bQw" className='youtube-link'>Download<FaIcons.FaAngleRight /></a>
          <div>
            <img src="https://cdn.dribbble.com/users/1449995/screenshots/5678125/dribbble_shot_hd.png" alt="Image 2"></img>
          </div>
        </div>
      </div>

      <div className='articles'>
        <h4>GET-Money Services Article</h4>
        <p>Declined transaction is not visible</p>
        <p>Help with cash withdrawals</p>
        <p>Managing your multi-currency accounts</p>
      </div>
    </div>
  );
}

