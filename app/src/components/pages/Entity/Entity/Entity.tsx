import React, { useState } from 'react';
import { EActionType, IActionType } from 'common/types/common.types';
import CreateEntity from '../CreateEntity/CreateEntity';

interface IProps {
  type: keyof IActionType;
}

const Entity: React.FC<IProps> = ({ type }) => {
  const [typeView, setTypeView] = useState<keyof IActionType>(type);
  return <>{typeView === EActionType.CREATE && <CreateEntity />}</>;
};

export default Entity;
