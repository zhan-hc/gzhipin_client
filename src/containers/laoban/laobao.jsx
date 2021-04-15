import React from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/actions'
import UserList from '../../commponents/user-List/user-List'
class Laoban extends React.Component {
  componentDidMount () {
    this.props.getUserList('dashen')
  }
  render () {
    return (
      <UserList userList={this.props.userList}/>
    )
  }
}

export default connect(
  state => ({userList: state.userList}),
  {getUserList}
)(Laoban)
