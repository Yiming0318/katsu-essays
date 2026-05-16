export function withBase(path: string) {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}

export function assetPath(path: string) {
  return withBase(path);
}
