import React, {Component} from 'react';
import imgIcon from './../../resource/imgIcon.png';
import Profile1 from './../../resource/Profile1.jpeg';
import Profile2 from './../../resource/profile2.jpeg';
import muscle1 from './../../resource/muscle1.jpeg';
import muscle2 from './../../resource/muscle2.jpeg';
import muscle3 from './../../resource/muscle3.jpeg';
import muscle4 from './../../resource/muscle4.jpeg';
import muscle5 from './../../resource/muscle5.jpeg';
import './MyRecord.css';

class MyRecord extends Component {
  render() {
    return (
        <div>
            <div className="Mainpage-header">
                <div className="Mainpage-header-publish">
                    <input type="text" placeholder="Type Here..."></input>
                    <div className="Mainpage-header-img">
                        <img src={imgIcon}/>
                        <span>Click to add picture</span>
                    </div>
                </div>
                <div className="Mainpage-header-send">
                    <div onclick="sendMessage()">SEND</div>
                </div>
            </div>
            <div className="Message-section">
                <div class="My-profile">
                    <img src={Profile1}/>
                </div>
                <table>
                    <th></th>
                </table>
            </div>
        </div>
    );
  }
}

export default MyRecord;