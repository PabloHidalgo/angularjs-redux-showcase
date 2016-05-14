import {ngmodule} from './bootstrap/ngmodule';

import {ducks} from './ducks/ducks.module';

ngmodule.config(($ngReduxProvider) => {
  'ngInject';

  $ngReduxProvider.createStoreWith(ducks);
});
