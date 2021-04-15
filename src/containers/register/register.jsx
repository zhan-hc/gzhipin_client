import React from 'react'
import Logo from '../../commponents/logo/logo.jsx'
import { 
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile';
import {connect} from 'react-redux'
import {register} from '../../redux/actions'
import {Redirect} from 'react-router-dom'
const ListItem = List.Item
class Register extends React.Component {
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen'
  }
  register = () => {
    // console.log(this.state)
    this.props.register(this.state)
  }
  toLogin = () => {
    this.props.history.replace('/login')
  }
  handleChange = (name,val) => {
    this.setState({[name]: val})
  } 
  render () {
    const {type} = this.state
    const {msg, redirectTo} = this.props.user
    if (redirectTo) {
      return <Redirect to={redirectTo} />
    }
    return ( 
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            {msg? <div className='error-msg'>{msg}</div> : null}
            <InputItem placeholder='请输入用户名' onChange={val => {this.handleChange('username',val)}}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='请输入密码' type="password" onChange={val => {this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='请输入确认密码' type="password" onChange={val => {this.handleChange('password2',val)}}>确认密码:</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>用户类型:</span>
              &nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'dashen'} onChange={() => {this.handleChange('type','dashen')}}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'laoban'} onChange={() => {this.handleChange('type','laoban')}}>老板</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button onClick={this.register} type="primary">注册</Button>
            <WhiteSpace/>
            <Button  onClick={this.toLogin}>已有帐户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
  state => ({user: state.user}),
  {register}
)(Register)
// export default Register
