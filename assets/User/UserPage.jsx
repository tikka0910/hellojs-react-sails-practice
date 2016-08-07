require('vendor/bootstrap.scss');
require('User/User.scss');

var UserList = require('./UserList.jsx');
var UserAddButton = require('./UserAddButton.jsx');


class UserPage extends React.Component {
  constructor( props ){
    super(props);
    this.state = {
      members: []
    }
    this.getUsers = this.getUsers.bind(this);
  }

  componentWillMount(){
    this.getUsers();
  }

  getUsers(){
    $.ajax({
      url: '/user',
      type: 'get',
      success: (result) => {
        this.setState({members: result})
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row center">
          <h1 className="text-center" >User Page</h1>
          <UserAddButton getUsers={this.getUsers} />
          <UserList members={this.state.members} getUsers={this.getUsers} />
        </div>
      </div>
    );
  }
}

module.exports = UserPage;
