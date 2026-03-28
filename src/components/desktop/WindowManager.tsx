"use client";

import { createContext, useReducer, type ReactNode, type Dispatch } from "react";

export type WindowId =
  | "finder"
  | "terminal"
  | "safari"
  | "mail"
  | "notes"
  | "calendar"
  | "launchpad";

export interface WindowState {
  id: WindowId;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface DesktopState {
  windows: Record<WindowId, WindowState>;
  topZIndex: number;
}

type Action =
  | { type: "OPEN_WINDOW"; id: WindowId }
  | { type: "CLOSE_WINDOW"; id: WindowId }
  | { type: "MINIMIZE_WINDOW"; id: WindowId }
  | { type: "FOCUS_WINDOW"; id: WindowId }
  | { type: "MOVE_WINDOW"; id: WindowId; position: { x: number; y: number } }
  | { type: "TOGGLE_WINDOW"; id: WindowId }
  | { type: "MAXIMIZE_WINDOW"; id: WindowId }
  | { type: "RESTORE_WINDOW"; id: WindowId };

const DEFAULT_SIZES: Record<WindowId, { width: number; height: number }> = {
  finder: { width: 700, height: 480 },
  terminal: { width: 640, height: 420 },
  safari: { width: 800, height: 520 },
  mail: { width: 680, height: 460 },
  notes: { width: 700, height: 480 },
  calendar: { width: 660, height: 440 },
  launchpad: { width: 720, height: 500 },
};

const DEFAULT_OFFSETS: Record<WindowId, { x: number; y: number }> = {
  finder: { x: 80, y: 60 },
  terminal: { x: 150, y: 80 },
  safari: { x: 100, y: 50 },
  mail: { x: 180, y: 100 },
  notes: { x: 120, y: 70 },
  calendar: { x: 200, y: 90 },
  launchpad: { x: 140, y: 60 },
};

function createInitialWindow(id: WindowId): WindowState {
  return {
    id,
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 0,
    position: DEFAULT_OFFSETS[id],
    size: DEFAULT_SIZES[id],
  };
}

const WINDOW_IDS: WindowId[] = [
  "finder",
  "terminal",
  "safari",
  "mail",
  "notes",
  "calendar",
  "launchpad",
];

const initialState: DesktopState = {
  windows: WINDOW_IDS.reduce(
    (acc, id) => ({ ...acc, [id]: createInitialWindow(id) }),
    {} as Record<WindowId, WindowState>
  ),
  topZIndex: 10,
};

function desktopReducer(state: DesktopState, action: Action): DesktopState {
  switch (action.type) {
    case "OPEN_WINDOW": {
      const newZ = state.topZIndex + 1;
      return {
        ...state,
        topZIndex: newZ,
        windows: {
          ...state.windows,
          [action.id]: {
            ...state.windows[action.id],
            isOpen: true,
            isMinimized: false,
            zIndex: newZ,
          },
        },
      };
    }
    case "CLOSE_WINDOW":
      return {
        ...state,
        windows: {
          ...state.windows,
          [action.id]: {
            ...state.windows[action.id],
            isOpen: false,
            isMinimized: false,
            isMaximized: false,
          },
        },
      };
    case "MINIMIZE_WINDOW":
      return {
        ...state,
        windows: {
          ...state.windows,
          [action.id]: {
            ...state.windows[action.id],
            isMinimized: true,
          },
        },
      };
    case "FOCUS_WINDOW": {
      const newZ = state.topZIndex + 1;
      return {
        ...state,
        topZIndex: newZ,
        windows: {
          ...state.windows,
          [action.id]: {
            ...state.windows[action.id],
            zIndex: newZ,
          },
        },
      };
    }
    case "MOVE_WINDOW":
      return {
        ...state,
        windows: {
          ...state.windows,
          [action.id]: {
            ...state.windows[action.id],
            position: action.position,
          },
        },
      };
    case "MAXIMIZE_WINDOW": {
      const newZ = state.topZIndex + 1;
      return {
        ...state,
        topZIndex: newZ,
        windows: {
          ...state.windows,
          [action.id]: {
            ...state.windows[action.id],
            isMaximized: true,
            zIndex: newZ,
          },
        },
      };
    }
    case "RESTORE_WINDOW":
      return {
        ...state,
        windows: {
          ...state.windows,
          [action.id]: {
            ...state.windows[action.id],
            isMaximized: false,
          },
        },
      };
    case "TOGGLE_WINDOW": {
      const win = state.windows[action.id];
      if (win.isOpen && !win.isMinimized) {
        return desktopReducer(state, { type: "CLOSE_WINDOW", id: action.id });
      }
      return desktopReducer(state, { type: "OPEN_WINDOW", id: action.id });
    }
    default:
      return state;
  }
}

export const WindowManagerContext = createContext<{
  state: DesktopState;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(desktopReducer, initialState);

  return (
    <WindowManagerContext.Provider value={{ state, dispatch }}>
      {children}
    </WindowManagerContext.Provider>
  );
}
