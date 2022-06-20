import React from 'react';
import {Context} from './AppProvider';
import {generateArray, randomDate, randomNumber, randomInt} from '@src/utils/helpers/generators';
import {OptionType} from '@src/utils/types/index';
import {toString} from '@src/utils/helpers/parsers';
import {isDate, isNumber} from '@src/utils/helpers/script';

type ListItemType = {
  date: Date;
  name: string;
  count: number;
  length: number;
};

export const createAppStore = init => {
  return {
    list: [] as ListItemType[],
    getList: function (length: number) {
      const fromDate = new Date(1990, 0, 1);
      const toDate = new Date(2010, 0, 1);
      this.list = generateArray(length).map(i => ({
        date: randomDate(fromDate, toDate),
        name: `Test ${randomNumber(2)}`,
        count: randomInt(1000),
        length: randomInt(10000),
      }));
    },
    setList: function (list: ListItemType[]) {
      this.list = list;
    },
    // Filters
    field: {} as OptionType,
    setField: function (field: OptionType) {
      this.field = field;
    },
    condition: {} as OptionType,
    setCondition: function (condition: OptionType) {
      this.condition = condition;
    },
    value: '',
    setValue: function (value) {
      this.value = value;
    },
    filter: function (list: ListItemType[]) {
      if (this.value) {
        switch (this.condition.value) {
          case '=':
            return this.list.filter(li => li[this.field.key] == this.value);
          case '()':
            return this.list.filter(li => toString(li[this.field.key]).includes(this.value));
          case '<':
            return this.list.filter(li => {
              if (isDate(li[this.field.key])) return li[this.field.key] < new Date(this.value);
              else return li[this.field.key] < this.value;
            });
          case '>':
            return this.list.filter(li => {
              if (isDate(li[this.field.key])) return li[this.field.key] > new Date(this.value);
              else return li[this.field.key] > this.value;
            });
          default:
            return this.list;
        }
      } else {
        return this.list;
      }
    },
  };
};

export const useAppStore = () => {
  const store = React.useContext(Context);
  if (!store) throw new Error('Use appStore within AppProvider!');
  return store;
};
