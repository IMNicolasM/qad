const moduleName = 'ipin';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase: urlBase,
  version: moduleVersion,
  ads: `${urlBase}/pins`,
  adStatus: `${urlBase}/pins/status`,
  categories: `${urlBase}/categories`,
  ups: `${urlBase}/ups`,
}
