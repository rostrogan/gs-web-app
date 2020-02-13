import {DatePipe, registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';

{
  let date: Date;
  describe('DatePipe', () => {
    const isoStringWithoutTime = '2015-01-01';
    let pipe: DatePipe;

    beforeAll(() => { registerLocaleData(localeEn, localeEnExtra); });

    beforeEach(() => {
      date = new Date(2015, 5, 15, 9, 3, 1, 550);
      pipe = new DatePipe('en-US');
    });

    describe('supports', () => {
      it('should support date', () => { expect(() => pipe.transform(date)).not.toThrow(); });

      it('should support int', () => { expect(() => pipe.transform(123456789)).not.toThrow(); });

      it('should support numeric strings',
        () => { expect(() => pipe.transform('123456789')).not.toThrow(); });

      it('should support decimal strings',
        () => { expect(() => pipe.transform('123456789.11')).not.toThrow(); });

      it('should support ISO string',
        () => expect(() => pipe.transform('2015-06-15T21:43:11Z')).not.toThrow());

      it('should return null for empty string',
        () => { expect(pipe.transform('')).toEqual(null); });

      it('should return null for NaN', () => { expect(pipe.transform(Number.NaN)).toEqual(null); });

      it('should support ISO string without time',
        () => { expect(() => pipe.transform(isoStringWithoutTime)).not.toThrow(); });

      it('should not support other objects',
        () => { expect(() => pipe.transform({})).toThrowError(/InvalidPipeArgument/); });
    });

    describe('transform', () => {
      it('should use "mediumDate" as the default format',
        () => expect(pipe.transform('2017-01-11T10:14:39+0000')).toEqual('Jan 11, 2017'));
    });
  });
}
