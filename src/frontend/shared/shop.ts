const SHOP_BASE = "/eshop";
const SHOP_CURRENCY = "CZK";
const ROUTE_HOLE = "_";
const STATIC_ROUTES = ["/", "/cart", "/checkout", "/account"];
const TEMPLATE_ROUTES = { order: "/order/", product: "/products/", reset: "/account/reset/" };

function templatePaths(): string[] {
  return Object.values(TEMPLATE_ROUTES).map((prefix) => `${prefix}${ROUTE_HOLE}`);
}

function routeTail(route: string): string {
  const tail = decodeURIComponent(route.split("/").pop() ?? "");
  return tail === ROUTE_HOLE ? "" : tail;
}

export { ROUTE_HOLE, routeTail, SHOP_BASE, SHOP_CURRENCY, STATIC_ROUTES, TEMPLATE_ROUTES, templatePaths };
