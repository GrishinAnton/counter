import React, { useState } from 'react';
import { EActionType, IActionType } from 'common/types/common.types';
import CreateEntity from '../CreateEntity/CreateEntity';

interface IProps {
  type: keyof IActionType;
}

const Entity = ({ type }: IProps) => {
  const [typeView, setTypeView] = useState<keyof IActionType>(type);
  return <>{typeView === EActionType.CREATE && <CreateEntity />}</>;
};

export default Entity;
