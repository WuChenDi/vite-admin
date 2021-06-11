import { userState } from "./store";

const moduleGetters = {
  isTest: (state: userState): number => {
    return 123;
  },

  // getErrorLogInfoList() {
  //   return this.errorLogInfoList || [];
  // },
  // getErrorLogListCount() {
  //   return this.errorLogListCount;
  // },
};

export default moduleGetters;
