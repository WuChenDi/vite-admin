import { ErrorLogInfo } from 'types/store';
import { ActionContext } from 'vuex';
import { GET_DATA } from './constant';
import { userState } from './store';

import { formatToDateTime } from '@/utils/dateUtil';
import projectSetting from '@/config/projectSetting';
import { ErrorTypeEnum } from '@/enums/exceptionEnum';

export default {
  [GET_DATA]({ commit }: ActionContext<userState, unknown>): void {
    console.log('action执行成功');
    setTimeout(() => {
      const payload = false;
      commit(GET_DATA, payload);
    }, 2000);
  },

  // addErrorLogInfo(info: ErrorLogInfo) {
  //   const item = {
  //     ...info,
  //     time: formatToDateTime(new Date()),
  //   };
  //   this.errorLogInfoList = [item, ...(this.errorLogInfoList || [])];
  //   this.errorLogListCount += 1;
  // },

  // setErrorLogListCount(count: number): void {
  //   this.errorLogListCount = count;
  // },

  // /**
  //  * Triggered after ajax request error
  //  * @param error
  //  * @returns
  //  */
  // addAjaxErrorInfo(error) {
  //   const { useErrorHandle } = projectSetting as any;

  //   if (!useErrorHandle) return;

  //   const errInfo: Partial<ErrorLogInfo> = {
  //     message: error.message,
  //     type: ErrorTypeEnum.AJAX,
  //   };
  //   if (error.response) {
  //     const {
  //       config: { url = '', data: params = '', method = 'get', headers = {} } = {},
  //       data = {},
  //     } = error.response;
  //     errInfo.url = url;
  //     errInfo.name = 'Ajax Error!';
  //     errInfo.file = '-';
  //     errInfo.stack = JSON.stringify(data);
  //     errInfo.detail = JSON.stringify({ params, method, headers });
  //   }
  //   this.addErrorLogInfo(errInfo as ErrorLogInfo);
  // },
};
