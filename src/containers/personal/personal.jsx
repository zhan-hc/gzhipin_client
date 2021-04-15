import React from 'react'
import {Result, List, WhiteSpace, Modal, Button} from 'antd-mobile'
import { connect } from 'react-redux'
import { resetUser } from '../../redux/actions'
import Cookies from 'js-cookie'

const Item = List.Item
const Brief = Item.Brief
class Personal extends React.Component {
  handleLogout = () => {
    Modal.alert('退出','确认退出登录吗？',[
      {
        text: '取消',
        onPress: () => console.log('cancel')
      },
      {
        text: '确认',
        onPress: () => {
          Cookies.remove('userid')
          this.props.resetUser()
        }
      },

    ])
  }
  render () {
    const {post,avatar,username,company,info,salary} = this.props.user
    return (
      <div>
        <Result  style={{marginTop: 50}}
          img={<img src={require(`../../assets/images/avatar/${avatar}.png`).default} style={{width: 50}}
          alt="header"/>}
          title={username}
          message={company}/>
        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            <Brief>职位: {post}</Brief>
            <Brief>简介: {info}</Brief>
            {salary ? <Brief>薪资: {salary}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace/>
        <List>
          <Button type='warning' onClick={this.handleLogout}>退出登录</Button>
        </List>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {resetUser}
)(Personal)
