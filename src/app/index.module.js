import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { FavouriteController } from '../app/components/favourite.controller';
import { ModalController } from './components/modal/Modal.Controller';
import { favouriteItem } from './components/favouriteItem/favouriteItem.directive';
import { itemListService } from '../app/components/itemList/itemList.service';

angular.module('itemManager',
  ['ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.select',
    'ui.router',
    'ui.bootstrap',
    'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('itemList', itemListService)
  .controller('MainController', MainController)
  .controller('FavouriteController', FavouriteController)
  .controller('ModalController', ModalController)
  .directive('favouriteItem', favouriteItem);
