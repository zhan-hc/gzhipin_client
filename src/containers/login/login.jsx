import React from 'react'
import { 
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile';
import Logo from '../../commponents/logo/logo.jsx'
class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }
  Login = () => {
    console.log(this.state)
  }
  toRegister = () => {
    this.props.history.replace('/register')
  }
  handleChange = (name,val) => {
    this.setState({[name]: val})
  } 
  render () {
    return ( 
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem placeholder='请输入用户名' onChange={val => {this.handleChange('username',val)}}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='请输入密码' type="password" onChange={val => {this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <Button onClick={this.Login} type="primary">登录</Button>
            <WhiteSpace/>   
            <Button  onClick={this.toRegister}>注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}


export default Login
