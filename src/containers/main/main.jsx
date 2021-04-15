import React from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Laoban from '../laoban/laobao'
import Dashen from '../dashen/dashen'
import Message from '../message/message'
import Personal from '../personal/personal'
import NotFound from '../../commponents/not-found/not-found'
import NavFooter from '../../commponents/nav-footer/nav-footer'
import {NavBar} from 'antd-mobile'
import Cookies from 'js-cookie'
import {getUser} from '../../redux/actions'
import {getRedirectTo} from '../../utils/index'
class Main extends React.Component {
  navList = [
    {
      path: '/laoban',
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神'
    },
    {
      path: '/dashen',
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板'
    },
    {
      path: '/message',
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息'
    },
    {
      path: '/personal',
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人'
    }
  ]
  componentDidMount () {
    // cookie还没过期(登陆过)
    const userid = Cookies.get('userid')
    const {_id} = this.props.user
    if (userid && !_id) {
      this.props.getUser()
    }
  }
  render () {
    const pathname = this.props.location.pathname
    const userid = Cookies.get('userid')
    if (!userid) {
      return <Redirect to='/login' />
    }
    const {user} = this.props
    if (!user._id) {
      return null
    } else {
      let path = this.props.location.pathname
      if (path === '/') {
        path = getRedirectTo(user.type, user.header)
        return <Redirect to={path} />
      }
      if (user.type === 'laoban') { // 过滤底部导航条
        this.navList[1].hide = true
        } else {
        this.navList[0].hide = true
        }
    }
    const currentNav = this.navList.find(nav => nav.path === pathname)
    return (
      <div>
        {currentNav ? <NavBar className='stick-top'>{currentNav.title}</NavBar> : null}
        <Switch>
          <Route path='/laobanInfo' component={LaobanInfo}/>
          <Route path='/dashenInfo' component={DashenInfo}/>
          <Route path='/laoban' component={Laoban}/>
          <Route path='/dashen' component={Dashen}/>
          <Route path='/message' component={Message}/>
          <Route path='/personal' component={Personal}/>
          <Route component={NotFound}/>
        </Switch>
        {currentNav ? <NavFooter unReadCount={this.props.unReadCount} navList={this.navList}/> : null}
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {getUser}
)(Main)
