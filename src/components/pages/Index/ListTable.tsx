import React from 'react';
import {observer} from 'mobx-react-lite';
import {useAppStore} from '@src/stores/App/AppStore';
import {Table} from '@src/uikit/Table';
import {toString} from '@src/utils/helpers/parsers';

export const ListTable = observer(({}) => {
  const appStore = useAppStore();
  const filteredList = appStore.filter(appStore.list);

  return (
    <>
      <Table
        content={filteredList}
        headers={[
          {text: 'Дата'},
          {text: 'Название', sortKey: 'name'},
          {text: 'Количество', sortKey: 'count'},
          {text: 'Расстояние', sortKey: 'length'},
        ]}
        rowTemplate={item => [
          <>{toString(item.date)}</>,
          <>{item.name}</>,
          <>{item.count}</>,
          <>{item.length}</>,
        ]}
      />
    </>
  );
});
