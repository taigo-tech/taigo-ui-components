const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = path => reg.test(path);

const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;

export const isBrowser = () =>
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  !isNode;

export const getFlatMenus = (menuData = []) => {
  let menus = {};
  menuData.forEach(item => {
    if (!item) {
      return;
    }
    menus[item.path || '/'] = item;
    if (item.routes) {
      menus = { ...menus, ...getFlatMenus(item.routes) };
    }
  });
  return menus;
};