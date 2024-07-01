/*
prod:
domain: https://search.zeta-alpha.com/, api: https://api.zeta-alpha.com/
domain: https://xxx.com/, api: https://api.xxx.com/
domain: https://search.zetaalpha-poc.xxx.net/, api: https://api.zetaalpha-poc.xxx.net/
stages:
domain: https://search-staging.zeta-alpha.com/, api: https://api-staging.zeta-alpha.com
domain: https://search-staging-pr-XXX.zeta-alpha.com/, api: https://api-staging.zeta-alpha.com
domain: https://search-staging.xxx.com/, api: https://api-staging.xxx.com
domain: https://search-staging-pr-XXX.xxx.com/, api: https://api-staging.xxx.com
domain: http://localhost:3000/, api: https://api-staging.zeta-alpha.com
 */
export const getBaseUrl = (origin) => {
  const url = new URL(origin);

  const api = url.hostname.includes("localhost")
    || url.hostname.includes("search-staging")
    ? "api-staging"
    : "api";

  const domain = url.hostname.includes("localhost")
    ? "zeta-alpha.com"
    : (url.hostname.split(".").length > 2 ? url.hostname.split(".").slice(1).join(".") : url.hostname);

  const protocol = url.hostname.includes("localhost") ? "https:" : url.protocol;

  return `${protocol}//${api}.${domain}`;
};

const getSubdomain = (url) => {
  const { hostname } = new URL(url);
  return hostname.split(".").slice(0, 1).pop();
};

export const isAcceptableOrigin = (origin) => {
  if (origin.includes("localhost:")) {
    return true;
  }

  const subdomain = getSubdomain(origin);

  return subdomain === "search" || subdomain.endsWith("-search") || subdomain.startsWith("search-");
};

export const isAcceptableBackendUrl = (url, origin) => {
  const originBaseUrl = getBaseUrl(origin);
  return url.startsWith(originBaseUrl);
};
