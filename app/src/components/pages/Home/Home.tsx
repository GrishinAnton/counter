import { EmptyCountBlock } from 'components/layout/EmptyCountBlock/EmptyCountBlock';
import { observer } from 'mobx-react-lite';

import { CounterBlock } from '../../ui/ContainerBlock/ContainerBlock';
import EntityStore from '../../../store/EntityStore';

import Entities from './Entities';
import { FooterWithPrimaryButton } from '../../ui/FooterWithPrimaryButton/FooterWithButtons';
import { ERoutes } from '../../../router/config';
import { useNavigate } from 'react-router-dom';
import { Loading } from 'components/ui/Loading/Loading';
import { useState, useEffect } from 'react';
import { EState } from 'features/types';

const Home = observer(() => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const entities = EntityStore;

  useEffect(() => {
    if (entities.state === EState.PENDING) return;
    const loadData = async () => {
      setLoading(true);

      await entities.fetchEntities();

      setLoading(false);
    };

    loadData();
  }, [entities]);

  if (loading) {
    return <Loading open />;
  }

  return (
    <>
      {entities.entities.length ? (
        <>
          <Entities />
          <FooterWithPrimaryButton onClick={() => navigate(ERoutes.CREATE_ENTITY)} />
        </>
      ) : (
        <CounterBlock contentPosition='center'>
          <EmptyCountBlock />
        </CounterBlock>
      )}
    </>
  );
});

export default Home;
