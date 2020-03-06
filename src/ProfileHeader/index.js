import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

export default class ProfileHeader extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props
    console.log(text);
    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}
