/**
 * Created by laura on 01/08/16.
 */
describe('service itemLise', () => {
  beforeEach(angular.mock.module('itemManager'));

  it('should be registered', inject(itemList => {
    expect(itemList).not.toEqual(null);
  }));
  describe('getList function', () => {
    it('should exist', inject(itemList => {
      expect(itemList.getList()).not.toBeNull();
    }));

    it('should return array of object', inject(itemList => {
      const data = itemList.getList();
      expect(data).toEqual(jasmine.any(Array));
      expect(data[0]).toEqual(jasmine.any(Object));
      expect(data.length > 5).toBeTruthy();
      expect(data[0].id).toEqual(0);
      expect(data[4].id).toEqual(4);
    }));
  });
});
