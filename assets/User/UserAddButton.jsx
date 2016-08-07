class UserAddButton extends React.Component{
  constructor(props){
    super(props);
    this.createUser = this.createUser.bind(this);
  }

  createUser(){
    $.ajax({
      url: `/user/create?name=${this.input.value}` ,
      type: 'get',
      success: (result) => {
        {/* UserPage 的 getUsers() */}
        this.props.getUsers();
        {/* 這是在chrome console上看到的訊息 */}
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    });
    {/*清掉輸入值*/}
    this.input.value ="";
  }

  render(){
    return(
      <div className="input-group">
        <input  className="form-control" type="text" ref={(input) => this.input = input } placeholder="input user name..." />
        <span className="input-group-btn">
          <button className="btn btn-default" onClick={this.createUser} > Add New User </button>
        </span>
      </div>
    );
  }
}

module.exports = UserAddButton;
