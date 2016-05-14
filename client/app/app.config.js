import {ngmodule} from './bootstrap/ngmodule';

import {rootReducer} from './reducers/root.reducer';

ngmodule.config(($ngReduxProvider) => {
  'ngInject';

  $ngReduxProvider.createStoreWith(rootReducer);
});
