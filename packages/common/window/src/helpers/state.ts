import Store from 'electron-store'

import { PositionState } from '../types'

function createStore(id: string) {
  const store = new Store<PositionState>({ name: `window-position-${id}` })

  return store
}

export function saveState(id: string, state: PositionState) {
  const store = createStore(id)

  store.set('x', state.x)
  store.set('y', state.y)

  store.set('height', state.height)
  store.set('width', state.width)
  
  store.set('isMaximized', state.isMaximized)
  store.set('isFullScreen', state.isFullScreen)
}

export function restoreState(id: string, defaults?: PositionState): PositionState {
  const store = createStore(id)

  return {
    x: store.get('x', defaults?.x || 0),
    y: store.get('y', defaults?.y || 0),
    height: store.get('height', defaults?.height || 600),
    width: store.get('width', defaults?.width || 800),
    isMaximized: store.get('isMaximized', defaults?.isMaximized || false),
    isFullScreen: store.get('isFullScreen', defaults?.isFullScreen || false),
  }
}