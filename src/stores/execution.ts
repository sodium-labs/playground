import { create } from "zustand";

export interface ExecutionResult {
    success: boolean;
    timeout: boolean;
    duration: number;
    stdout: string | null;
    stderr: string | null;
}

export enum ExecutionState {
    Idle,
    Running,
}

export interface ExecutionStore {
    executionResult: ExecutionResult | null;
    executionState: ExecutionState;
    executionStart: number | null;
    setExecutionState: (state: ExecutionState) => void;
    setExecutionResult: (result: ExecutionResult | null) => void;
}

export const useExecutionStore = create<ExecutionStore>(set => ({
    executionResult: null,
    executionState: ExecutionState.Idle,
    executionStart: null,
    setExecutionState: (state: ExecutionState) =>
        set(() => ({ executionState: state, executionStart: state === ExecutionState.Running ? Date.now() : null })),
    setExecutionResult: (result: ExecutionResult | null) => set(() => ({ executionResult: result })),
}));
