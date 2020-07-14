# taigo-ui-components

> React components for Taigo project

 [![NPM](https://img.shields.io/npm/v/@juicetech/taigo-ui-components.svg?color=blue)](https://www.npmjs.com/package/@juicetech/taigo-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

 [![NPM](https://nodei.co/npm/@juicetech/taigo-ui-components.png?mini=true)](https://www.npmjs.com/package/@juicetech/taigo-ui-components)

## Install

```bash
npm install --save taigo-ui-components
```

## Usage

```jsx
import { ThemeProvider } from '@juicetech/taigo-ui-components'
```

## Components

### ThemeProvider

Default material theme wrapper.

```jsx
import { ThemeProvider } from '@juicetech/taigo-ui-components'
export default ({ children }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
)
```

---

### AppLayout

Dashboard styled layout

```jsx
import { AppLayout } from '@juicetech/taigo-ui-components'
export default ({ children }) => (
  <AppLayout
    logo=""
    menuData={[]}
    menuItemComponent={Link}
    footerMenu={[]}
    drawerWidth={300}
    rightContent={<div />}
    getPageTitle={() => {}}
    onMenuItemClick={() => {}}
    username=""
    email=""
  >
    {children}
  </AppLayout>
)
```

---

### AuthLayout

Authentication pages layout

```jsx
import { AuthLayout } from '@juicetech/taigo-ui-components'
export default ({ children }) => (
  <AuthLayout
    image=""
    imagePosition="left"
    logo=""
    title=""
    subtitle=""
  >
    {children}
  </AuthLayout>
)
```

---

### PageHeader

Dashboard header

```jsx
import { PageHeader } from '@juicetech/taigo-ui-components'
export default () => (
  <PageHeader
    name=""
    email=""
    profilePic=""
    profileMenuData={[]}
    extraNavigations={[<div />]}
    linkComponent={Link}
    onProfileClicked={() => {}}
  />
)
```

---

### NotificationList

Notification listing

```jsx
import { NotificationList } from '@juicetech/taigo-ui-components'
export default () => (
  <NotificationList
    items={[]}
    listItemComponent={Link}
    onItemClick={() => {}}
  />
)
```

---

### NotificationPopup

Notification popup

```jsx
import { NotificationList } from '@juicetech/taigo-ui-components'
export default () => (
  <NotificationList
    loading
    items={[]}
    count={0}
    viewAllPath=""
    listItemComponent={Link}
    header={<div />}
    footer={<div />}
  />
)
```

---

### Dialog

Dialog popup

```jsx
import { Dialog } from '@juicetech/taigo-ui-components'
export default ({ children }) => (
  <Dialog color="#FFF">
    {children}
  </Dialog>
)
```




## License

MIT © [taigo-tech](https://github.com/taigo-tech)
