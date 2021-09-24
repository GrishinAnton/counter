import React from 'react';
import { EmptyCountBlock } from 'components/layout/EmptyCountBlock/EmptyCountBlock';
import { CounterCard } from 'components/layout/CounterCard/CounterCard';
import { EActions } from '../../../features/config';
import { IEntityFieldsWithId } from '../../../common/types/entity.types';
import { CounterBlock } from '../../ui/ContainerBlock/ContainerBlock';

const Home = () => (
  // const entities: IEntityFieldsWithId[] = getData(EActions.GET_COUNTS) || [];

  <>
    {/* {entities.length ? ( */}
    {/*  entities.map(entity => <CounterCard entity={entity} key={entity.id} />) */}
    {/* ) : ( */}
    <CounterBlock contentPosition='center'>
      <EmptyCountBlock />
    </CounterBlock>
    {/* )} */}
  </>
);
export default Home;
