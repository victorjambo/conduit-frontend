// test/utils/mockStore.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// eslint-disable-next-line import/prefer-default-export
export const mockStore = configureMockStore([thunk]);
