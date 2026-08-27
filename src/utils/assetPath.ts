export function assetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
