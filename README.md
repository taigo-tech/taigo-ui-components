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

```jsx
import { NotificationPopup } from '@juicetech/taigo-ui-components'
export default () => (
  <NotificationPopup
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

### Dialog | ErrorDialog | ConfirmDialog

```jsx
import { Dialog, ErrorDialog, ConfirmDialog } from '@juicetech/taigo-ui-components'
export default ({ children }) => (
  <div>
    <Dialog color="#FFF">
      {children}
    </Dialog>

    <ErrorDialog>
      {children}
    </ErrorDialog>

    <ConfirmDialog okText="Confirm" cancelText="Cancel">
      {children}
    </ConfirmDialog>
  </div>
)
```

---

### Card | EditableCard

```jsx
import { Card, EditableCard } from '@juicetech/taigo-ui-components'
export default ({ children }) => (
  <div>
    <Card title="Normal Card">
      {children}
    </Card>

    <EditableCard
      disabled={false}
      onFormToggle={() => {}}
    >
      {children}
    </EditableCard>
  </div>
)
```

---

### Avatar

```jsx
import { Avatar } from '@juicetech/taigo-ui-components'
export default () => (
  <Avatar
    name=""
    src=""
    editable={true}
    isLoading={false}
    onDeletePress={() => {}}
    onEditPress={() => {}}
  />
)
```

---

### RoundedButton

```jsx
import { RoundedButton } from '@juicetech/taigo-ui-components'
export default () => (
  <RoundedButton
    isLoading={false}
    text="Submit"
    color="#FFF"
    textColor="#000"
    size="small"
    onClick={() => {}}
  />
)
```

---

### TextInput

```jsx
import { TextInput } from '@juicetech/taigo-ui-components'
export default () => (
  <TextInput
    editable={true}
    disabled={false}
    labelProps={{}}
    textProps={{}}
    textFieldProps={{}}
    renderText={() => {}}
    error=""
    label=""
  />
)
```

---

### Checkbox

```jsx
import { Checkbox } from '@juicetech/taigo-ui-components'
export default () => (
  <Checkbox
    label=""
  />
)
```

---

### Switch

```jsx
import { Switch } from '@juicetech/taigo-ui-components'
export default () => (
  <Switch
    onLabel="On"
    offLabel="Off"
    onColor="#000"
    offColor="#FFF"
    labelColor="#CCC"
  />
)
```

---

### StatusBar

```jsx
import { StatusBar } from '@juicetech/taigo-ui-components'
export default () => (
  <StatusBar
    label="Main"
    color="darkblue"
    small={false}
    rounded={false}
    fixedWidth={false}
    subLabels={[
      { label: "Sub", color: "lightblue" }
    ]}
  />
)
```

---

### EmptyState

```jsx
import { EmptyState } from '@juicetech/taigo-ui-components'
const { EmptyOrder, EmptyChat } = EmptyState

export default () => (
  <div>
    <EmptyOrder
      image=""
      message=""
      content={<div />}
      actions={[<button />]}
      style={{}}
    />
    <EmptyChat
      image=""
    />
  </div>
)
```

---

### PageTabs

```jsx
import { PageTabs } from '@juicetech/taigo-ui-components'
export default () => (
  <PageTabs
    tabs={[
      { id: '1': label: 'Tab 1' },
      { id: '2': label: 'Tab 2' },
    ]}
    selected="1"
    onTabSelected={() => {}}
  />
)
```

---

### Snackbar

```jsx
import { Snackbar } from '@juicetech/taigo-ui-components'
const { SnackbarProvider, useSnackbar } = Snackbar

const ChildComponent = () => {
  const snackbar = useSnackbar();

  snackbar.success({ message: 'It\'s a success!' });
  snackbar.error({ message: 'It\'s an error!' });
  snackbar.info({ message: 'It\'s an info!' });
  snackbar.warning({ message: 'It\'s a warning!' });
}

export default () => (
  <SnackbarProvider>
    <ChildComponent />
  </SnackbarProvider>
)
```

---

### Searchbar

```jsx
import { Searchbar } from '@juicetech/taigo-ui-components'
export default () => (
  <Searchbar
    label="Search"
    onSearch={() => {}}
    onClear={() => {}}
    defaultValue=""
    placeholder=""
    loading={false}
  />
)
```

---

### FiltersDropdown

```jsx
import { FiltersDropdown } from '@juicetech/taigo-ui-components'
export default () => (
  <div>
    <FiltersDropdown
      label="Filter"
      defaultValue={['Pending']}
      onSubmit={() => {}}
      data={[
        { id: 'Paid', label: 'Paid' },
        { id: 'Pending', label: 'Pending' },
      ]}
    />
    <FiltersDropdown
      multiple={true}
      label="Filter (multiple)"
      defaultValue={{ filter1: ['Paid'], filter2: ['Active'] }}
      onSubmit={() => {}}
      data={[
        {
          id: 'filter1',
          label: 'Filter 1',
          selections: [
            { id: 'Paid', label: 'Paid' },
            { id: 'Pending', label: 'Pending' },
          ],
        },
        {
          id: 'filter2',
          label: 'Filter 2',
          selections: [
            { id: 'Active', label: 'Active' },
            { id: 'Inactive', label: 'Inactive' },
          ],
        },
      ]}
    />
  </div>
)
```

---

### Steps

```jsx
import { Steps } from '@juicetech/taigo-ui-components'
export default () => (
  <Steps
    orientation="horizontal"
    activeStep={0}
    steps={[
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Error Message', errorMsg: 'Error!!!' },
      { label: 'Complete' },
    ]}
  />
)
```

---

### TableList

```jsx
import { TableList } from '@juicetech/taigo-ui-components'
const { TableListItem } = TableList

export default () => (
  <TableList
    collapsible={false}
    defaultExpanded={false}
    minWidth={1200}
  >
    <TableListItem
      data={[
        {
          id: "id"
          label: "ID"
          value="1"
          size={2}
          render={() => {}}
          showLabel={true}
        },
        {
          id: "name"
          label: "Name"
          value="Cas Chan"
          size={10}
          render={() => {}}
          showLabel={false}
        }
      ]}
      title=""
      titleElement={<div />}
      showHeader={false}
      showLabel={false}
      transparent={false}
      onClick={() => {}}
      minWidth={1200}
      compact={false}
      borderless={false}
    >
      <div />
    </TableListItem>
  </TableList>
)
```

---

### ActionableListItem

```jsx
import { TableList, ActionableListItem } from '@juicetech/taigo-ui-components'
export default () => (
  <TableList>
    <ActionableListItem
      title="Title"
      subtitle="Subtitle"
      titleElement={<div />}
      content={<div />}
      actions={[
        <button />
      ]}
      defaultExpanded={false}
      onClick={() => {}}
    >
      <div />
    </ActionableListItem>
  </TableList>
)
```

---

### InfiniteList

Infinite scrolling list

```jsx
import { InfiniteList } from '@juicetech/taigo-ui-components'
export default () => (
  <InfiniteList
    onLoadMore={() => {}}
    count={0}
    scrollThreshold={0.8}
    scrollableTarget="scrollable-target"
    disabled={false}
  >
    <div />
    <div />
  </InfiniteList>
)
```

---

### DeliveryStatusList

```jsx
import { DeliveryStatusList } from '@juicetech/taigo-ui-components'
export default () => (
  <DeliveryStatusList
    data={[
      {
        index: 0,
        status: '',
        address: '',
        dateTime: '',
        selected: false,
        user: {
          id: '',
          name: '',
          phoneNumber: '',
        }
      }
    ]}
  />
)
```

---

### Colors

```jsx
import { Colors } from '@juicetech/taigo-ui-components'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  title: {
      backgroundColor: Colors.lightblue,
  },
}));
```

---

### Formats

```jsx
import { Formats } from '@juicetech/taigo-ui-components'
import moment from 'moment'

const { formatDateTime, formatMonetary } = Formats

console.log(formatDateTime(moment()))
// 15 Jul 2020 18:20pm

console.log(formatMonetary(12345.67, 2, 'RM'))
// RM 12,345.67
```





## License

MIT © [taigo-tech](https://github.com/taigo-tech)
