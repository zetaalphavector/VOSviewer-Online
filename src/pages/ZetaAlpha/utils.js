/*
prod:
domain: https://search.zeta-alpha.com/, api: https://api.zeta-alpha.com/
domain: https://xxx.com/, api: https://api.xxx.com/
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
    : url.hostname.split(".").slice(-2).join(".");

  const protocol = url.hostname.includes("localhost") ? "https:" : url.protocol;

  return `${protocol}//${api}.${domain}`;
};

const getSubdomain = (url) => {
  const { hostname } = new URL(url);
  return hostname.split(".").slice(0, -2).pop();
};

export const isAcceptableUrl = (url) => {
  if (url.includes("localhost:")) {
    return true;
  }

  const subdomain = getSubdomain(url);

  return subdomain === "search" || subdomain.endsWith("-search");
};
