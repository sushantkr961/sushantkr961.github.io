"use client";

import { useContext } from "react";
import {
  WindowManagerContext,
  type WindowId,
} from "@/components/desktop/WindowManager";

export function useWindowManager() {
  const { state, dispatch } = useContext(WindowManagerContext);

  return {
    windows: state.windows,
    openWindow: (id: WindowId) => dispatch({ type: "OPEN_WINDOW", id }),
    closeWindow: (id: WindowId) => dispatch({ type: "CLOSE_WINDOW", id }),
    minimizeWindow: (id: WindowId) => dispatch({ type: "MINIMIZE_WINDOW", id }),
    focusWindow: (id: WindowId) => dispatch({ type: "FOCUS_WINDOW", id }),
    toggleWindow: (id: WindowId) => dispatch({ type: "TOGGLE_WINDOW", id }),
    maximizeWindow: (id: WindowId) => dispatch({ type: "MAXIMIZE_WINDOW", id }),
    restoreWindow: (id: WindowId) => dispatch({ type: "RESTORE_WINDOW", id }),
    moveWindow: (id: WindowId, position: { x: number; y: number }) =>
      dispatch({ type: "MOVE_WINDOW", id, position }),
    resizeWindow: (id: WindowId, size: { width: number; height: number }) =>
      dispatch({ type: "RESIZE_WINDOW", id, size }),
  };
}
