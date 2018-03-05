import React, {Component} from 'react';
import imgIcon from './../../resource/imgIcon.png';
import httpMethod from '../HttpMethod/HttpMethod';
import rp from 'request-promise';
import Profile2 from './../../resource/Profile2.jpeg';
import './MyRecord.css';

class MyRecord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myInfo: null
        };
    }

    componentDidMount = () => {
        var _this = this;
        rp(httpMethod.getMyInfo)
            .then(function (repos) {
                _this.setState({myInfo : repos})
            })
    }
    
  render() {
      if (this.state.myInfo == null){
          return <div>Loading...</div>;
      }
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
                    {
                        this.state.myInfo.map(function (item) {
                            return(
                                <tr>
                                    <td className="Date-td">{item.Publish_Date}</td>
                                    <td className="Message-td">{item.Text}</td>
                                    <td className="Images-td">
                                        {
                                            item.Image.split(',').map(function (image) {
                                                return (
                                                    <td><img src={image}/></td>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
  }
}

export default MyRecord;