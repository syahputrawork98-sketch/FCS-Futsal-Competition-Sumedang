export function parseGroupQuery(rawGroup?: string | string[]): string | null {
  if (!rawGroup) return null;
  const val = Array.isArray(rawGroup) ? rawGroup[0] : rawGroup;
  const normalized = val?.trim();
  if (normalized === "GRPA" || normalized === "GRPB") {
    return normalized;
  }
  return null;
}
