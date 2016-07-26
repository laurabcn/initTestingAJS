export class FavouriteController {
  constructor ($uibModal, itemList) {
    'ngInject';

    this.listFavorites = [];
    this.$uibModal = $uibModal;
    this.itemList = itemList;
    this.isFav = false;
  }

  isInList(idItem){
    let length = _.findIndex(this.listFavorites, ['id', idItem]);
    if(length >= 0){
      return true
    } else {
      return false;
    }
  }
  showModal(){
    let vm = this;
    var modalInstance = this.$uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: 'app/components/modal/modal.html',
        controller: 'ModalInstanceCtrlFav',
        controllerAs: 'ModFav',
        resolve: {
        listFav: ()=>{
            return vm.listFavorites
        },
        isFav: ()=>{
          return vm.isFav
        }
  }
  });

    modalInstance.result.then( (listFavorites)=> {
      this.selected = this.listFavorites;
  }, ()=> {
    });

  }
}

