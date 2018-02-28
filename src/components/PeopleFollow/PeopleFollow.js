import React, {Component} from 'react';
import './PeopleFollow.css';
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


class PeopleFollow extends Component {

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
                <div className="Message-section">
                    <table className="Outer-table">
                        <tr>
                            <td><img src={Profile1}/></td>
                            <td>
                                <p>Jerry</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default PeopleFollow;
