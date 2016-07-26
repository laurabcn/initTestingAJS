export function favouriteItem() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/favouriteItem/favouriteItem.html',
    scope:{
      index: '=',
      listFav: '=',
      isFav: '='
    },
    link: linkFunc,
    controller: favouriteItemController,
    controllerAs: 'vm'
  };

  return directive;

  function linkFunc(scope, el, attr, vm) {
      vm.index = scope.index;
      vm.listFav = scope.listFav;
      vm.isFav = scope.isFav;
  }
}
  class favouriteItemController {
    constructor($log, itemList) {
      'ngInject';
      this.itemList = itemList.getList();
    }

    putOnList(itemKey) {
      this.listFav.push(this.itemList[itemKey]);
      this.isFav = true;
    }
  }



