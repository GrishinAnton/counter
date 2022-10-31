import { CounterCard } from 'components/layout/CounterCard/CounterCard';
import { observer } from 'mobx-react-lite';

import EntityStore from '../../../store/EntityStore';

const Entities = observer(() => {
  const entities = EntityStore.getEntities();

  return (
    <>
      {entities.map(entity => (
        <CounterCard entity={entity} key={entity.id} />
      ))}
    </>
  );
});

export default Entities;
