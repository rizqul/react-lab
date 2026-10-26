// 2. provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
}
