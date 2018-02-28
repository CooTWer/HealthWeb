import React, {Component} from 'react';
import './Finding.css';
import imgIcon from './../../resource/imgIcon.png';
import httpMethod from '../HttpMethod/HttpMethod';
import Profile1 from './../../resource/Profile1.jpeg';
import Profile2 from './../../resource/profile2.jpeg';
import Profile3 from './../../resource/profile3.jpeg';
import muscle1 from './../../resource/muscle1.jpeg';
import muscle2 from './../../resource/muscle2.jpeg';
import muscle3 from './../../resource/muscle3.jpeg';
import muscle4 from './../../resource/muscle4.jpeg';
import muscle5 from './../../resource/muscle5.jpeg';


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
                <div className="Message-section">
                    <table className="Outer-table">
                        <tr>
                            <td><span>N0 1</span><img src={Profile1}/></td>
                            <td>
                                <p>Fitness brought to me is not only the change of the body, more important is the mentality change</p>
                                <table className="Message-inner-section">
                                    <tr>
                                        <td><img src={muscle1}/></td>
                                        <td><img src={muscle2}/></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td><span>No 2</span><img src={Profile2}/></td>
                            <td>
                                <p>Sometimes I want to give up losing weight, because this is a painful thing for me, but on the Internet to see so many friends are insist, I also learn to insist, unexpectedly, after a month there are greatly improved.</p>
                                <table className="Message-inner-section">
                                    <tr>
                                        <td><img src={muscle3}/></td>
                                        <td><img src={muscle4}/></td>
                                        <td><img src={muscle5}/></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td><span>No 3</span><img src={Profile3}/></td>
                            <td>
                                <p>Sometimes I want to give up losing weight, because this is a painful thing for me, but on the Internet to see so many friends are insist, I also learn to insist, unexpectedly, after a month there are greatly improved.</p>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        );
    }
}

export default Mainpage;
