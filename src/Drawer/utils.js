import React, { createElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
const isUrl = path => reg.test(path);

const useStyles = makeStyles(theme => ({
	nested: {
			paddingLeft: theme.spacing(4),
	},
}));

export default class MenuUtil {
	constructor(props) {
		this.props = props;
	}

	getNavMenuItems = (menusData = [], level = 0) => {
		return menusData
			.filter(item => item.name && !item.hideInMenu)
			.map(item => this.getSubMenuOrItem(item, level))
			.filter(item => item);
	}

	getSubMenuOrItem = (item, level) => {
		if (
			Array.isArray(item.routes) &&
      !item.hideChildrenInMenu &&
      item.routes.some(child => child && !!child.name)
		) {
			return (
				<SubMenu key={item.key || item.path} item={item}>
					{this.getNavMenuItems(item.routes, level + 1)}
				</SubMenu>
			)
		}

		return this.getMenuItemPath(item, level);
	}

	getMenuItemPath = (item, level) => {
		const itemPath = this.conversionPath(item.path || '/');

		if (isUrl(itemPath)) {
			return (
				<a href={itemPath}>
          {createElement(item.icon)} <span>{item.name}</span>
        </a>
			);
		}

		return (
			<MenuItem
				key={item.key || item.path} item={item}
				level={level}
				onClick={this.props.onMenuClick}
			/>
		);
	}

	conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path;
    }
    return `/${path || ''}`.replace(/\/+/g, '/');
  };
}