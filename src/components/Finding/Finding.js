import React, {Component} from 'react';
import './Finding.css';
import imgIcon from './../../resource/imgIcon.png';
import httpMethod from '../HttpMethod/HttpMethod';
import rp from 'request-promise';


class Mainpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rankUserInfo: null
        };
    }

    sendMessage = (id) => {
        this.setState({
            currentIndex: id
        });
    }

    componentDidMount = () => {
        var _this = this;
        rp(httpMethod.getRankInfo)
            .then(function (repos) {
                _this.setState({rankUserInfo : repos})
            })
    }

    sendMessage = () => {
        httpMethod.postMethod('localhost', '{"aaa":"BBB"}')
    }

    render() {

        if (this.state.rankUserInfo == null){
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
                    <table className="Outer-table">
                        {
                            this.state.rankUserInfo.map(function (item) {
                                return (
                                    <tr>
                                        <td><span>Love {item.Love}</span><img src={item.Avatar}/></td>
                                        <td>
                                            <p>{item.Text}</p>

                                            <table className="Message-inner-section">
                                                <tr>
                                                    {
                                                        item.Image.split(',').map(function (image) {
                                                            if (image != null){
                                                                return (
                                                                    <td><img src={image}/></td>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </tr>
                                            </table>
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

export default Mainpage;
