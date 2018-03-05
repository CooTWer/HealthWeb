import React, {Component} from 'react';
import constants from '../constants';
import classNames from 'classnames';
import './MyFriend.css';
import PeopleFollowMe from './../PeopleFollowMe/PeopleFollowMe';
import PeopleIFollowed from './../PeopleIFollowed/PeopleIFollowed';
import PeopleFollow from './../PeopleFollow/PeopleFollow';


class MyFriends extends Component {
  state = {
    metrics: constants.myFriendMetrics.peopleIFollow
  };

  renderNavigator() {
    return (
      <div className='my-friend-navigator'>
        {Object.keys(constants.myFriendMetrics).map(key => {
          return (
            <div key={key}
                 className={classNames("my-friends-selector", key)}
                 onClick={this.showMetrics.bind(this, key)}>
              {constants.myFriendMetrics[key]}
            </div>
          )
        })}
      </div>
    )
  }

  renderUserList() {
    switch (this.state.metrics) {
      case constants.myFriendMetrics.peopleFollowingMe:
        return <PeopleFollowMe />;
      case constants.myFriendMetrics.myFriends:
        return <PeopleFollow/>;
      default :
        return <PeopleIFollowed />;
    }
  }
  
  showMetrics(key) {
    this.setState({
      metrics: constants.myFriendMetrics[key],
    })
  }

  render() {
    return (
      <div className='my-friend'>
        {this.renderNavigator()}
        {this.renderUserList()}
      </div>
    );
  }
}

export default MyFriends;
