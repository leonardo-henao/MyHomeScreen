export const GetIconFromWebsite = (page: string) => {
  const pathFavIcons = 'https://www.google.com/s2/favicons?domain=';
  const pathSize = '&sz=128';

  return `${pathFavIcons}${page}${pathSize}`;
};
