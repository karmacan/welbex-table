import React from 'react';
import {observer} from 'mobx-react-lite';
import {useAppStore} from '@src/stores/App/AppStore';
import {useComponentDidMount} from '@src/utils/hooks/lifecycle';
import {Filters} from './Filters';
import {ListTable} from './ListTable';

export const Index = observer(({}) => {
  const appStore = useAppStore();

  useComponentDidMount(() => {
    appStore.getList(100);
  });

  return (
    <>
      <div className='Index'>
        <Filters />
        <ListTable />
      </div>

      <style jsx>{`
        .Index {
          width: 100%;
          padding: 20px 40px;
        }
      `}</style>
    </>
  );
});
