import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import PeopleIcon from '@material-ui/icons/People';
// import LayersIcon from '@material-ui/icons/Layers';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import DvrIcon from '@material-ui/icons/Dvr';
import { FAKE_DATA } from '../../constants/fakeData';
import ViewStore from '../../stores/ViewStore';
// import FAKE_DATA from '../../constants/fakeData';

export const mainListItems = () => {
    console.log(FAKE_DATA.situations)
    return <div>
        <ListItem button onClick={()=> window.location.pathname = "situations"}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        {
            FAKE_DATA.situations.map((situation, key) => {
                return <ListItem button key={key}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary={situation.name} />
                </ListItem>
            })
        }
    </div>
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Actions</ListSubheader>
    <ListItem button onClick={()=> window.location.pathname = "manage-situation"}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Situations" />
    </ListItem>
    <ListItem button onClick={()=> window.location.pathname = "add-situation"}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Situations" />
    </ListItem>
    <ListItem button onClick={()=> window.location.pathname = "run-simulation"}>
      <ListItemIcon>
        <DvrIcon />
      </ListItemIcon>
      <ListItemText primary="Run Simulation Flow" />
    </ListItem>
  </div>
);