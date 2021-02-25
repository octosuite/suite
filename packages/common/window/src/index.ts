import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron'

import { getDefaultOptions } from './helpers/default-options'
import { registerHandles } from './helpers/register-handles'

import { CreateWindowOptions } from './types'

export function createWindow(
  id: string,
  windowOptions: BrowserWindowConstructorOptions,
  options: CreateWindowOptions = { saveWindowPosition: false }
): BrowserWindow {
  const { saveWindowPosition } = options

  const defaultWindowOptions = getDefaultOptions(windowOptions)

  const window = new BrowserWindow(defaultWindowOptions)

  if (saveWindowPosition) {
    registerHandles(id, window, saveWindowPosition)
  }

  return window
}
