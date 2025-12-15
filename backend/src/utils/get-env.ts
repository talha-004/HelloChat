export const getEnv = (key: string, defaultValue?: string): string => {
  const val = process.env[key] ?? defaultValue;
  if (!val) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return val;
};
