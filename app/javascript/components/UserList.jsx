import React from "react";
import Checkbox from './Checkbox';
import Option from './Option';
import Group from './Group'

class UserList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const allUsers = this.props.allUsers.map((user) => (
      // <Option
      //   id={user.id}
      //   name={user.username}
      //   image={user.image_url}
      // />
      <Checkbox
        id={user.id}
        name={user.username}
        checked={user.selected}
        onChange={this.props.checkboxFunction}
        key={user.id}
      />
    ));

    const friends = {
      color: "black",
      border: "solid 4px red",
      borderRadius: "15px",
      backgroundColor: "white",
      padding: "10px",
      fontSize: "2rem"
    };

    const friendList = {
      listStyleType: "none"
    };

    return(
      <>
      {this.props.showUsers &&
        <div>
          <h2 style={friends}>Friends</h2>
          <div>
            <form>
              {allUsers}
            </form>

            <Group
              selectedUsers = {this.props.selectedUsers}
            />

          </div>
        </div>
      }
      </>
    );
  }


}

export default UserList;
