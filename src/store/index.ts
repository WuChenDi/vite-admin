import { userState } from './modules/user/store';
import { useErrorLogStore } from './modules/errorLog/store';
import { createStore } from 'vuex';
import { modules } from './modules';

type State = {
  user: userState;
  errorLog: useErrorLogStore;
};

const store = createStore<State>({
  modules,
});

export { State };
export default store;
