export class MainController {
  constructor ($log, itemList) {
    'ngInject';

    this.awesomeThings = [];
    this.filteredItems = [];
    this.classAnimation = '';
    this.selectSearch = [];
    this.wordSearch = '';
    this.selectCategory = ["title", "description", "price", "email"];
    this.$log = $log;
    this.itemList = itemList;
    this.totalItems = 0;
    this.currentPage = 1;
    this.maxSize = 5;

    this.getWebDevTec();
    this.pageChanged();
  }
  getWebDevTec() {
    this.awesomeThings = this.itemList.getList();
    this.totalItems = this.awesomeThings.length;
  }

  submitSearch(){
    if(this.wordSearch !== ''){
      this.awesomeThings = this.itemList.getListSearch(this.wordSearch, this.selectSearch, 0);
      this.pageChanged();
    }
  }
  pageChanged() {
    let start = (this.currentPage - 1 ) * this.maxSize,
        endQueue = start +  this.maxSize, size =  this.awesomeThings.length,
        end = endQueue > size ? size : endQueue;
    this.filteredItems = _.slice(this.awesomeThings, [start], [end]);
  }
}
