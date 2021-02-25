import { BrowserWindow } from 'electron'

import { PositionState } from '../types'

function isNormal(window: BrowserWindow) {
  return !window.isMaximized() && !window.isMinimized() && !window.isFullScreen()
}

export function extractState(
  state: PositionState,
  window: BrowserWindow
): PositionState {
  try {
    const winBounds = window.getBounds()

    if (isNormal(window)) {
      state.x = winBounds.x
      state.y = winBounds.y
      state.width = winBounds.width
      state.height = winBounds.height
    }

    state.isMaximized = window.isMaximized()
    state.isFullScreen = window.isFullScreen()
  } catch (err) {
    console.error(err)
  }

  return state
}