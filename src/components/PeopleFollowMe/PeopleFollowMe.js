import React, {Component} from 'react';
import './PeopleFollowMe.css';
import httpMethod from '../HttpMethod/HttpMethod';
import rp from 'request-promise';



class PeopleFollowMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleFollowMe: null
        };
    }

    componentDidMount = () => {
        var _this = this;
        rp(httpMethod.getFollowByStatus("('followed','friend')"))
            .then(function (repos) {
                _this.setState({peopleFollowMe : repos})
            })
    }

    render() {
        if (this.state.peopleFollowMe == null){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div className="Message-section">
                    <table className="Outer-table">
                        {
                            this.state.peopleFollowMe.map(function (item) {
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

export default PeopleFollowMe;
