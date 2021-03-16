import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Message, Container, Header, Aside, Main
  , Menu, Submenu, MenuItemGroup, MenuItem, Table, TableColumn, Card, Breadcrumb, BreadcrumbItem,
  Row, Col, Switch, Tooltip, Pagination, Dialog, MessageBox, Tag, Tree
} from 'element-ui'

Vue.use(Tree)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Breadcrumb)
Vue.use(Col)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
