import { Rectangle } from 'electron'

export interface CreateWindowOptions {
  saveWindowPosition: false | SaveWindowPositionOptions
}

export interface SaveWindowPositionOptions {
  delay?: number
}

export interface PositionState extends Rectangle {
  isMaximized: boolean
  isFullScreen: boolean
}