function normalizeBase(base: string) {
  if (!base) return '/';
  return base.endsWith('/') ? base : `${base}/`;
}

function cleanInputPath(path: string, base: string) {
  if (!path || path === '/') return '';

  const withoutLeadingSlash = path.startsWith('/') ? path.slice(1) : path;
  const baseWithoutLeadingSlash = base.startsWith('/') ? base.slice(1) : base;

  if (withoutLeadingSlash.startsWith(baseWithoutLeadingSlash)) {
    return withoutLeadingSlash.slice(baseWithoutLeadingSlash.length);
  }

  return withoutLeadingSlash;
}

export function withBase(path: string): string {
  const base = normalizeBase(import.meta.env.BASE_URL || '/');
  const cleanPath = cleanInputPath(path, base);
  return `${base}${cleanPath}`;
}

export function routePath(path: string): string {
  return withBase(path);
}

export function assetPath(path: string): string {
  return withBase(path);
}
