var UserItem = require('./UserItem.jsx');

class UserList extends React.Component{
  constructor( props ){
    super( props );
  }

  render(){
    return(
      <div>
        <h2 className="text-left"> Users List </h2>
        <ul className="list-group">
          {
            this.props.members.map( (userName) => {
              return <li className="list-group-item">
                      <UserItem id={userName.id} name={userName.name} getUsers={this.props.getUsers}/>
                    </li> ;
            })
          }
        </ul>

      </div>
    );
  }
}

module.exports = UserList;
