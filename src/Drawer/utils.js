import React, { createElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { pathToRegexp } from 'path-to-regexp';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
import { isUrl } from '../utils/utils';

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
			.filter(item => item.title && !item.hideInMenu)
			.map(item => this.getSubMenuOrItem(item, level))
			.filter(item => item);
	}

	getSubMenuOrItem = (item, level) => {
		const { location: { pathname } } = this.props;

		if (Array.isArray(item.routes) && !item.hideChildrenInMenu && item.routes.some(child => child && !!child.title)) {
			return (
				<SubMenu key={item.key || item.path} item={item} defaultOpen={item.routes.some(child => child && pathToRegexp(child.path).test(pathname))}>
					{this.getNavMenuItems(item.routes, level + 1)}
				</SubMenu>
			)
		}

		return this.getMenuItemPath(item, level);
	}

	getMenuItemPath = (item, level) => {
		const itemPath = this.conversionPath(item.path || '/');
		const { location: { pathname } } = this.props;

		if (isUrl(itemPath)) {
			return (
				<a href={itemPath}>
					{createElement(item.icon)} <span>{item.title}</span>
				</a>
			);
		}

		return (
			<MenuItem
				key={item.key || item.path} item={item}
				menuItemComponent={this.props.menuItemComponent}
				onClick={this.props.onMenuItemClick}
				level={level}
				selected={pathToRegexp(item.path).test(pathname)}
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