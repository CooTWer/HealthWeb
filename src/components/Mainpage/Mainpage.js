import React, {Component} from 'react';
import rp from 'request-promise';
import './Mainpage.css';
import imgIcon from './../../resource/imgIcon.png';
import httpMethod from '../HttpMethod/HttpMethod';



class Mainpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: null
        };
    }

    componentDidMount = () => {
        var _this = this;
        rp(httpMethod.getUserInfo)
            .then(function (repos) {
                _this.setState({userInfo : repos})
            })
    }

    js_yyyy_mm_dd_hh_mm_ss = () => {
        var now = new Date();
        var year = "" + now.getFullYear();
        var month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
        var day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
        var hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
        var minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
        var second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

    sendMessage = () => {
        var myfile = document.getElementById('myfile');
        var mytext = document.getElementById('mytext');
        var fileName = 'http://localhost:3000/resource/';
        var textValue = mytext.value;
        if(myfile.files[0] != undefined){
            fileName += myfile.files[0].name;
        }
        var myDate = this.js_yyyy_mm_dd_hh_mm_ss()
        var _this = this;
        rp(httpMethod.postMyMessage(textValue, fileName, myDate))
            .then(function (repos) {
                alert("Message has been published");
            })
        
        // httpMethod.postMethod('http://localhost:8080/putMyAllMessage', '{"aaa":"BBB"}')
    }

    render() {
        if (this.state.userInfo == null){
            return <div>Loading...</div>;
        }
        console.log('this.state.userInfo : ', this.state.userInfo);
        return (
            <div>
                <div className="Mainpage-header">
                    <div className="Mainpage-header-publish">
                        <input id="mytext" type="text" placeholder="Type Here..."></input>
                        <div className="Mainpage-header-img">
                            <img src={imgIcon}/>
                            <input id="myfile" type="file"></input>
                        </div>
                    </div>
                    <div className="Mainpage-header-send">
                        <button onClick={() => this.sendMessage()}>SEND</button>
                    </div>
                </div>
                <div className="Message-section">
                    <table className="Outer-table">

                        {
                            this.state.userInfo.map(function (item) {
                                return (
                                    <tr>
                                        <td><img src={item.Avatar}/></td>
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
                                        <td>
                                            <p>{item.Publish_Date}</p>
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
