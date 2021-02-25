import { BrowserWindow } from 'electron'

import { extractState } from './extract-state'
import { restoreState, saveState } from './state'
import { SaveWindowPositionOptions, PositionState } from '../types'

export function registerHandles(
  id: string,
  window: BrowserWindow,
  options: SaveWindowPositionOptions
) {
  let saveStateTimeout: NodeJS.Timeout
  
  let state: PositionState = restoreState(id, {
    ...window.getBounds(),
    isMaximized: window.isMaximized(),
    isFullScreen: window.isFullScreen()
  })
  
  function updateStateHandler() {
    state = extractState(state, window)
  }

  function saveStateHandler() {
    updateStateHandler()
    saveState(id, state)
  }

  const { delay = 1000 } = options

  function stateChangeHandler() {
    clearTimeout(saveStateTimeout)

    saveStateTimeout = setTimeout(updateStateHandler, delay)
  }

  window.on('resize', stateChangeHandler)
  window.on('move', stateChangeHandler)
  window.on('close', updateStateHandler)
  window.on('closed', saveStateHandler)
}
