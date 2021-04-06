import React from 'react'
import { Button, Toast } from 'antd-mobile'
class App extends React.Component {

  handleClick = () => {
    Toast.info('提交成功',1);
  }

  render () {
    return (
      <Button type="primary" onClick={this.handleClick}>提交</Button>
    )
  }
}

export default App




