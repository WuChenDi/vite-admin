import type { ErrorLogInfo } from 'types/store';

export interface ErrorLogState {
  errorLogInfoList: Nullable<ErrorLogInfo[]>;
  errorLogListCount: number;
}

export const createStore = () => {
  const error: ErrorLogState = {
    errorLogInfoList: null,
    errorLogListCount: 0,
  };
  return error;
};

// 类型推导
export type useErrorLogStore = ReturnType<typeof createStore>;
