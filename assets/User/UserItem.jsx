class UserItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      members: []
    }
    this.delUser = this.delUser.bind(this);
  }

  delUser(){
    {/* 使用 DELETE method*/}
    $.ajax({
      url: `/user/destroy/${this.props.id}`,
      type: 'DELETE',
      success: (result) => {
        {/* 從UserPage 傳到 UserList,再傳到 UserItem 的 getUsers() */}
        this.props.getUsers();
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  render(){
    return(
      <div>
       <span>ID : {this.props.id}</span> ,
       <span>Name : {this.props.name}</span>
       <button className="btn btn-danger btn-sm pull-right" onClick={this.delUser} > Del </button>
      </div>
    );
  }
}

module.exports = UserItem;
