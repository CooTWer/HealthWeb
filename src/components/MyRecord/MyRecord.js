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
                    <img src={Profile2}/>
                </div>
                <table className="My-record-table">
                    <tr>
                        <td className="Date-td">2018-01-25 16:00pm</td>
                        <td className="Message-td">Fitness brought to me is not only the change of the body, more important is the mentality change</td>
                        <td className="Images-td">
                            <td><img src={muscle1}/></td>
                            <td><img src={muscle2}/></td>
                        </td>
                    </tr>

                    <tr>
                        <td className="Date-td">2017-12-25 16:00pm</td>
                        <td className="Message-td">Weight loss need more aerobic exercise, diet, diet is the key</td>
                    </tr>

                    <tr>
                        <td className="Date-td">2017-12-25 08:00am</td>
                        <td className="Message-td">Fitness brought to me is not only the change of the body, more important is the mentality change</td>
                        <td className="Images-td">
                            <td><img src={muscle1}/></td>
                            <td><img src={muscle2}/></td>
                        </td>
                    </tr>

                    <tr>
                        <td className="Date-td">2017-12-1 16:00pm</td>
                        <td className="Message-td">Started to lose weight</td>
                        <td className="Images-td">
                            <td><img src={muscle2}/></td>
                            <td><img src={muscle4}/></td>
                            <td><img src={muscle5}/></td>
                        </td>
                    </tr>

                </table>
            </div>
        </div>
    );
  }
}

export default MyRecord;