import React from 'react'
import { connect } from 'react-redux'
import { 
  NavBar,
  TextareaItem,
  InputItem,
  Button
} from 'antd-mobile';
import {Redirect} from 'react-router-dom'
import {updateUser} from '../../redux/actions'
import AvatarSelect from '../../commponents/avatar/avatar-select'

class Dashen extends React.Component {
  state = {
    avatar: '',
    post: '',
    info: '',
  }
  handleChange = (name,val) => {
    this.setState({[name]: val})
  }
  render () {
    const {type, avatar} = this.props.user
    if (avatar) { // 信息已经完善
      const path = type === 'dashen' ? '/dashen' : '/laoban'
      return <Redirect to={path} />
    }
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <AvatarSelect  setAvatar={this.handleChange}/>
        <InputItem placeholder='请输入求职岗位'  onChange={val => this.handleChange('post',val)}>求职岗位：</InputItem>
        <TextareaItem title='个人介绍' rows={3}  onChange={val => this.handleChange('info',val)}/>
        <Button type="primary" onClick={() => this.props.updateUser(this.state)}>保存</Button>
      </div>
    )
  }
}

export default connect(
  state => ({user:state.user}),
  {updateUser}
)(Dashen)
