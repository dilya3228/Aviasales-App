import { Spin } from 'antd'

import classes from './Loader.module.scss'

const Loader = () => {
  return <Spin className={classes.loader}></Spin>
}

export default Loader
