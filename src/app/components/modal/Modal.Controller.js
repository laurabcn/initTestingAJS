export class ModalController{
  constructor($timeout, listFav, itemList, isFav) {
    'ngInject';

    this.isFav = isFav;
    this.itemList = itemList.getList();
    this.listFav = listFav;
    this.wordSearchFav = '';
    this.searchData = [];
    this.searchFav();
    this.$timeout = $timeout;
  }

  searchFav() {
    if (this.wordSearchFav != '') {
      let xPath = "//*[contains(title, '" + this.wordSearchFav + "')]";
      this.searchData = JSON.search(this.listFav, xPath);
    } else {
      this.searchData = [];
      this.searchData = this.listFav;

    }
  }

  putOnList(itemKey) {
    this.listFav.push(this.itemList[itemKey]);
    this.isFav = true;
    this.searchFav();
  }

  removeOnList(item) {
     _.remove(this.listFav, (fav)=>{
          return fav.id == item;
         });

    this.isFav = false;
    this.searchFav();
  }
}

