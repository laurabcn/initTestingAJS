/**
 * Created by laura on 22/07/16.
 */

describe('directive favouriteItem', function() {
  let vm,
      element,
      scope,
      index = 0,
      listFav = [0, 1, 2],
      isFav = true;
  beforeEach(angular.mock.module('itemManager'));
  beforeEach(inject(($compile, $rootScope)=>{
    element = angular.element(`<favourite-item index="${index}" list-fav="['0', '1']" is-fav="${isFav}"></favourite-item>`);
    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', ()=>{
    expect(element.html()).not.toBeNull();
  });
  it('controller defined', ()=>{
    expect(element.controller).toBeDefined();
  });
  it('index exist', ()=>{
    expect(vm.index).toEqual(jasmine.any(Number));
    expect(vm.index).toEqual(0);
  });
  it('isFav exist', ()=>{
    expect(vm.isFav).toBeTruthy();
  });
  it('listFav exist', ()=>{
    expect(vm.listFav).toEqual(jasmine.any(Array));
    expect(vm.listFav).toContain('0');
    expect(vm.listFav).toContain('1');
    expect(vm.listFav).not.toContain('2');
    expect(vm.listFav.length).toEqual(2);
  });
  it('put in list ', ()=>{
    vm.putOnList(2);
    expect(vm.listFav[1]).toEqual('1');
    expect(vm.listFav[2]).toEqual(jasmine.any(Object));
    expect(vm.listFav[2]).not.toEqual(jasmine.any(Number));
    expect(vm.listFav[2]).not.toEqual(jasmine.any(String));
    expect(vm.isFav).toBeTruthy();
  })
});

