import React, {Component} from 'react';
import './PeopleIFollowed.css';
import httpMethod from '../HttpMethod/HttpMethod';
import rp from 'request-promise';



class PeopleIFollowed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleIFollow: null
        };
    }

    sendMessage = (id) => {
        this.setState({
            currentIndex: id
        });
    }

    sendMessage = () => {
        httpMethod.postMethod('localhost', '{"aaa":"BBB"}')
    }

    componentDidMount = () => {
        var _this = this;
        rp(httpMethod.getFollowByStatus("('follow','friend')"))
            .then(function (repos) {
                _this.setState({peopleIFollow : repos})
            })
    }

    render() {
        if (this.state.peopleIFollow == null){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div className="Message-section">
                    <table className="Outer-table">
                            {
                                this.state.peopleIFollow.map(function (item) {
                                    return (
                                        <tr>
                                            <td><img src={item.Avatar}/></td>
                                            <td>{item.Name}</td>
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

export default PeopleIFollowed;
