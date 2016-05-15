import {ngmodule} from './bootstrap/ngmodule';

import {rootReducer} from './redux/modules/reducer';

ngmodule.config(($ngReduxProvider) => {
  'ngInject';

  $ngReduxProvider.createStoreWith(rootReducer);
});
