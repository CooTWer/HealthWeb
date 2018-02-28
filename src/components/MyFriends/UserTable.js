import React, {Component} from 'react';
import classNames from 'classnames';

class UserTable extends Component {

  renderUserList(userList) {
    return (
      <div>
        {
          userList.map(user => {
            return (
              <div key={user} className={classNames('user-info', user)}>
                <image src='http://5b0988e595225.cdn.sohucs.com/images/20180227/f14bd5fce118481c9cb0f6fa1553ee77.jpeg'/>
                <div className='user-name'>
                  {user}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  render() {
    const userList = this.props.userList;
    return (
      <div className='user-list'>
        {this.renderUserList(userList)}
      </div>
    )
  }
}

export default UserTable;