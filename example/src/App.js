import React, { Component } from 'react'

import { Drawer, ProfileHeader } from 'taigo-ui-components'

export default class App extends Component {
  render () {
    return (
      <div>
        <Drawer text='Drawer' />
        <ProfileHeader text='ProfileHeader' />

      </div>
    )
  }
}
