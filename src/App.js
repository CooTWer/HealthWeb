import React, {Component} from 'react';
import './App.css';
import Mainpage from './components/Mainpage/Mainpage';
import MyRecord from './components/MyRecord/MyRecord';
import MyFriends from './components/MyFriends/MyFriends';
import Finding from './components/Finding/Finding';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {tabName: "Main Page", id: 1},
        {tabName: "My Record", id: 2},
        {tabName: "Finding", id: 3},
        {tabName: "My Friend", id: 4}
      ],
      currentIndex: 1,
    };
  }

  tabChoiced = (id) => {
    this.setState({
      currentIndex: id
    });
  }

  render() {

    var _this = this;
    var isBox1Show = this.state.currentIndex == 1 ? 'block' : 'none';
    var isBox2Show = this.state.currentIndex == 2 ? 'block' : 'none';
    var isBox3Show = this.state.currentIndex == 3 ? 'block' : 'none';
    var isBox4Show = this.state.currentIndex == 4 ? 'block' : 'none';

    var tabList = this.state.tabs.map(function (res, index) {

      return <div onClick={this.tabChoiced.bind(_this, res.id)}>{res.tabName}</div>

    }.bind(_this));

    return (
      <div className="App">
        <div className="App-footer">
          {tabList}
        </div>

        <div>
          <div style={{"display": isBox1Show}}>
            <Mainpage/>
          </div>
          <div style={{"display": isBox2Show}}>
            <MyRecord/>
          </div>
          <div style={{"display": isBox3Show}}>
            <Finding/>
          </div>
          <div style={{"display": isBox4Show}}>
            <MyFriends />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
