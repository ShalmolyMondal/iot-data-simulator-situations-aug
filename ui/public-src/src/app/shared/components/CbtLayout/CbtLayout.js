import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import AddEditSituationModalWrapped from '../AddEditSituationModal/AddEditSituationModal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import CardContent from '@material-ui/core/CardContent';
import NotificationsIcon from '@material-ui/icons/Notifications';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  grid: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    minWidth: 275,
  },
  gridroot: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  sidebarHeader: {
    marginLeft: '20px',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    background: '#FBFCFD',
    width: 'calc(100vw - 240px)',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  // main content
  button: {
    margin: theme.spacing.unit,
    // width: "100%"
  },
  btn: {
    width: "100%"
  },
  input: {
    display: 'none',
  },
  noContentText: {
    fontSize: '24px',
    color: '#757575',
  },
  card: {
    minWidth: 275,
    minHeight: 'calc(100vh - 120px)',
    padding: "inherit"
  },
  simulationCard: {
    maxWidth: 400,
  },
  flexthis: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#f1f1f1',
  },

});

class CbtLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    open: true,
    dialogOpen: false,
    selectedSituationId: null,
    openModal: false,
    addEditSituationModalMode: 'ADD_MODE',
    selected: 0,
    showDetail: false,
    id: null,
    message: '',
    openSnackbar: false,
    expanded: false,
  };

  handleExpandClick = () => {
    this.setState((state) => ({ expanded: !state.expanded }));
  };
  closeAddEditSituationModal = (message) => {
    this.setState({
      openModal: false,
      message: message,
      openSnackbar: message ? true : false,
      selectedSituationId: null,
    });
  };

  openAddEditSituationModal = (action, situationId) => {
    this.setState({
      openModal: true,
      addEditSituationModalMode: action == 'edit' ? 'EDIT_MODE' : 'ADD_MODE',
      selectedSituationId: situationId,
    });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleShowDetail = () => {
    this.setState({ showDetail: true });
  };

  handleDeleteDialogOpen = (situationId) => {
    this.setState({
      dialogOpen: true,
      selectedSituationId: situationId,
    });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false, selectedSituationId: null });
  };

  handleConfirmDeleteSituation = (id) => {
    this.props.store.view.deleteSituation(id);
    this.setState({
      dialogOpen: false,
      selectedSituationId: null,
      message: "Deleted situation successfully",
      openSnackbar: true
    });
    this.props.store.view.openSituationManagePage();
  }

  closeSnackBar = () => {
    this.setState({
      message: null,
      openSnackbar: false
    });
  }
  render() {
    const { classes, situations, situation } = this.props;

    console.log("-----------Situations-----------", situations);

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          {/* <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
          > */}
          {/* <Toolbar
              disableGutters={!this.state.open}
              className={classes.toolbar}
            >
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton> */}
          {/* <Typography
                variant="title"
                color="inherit"
                noWrap
                className={classes.title}
              >
                IOT PROJECT
              </Typography>
              <IconButton color="inherit"></IconButton> */}
          {/* </Toolbar> */}
          {/* </AppBar> */}
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              ),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <strong className={classes.sidebarHeader}>
                IoT Benchmark Tool
              </strong>
              {/* <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton> */}
            </div>
            <Divider />
            <List>
              <ListItem button onClick={() => this.props.store.view.openSituationsPage()}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </List>
            <Divider />
            {situations && situations.length>0 && <List>{mainListItems(this.props, situations)}</List>}
            <Divider />

            <List>{secondaryListItems(this.props, this.openAddEditSituationModal)}</List>
          </Drawer>
          <main className={classes.content}>
            {/* <div className={classes.appBarSpacer} /> */}
            <Card className={classes.card}>

              {/* {this.props.page} */}
              {this.props.page == 'add-situation' && (
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <div className={classes.appBarSpacer} />
                  <div className={classes.appBarSpacer} />
                  <div className={classes.appBarSpacer} />
                  <div className={classes.noContentText}>
                    No situation to display
                  </div>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.button}
                    onClick={() => this.openAddEditSituationModal('add', null)}
                  >
                    <AddIcon /> Add situaiton
                  </Button>
                </Grid>
              )}

              {this.props.page == 'situations' && (
                <Grid
                  container
                  spacing={24}
                  alignItems="center"
                >

                  {situations && situations.length>0 ?
                    situations.map((situation, id) => {
                      return (
                        <Grid item xs={4} key={id}>
                          <Card >
                            <Button className={classes.btn} onClick={() => this.props.store.view.openSituationDetailPage(situation._id)} >
                              <CardContent>
                                <NotificationsIcon />
                                <Typography variant="h4" component="div">
                                  {situation.situation_name}
                                </Typography>
                                <Typography variant="body2">
                                  {situation.situation_description}
                                </Typography>
                              </CardContent>
                            </Button>
                          </Card>
                        </Grid>
                      )
                    }) :
                    <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justify="center"
                    >
                      <div className={classes.appBarSpacer} />
                      <div className={classes.appBarSpacer} />
                      <div className={classes.appBarSpacer} />
                      <div className={classes.noContentText}>
                        No situation to display
                      </div>
                      <Button
                        color="primary"
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.openAddEditSituationModal('add', null)}
                      >
                        <AddIcon /> Add situaiton
                      </Button>
                    </Grid>
                  }

                </Grid>
              )}

              {this.props.page == 'manage-situation' && (
                <Grid
                  container
                  spacing={24}
                  alignItems="center"
                >
                  {/* {situations && situations.map((situation, id) => {
                    return (

                      <Grid item xs={4} key={id}>

                        <Card >
                          <Button className={classes.btn} onClick={() => this.props.store.view.openSituationDetailPage(situation._id)}>
                            <CardContent>
                              <NotificationsIcon />
                              <Typography variant="h4" component="div">
                                {situation.situation_name}
                              </Typography>
                              <Typography variant="body2">
                                {situation.situation_description}
                              </Typography>
                            </CardContent>
                          </Button>
                        </Card>

                      </Grid>

                    )
                  })} */}

                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Situation Name</TableCell>
                        <TableCell align="right">Situation Description</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {situations && situations.map((situationData, id) => (
                        <TableRow key={id}>
                          <TableCell component="th" scope="row">
                            {situationData.situation_name}
                          </TableCell>
                          <TableCell align="right">{situationData.situation_description}</TableCell>
                          <TableCell align="right">
                            <Button onClick={() => this.props.store.view.openSituationDetailPage(situationData._id)} >View</Button>
                            <Button color={"primary"} onClick={() => this.openAddEditSituationModal('edit', situationData._id)} >Edit</Button>
                            <Button color={"secondary"} onClick={() => this.handleDeleteDialogOpen(situationData._id)} >Delete</Button>

                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              )}

              {this.props.page == 'situation-detail' && (
                <React.Fragment>
                  {situation && (
                    <div className={classes.grid}>
                      <Grid container spacing={24}>
                        <Grid item xs={10}>
                          <Typography variant="title">
                            {situation.situation_name}
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                              this.openAddEditSituationModal(
                                'edit',
                                situation._id
                              )
                            }
                          >
                            Edit
                          </Button>
                        </Grid>
                        <Grid item xs={1}>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => this.handleDeleteDialogOpen(situation._id)}
                          >
                            Delete
                          </Button>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography>
                            {situation.situation_description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                </React.Fragment>
              )}
              {this.props.page == 'run-simulation' && (
                <React.Fragment>
                  <div className="">
                    <h1>Run Simulation</h1>
                    <div className={classes.flexthis}>
                      <Card className={classes.simulationCard}>
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="Recipe"
                              className={classes.avatar}
                            >
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="Room is hot"
                          subheader="Some desc..."
                        />
                        <CardContent>
                          <Typography component="p">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                          </Typography>
                        </CardContent>
                        <CardActions
                          className={classes.actions}
                          disableActionSpacing
                        ></CardActions>
                        <Collapse
                          in={this.state.expanded}
                          timeout="auto"
                          unmountOnExit
                        >
                          <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                              Heat 1/2 cup of the broth in a pot until
                              simmering, add saffron and set aside for 10
                              minutes.
                            </Typography>
                            <Typography paragraph>
                              Heat oil in a (14- to 16-inch) paella pan or a
                              large, deep skillet over medium-high heat. Add
                              chicken, shrimp and chorizo, and cook, stirring
                              occasionally until lightly browned, 6 to 8
                              minutes. Transfer shrimp to a large plate and set
                              aside, boil.
                            </Typography>
                            <Typography paragraph>
                              Add rice and stir very gently to distribute. Top
                              with artichokes and peppers, and cook without
                              stirring, until most of the liquid is absorbed, 15
                            </Typography>
                            <Typography>
                              Set aside off of the heat to let rest for 10
                              minutes, and then serve.
                            </Typography>
                          </CardContent>
                        </Collapse>
                      </Card>
                      <Card className={classes.simulationCard}>
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="Recipe"
                              className={classes.avatar}
                            >
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="Room is hot"
                          subheader="Some desc..."
                        />
                        <CardContent>
                          <Typography component="p">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                          </Typography>
                        </CardContent>
                        <CardActions
                          className={classes.actions}
                          disableActionSpacing
                        ></CardActions>
                        <Collapse
                          in={this.state.expanded}
                          timeout="auto"
                          unmountOnExit
                        >
                          <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                              Heat 1/2 cup of the broth in a pot until
                              simmering, add saffron and set aside for 10
                              minutes.
                            </Typography>
                            <Typography paragraph>
                              Heat oil in a (14- to 16-inch) paella pan or a
                              large, deep skillet over medium-high heat. Add
                              chicken, shrimp and chorizo, and cook, stirring
                              occasionally until lightly browned, 6 to 8
                              minutes. Transfer shrimp to a large plate and set
                              aside, boil.
                            </Typography>
                            <Typography paragraph>
                              Add rice and stir very gently to distribute. Top
                              with artichokes and peppers, and cook without
                              stirring, until most of the liquid is absorbed, 15
                            </Typography>
                            <Typography>
                              Set aside off of the heat to let rest for 10
                              minutes, and then serve.
                            </Typography>
                          </CardContent>
                        </Collapse>
                      </Card>
                      <Card className={classes.simulationCard}>
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="Recipe"
                              className={classes.avatar}
                            >
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="Room is hot"
                          subheader="Some desc..."
                        />
                        <CardContent>
                          <Typography component="p">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                          </Typography>
                        </CardContent>
                        <CardActions
                          className={classes.actions}
                          disableActionSpacing
                        ></CardActions>
                        <Collapse
                          in={this.state.expanded}
                          timeout="auto"
                          unmountOnExit
                        >
                          <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                              Heat 1/2 cup of the broth in a pot until
                              simmering, add saffron and set aside for 10
                              minutes.
                            </Typography>
                            <Typography paragraph>
                              Heat oil in a (14- to 16-inch) paella pan or a
                              large, deep skillet over medium-high heat. Add
                              chicken, shrimp and chorizo, and cook, stirring
                              occasionally until lightly browned, 6 to 8
                              minutes. Transfer shrimp to a large plate and set
                              aside, boil.
                            </Typography>
                            <Typography paragraph>
                              Add rice and stir very gently to distribute. Top
                              with artichokes and peppers, and cook without
                              stirring, until most of the liquid is absorbed, 15
                            </Typography>
                            <Typography>
                              Set aside off of the heat to let rest for 10
                              minutes, and then serve.
                            </Typography>
                          </CardContent>
                        </Collapse>
                      </Card>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </Card>
          </main>
        </div>
        {
          this.state.openModal &&
          <AddEditSituationModalWrapped
            key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
            modalTitle={
              this.state.addEditSituationModalMode == 'ADD_MODE'
                ? 'Add Situation'
                : 'Edit Situation'
            }
            mode={this.state.addEditSituationModalMode}
            situationId={this.state.selectedSituationId}
            open={this.state.openModal}
            closeModal={this.closeAddEditSituationModal}
            viewStore={this.props.store.view}
          ></AddEditSituationModalWrapped>
        }
        {
          this.state.dialogOpen &&
          <ConfirmationModal
            dialogOpen={this.state.dialogOpen}
            handleDialogClose={this.handleDialogClose}
            modalTitle={"Delete Situation"}
            handleDialogClose={this.handleDialogClose}
            handleConfirmDeleteSituation={this.handleConfirmDeleteSituation}
            selectedSituationId={this.state.selectedSituationId}
          >
          </ConfirmationModal>
        }
        {
          this.state.openSnackbar &&
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.openSnackbar}
            autoHideDuration={6000}
            onClose={this.closeSnackBar}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{this.state.message}</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.closeSnackBar}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        }
      </React.Fragment>
    );
  }
}

CbtLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CbtLayout);
