import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types';

class AvatarSelect extends React.Component {
  static porpTypes = {
    setAvatar: PropTypes.func
  }
  state = {
    icon: null
  }
  constructor(props) {
    super(props)
    this.avatarList = []
    for (let i = 0; i < 20; i++) {
      this.avatarList.push({
        text: '头像' + (i + 1),
        icon: require(`../../assets/images/avatar/头像${i+1}.png`).default
      })
    }
  }

  selectAvatar = ({icon,text}) => {
    this.setState({icon})
    this.props.setAvatar('avatar',text)
  }
  render () {
    // const listAvatar = '请选择头像'
    const {icon} = this.state
    const gridAvatar = icon ? <p>已选择头像：<img src={icon} alt="avatar" /></p> : '请选择头像'
    return (
      <div>
        <List renderHeader={() => gridAvatar}>
          <Grid data={this.avatarList} columnNum={5} onClick={this.selectAvatar}>
          </Grid>
        </List>
      </div>
    )
  }
}


export default AvatarSelect
