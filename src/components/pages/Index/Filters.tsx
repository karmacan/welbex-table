import React from 'react';
import {observer} from 'mobx-react-lite';
import {useAppStore} from '@src/stores/App/AppStore';
import {Dropdown} from '@src/uikit/Dropdown';
import {Input} from '@src/uikit/Input';
import {parseOptions} from '@src/utils/helpers/parsers';

export const Filters = observer(({}) => {
  const appStore = useAppStore();

  return (
    <>
      <div className='Filters'>
        <Dropdown
          label='Поле'
          placeholder='Выберете поле'
          value={appStore.field.text}
          options={parseOptions([
            {text: 'Дата', key: 'date'},
            {text: 'Название', key: 'name'},
            {text: 'Количество', key: 'count'},
            {text: 'Расстояние', key: 'length'},
          ])}
          onSelect={appStore.setField}
        />
        <Dropdown 
          disabled={!appStore.field.text} 
          label='Условие' 
          placeholder='Выберете условие' 
          value={appStore.condition.text}
          options={parseOptions([
            {text: 'Равно', value: '='},
            {text: 'Содержит', value: '()'},
            {text: 'Больше', value: '>'},
            {text: 'Меньше', value: '<'},
          ])}
          onSelect={appStore.setCondition}
        />
        <Input 
          disabled={!appStore.condition.text} 
          label='Значение' 
          placeholder='Выберете значение'
          value={appStore.value}
          onChange={appStore.setValue}
        />
      </div>

      <style jsx>{`
        .Filters {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 20px;
          :global(.Dropdown, .Input) {
            flex: 1 1 auto; /*fill space*/
          }
        }
      `}</style>
    </>
  );
});
