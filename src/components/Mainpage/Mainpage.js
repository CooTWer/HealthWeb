import React, {Component} from 'react';
import './Mainpage.css';
import imgIcon from './../../resource/imgIcon.png';
import httpMethod from '../HttpMethod/HttpMethod';

class Mainpage extends Component {

  sendMessage = (id) => {
    this.setState({
      currentIndex: id
    });
  }

  sendMessage = () => {
    httpMethod.postMethod('localhost', '{"aaa":"BBB"}')
  }

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
      </div>
    );
  }
}

export default Mainpage;
