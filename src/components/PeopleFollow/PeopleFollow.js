import React, {Component} from 'react';
import './PeopleFollow.css';
import rp from 'request-promise';
import httpMethod from '../HttpMethod/HttpMethod';


class PeopleFollow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleFollow: null
        };
    }

    componentDidMount = () => {
        var _this = this;
        rp(httpMethod.getFollowByStatus("('friend')"))
            .then(function (repos) {
                _this.setState({peopleFollow : repos})
            })
    }

    render() {
        if (this.state.peopleFollow == null){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div className="Message-section">
                    <table className="Outer-table">
                        {
                            this.state.peopleFollow.map(function (item) {
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

export default PeopleFollow;
