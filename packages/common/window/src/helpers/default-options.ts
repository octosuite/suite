import { BrowserWindowConstructorOptions } from 'electron'

export function getDefaultOptions(
  base: BrowserWindowConstructorOptions
): BrowserWindowConstructorOptions {
  return {
    ...base,
    webPreferences: {
      ...base.webPreferences,
      nodeIntegration: true
    }
  }
}
