import { createLineItem } from './apiService';
import Chance from 'chance';

const chance = new Chance();

describe('apiService', () => {
  describe('createLineItem', () => {
    let expectedOptions;
    let fakeBaseUrl;
    beforeEach(async () => {
      fakeBaseUrl = chance.url();
      process.env.BASE_URL = fakeBaseUrl;

      const fakeLineItem = {
        id: chance.guid(),
        name: chance.string(),
        price: chance.floating(),
        categoryId: chance.guid()
      };

      expectedOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fakeLineItem)
      };

      await createLineItem(fakeLineItem);
    });

    it('should call fetch with the correct url', () => {
      expect(fetch).toHaveBeenCalledWith(
        `${fakeBaseUrl}/api/lineitems`,
        expect.anything()
      );
    });

    it('should call fetch with the expected options', () => {
      expect(fetch).toHaveBeenCalledWith(expect.anything(), expectedOptions);
    });
  });
});
