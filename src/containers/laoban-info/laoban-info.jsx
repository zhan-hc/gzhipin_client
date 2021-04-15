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
class Laoban extends React.Component {
  state = {
    avatar: '',
    post: '',
    info: '',
    company: '',
    salary: ''
  }
  handleChange = (name,val) => {
    this.setState({[name]: val})
  }
  render () {
    const {type, avatar} = this.props.user
    if (avatar) { // 信息已经完善
      const path = type === 'laoban' ? '/laoban' : '/dashen'
      return <Redirect to={path} />
    }
    return (
      <div>
        <NavBar>老板信息完善</NavBar>
        <AvatarSelect setAvatar={this.handleChange}/>
        <InputItem placeholder='请输入招聘职位' onChange={val => this.handleChange('post',val)}>招聘职位：</InputItem>
        <InputItem placeholder='请输入公司名称' onChange={val => this.handleChange('company',val)}>公司名称：</InputItem>
        <InputItem placeholder='请输入职位薪资' onChange={val => this.handleChange('salary',val)}>职位薪资：</InputItem>
        <TextareaItem title='职位要求' onChange={val => this.handleChange('info',val)} rows={3}/>
        <Button type="primary" onClick={() => this.props.updateUser(this.state)}>保存</Button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {updateUser}
)(Laoban)
