import React from 'react';
import { BottomNavigation as UiBottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const BottomNavigation = () => (
  <UiBottomNavigation>
    <BottomNavigationAction label='Recents' value='recents' icon={<RestoreIcon />} />
    <BottomNavigationAction label='Favorites' value='favorites' icon={<FavoriteIcon />} />
    <BottomNavigationAction label='Nearby' value='nearby' icon={<LocationOnIcon />} />
    <BottomNavigationAction label='Folder' value='folder' icon={<FolderIcon />} />
  </UiBottomNavigation>
);
