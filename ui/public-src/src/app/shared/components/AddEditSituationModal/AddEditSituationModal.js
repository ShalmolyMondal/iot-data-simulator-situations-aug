import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  situationInfo: {
      margin: '30px 0'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  fullWidth: {
      width: '100%'
  },
  card: {
    marginBottom: '20px'
  },
  //expansion pannel
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  panelContent: {
    flexDirection: 'column'
  },
  //grid
  root: {
    flexGrow: 1,
  },
  gridPaper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class AddEditSituationModal extends React.Component {
  handleClose = () => {
    this.props.closeModal();
  };

  state = {
    situationName: '',
    situationDescription: '',
    contextName: '',
    contextDescription: '',
    unit: '',
    weight: 0
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open ? true : false}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              {this.props.modalTitle}
            </Typography>
            <Grid className={classes.situationInfo}>
                <form className={classes.container} noValidate autoComplete="off">
                    <Card className={classes.fullWidth + " " + classes.card}>
                        <CardContent>
                            <Typography variant="subheading" >
                                Situation Info
                            </Typography>
                            <TextField
                                id="situationName"
                                required
                                label="Situation Name"
                                className={classes.textField}
                                value={this.state.situationName}
                                onChange={this.handleChange('situationName')}
                                margin="normal"
                            />
                            <TextField
                                required
                                id="situationDescription"
                                label="Situation Description"
                                className={classes.textField}
                                value={this.state.situationDescription}
                                onChange={this.handleChange('situationDescription')}
                                margin="normal"
                            />
                        </CardContent>
                    </Card>
                    <Card className={classes.fullWidth + " " + classes.card}>
                        <CardContent>
                            <Typography variant="subheading" gutterBottom>
                                Context attributes
                            </Typography>
                            <ExpansionPanel defaultExpanded={true}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    {/* <Typography className={classes.heading}>Expansion Panel 1</Typography> */}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.panelContent}>
                                <Grid container className={classes.root} spacing={0}>
                                    <Grid item xs={24}>
                                        <Grid container className={classes.demo} justify="center" spacing={16}>
                                        <Grid>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="name-simple">Name</InputLabel>
                                                <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
                                            </FormControl>
                                        </Grid>
                                        <Grid>
                                            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                                                <InputLabel htmlFor="name-helper">Name</InputLabel>
                                                <Input id="name-helper" value={this.state.name} onChange={this.handleChange} />
                                                <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid>
                                            <FormControl className={classes.formControl} disabled>
                                                <InputLabel htmlFor="name-disabled">Name</InputLabel>
                                                <Input id="name-disabled" value={this.state.name} onChange={this.handleChange} />
                                                <FormHelperText>Disabled</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                    <Grid>
                                        <TextField
                                            id="contextName"
                                            required
                                            label="Context Name"
                                            className={classes.textField}
                                            value={this.state.contextName}
                                            onChange={this.handleChange('contextName')}
                                            margin="normal"
                                        />
                                        <TextField
                                            required
                                            id="contextDescription"
                                            label="Context Description"
                                            className={classes.textField}
                                            value={this.state.contextDescription}
                                            onChange={this.handleChange('contextDescription')}
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            required
                                            id="unit"
                                            label="Unit"
                                            className={classes.textField}
                                            value={this.state.unit}
                                            onChange={this.handleChange('unit')}
                                            margin="normal"
                                        />
                                        <TextField
                                            required
                                            id="weight"
                                            label="Weight"
                                            className={classes.textField}
                                            value={this.state.weight}
                                            onChange={this.handleChange('weight')}
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid>
                                        <Typography variant="subheading" gutterBottom>
                                            Data value ranges
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                    
                                    <FormControl className={classes.formControl} error aria-describedby="name-error-text">
                                        <InputLabel htmlFor="name-error">Name</InputLabel>
                                        <Input id="name-error" value={this.state.name} onChange={this.handleChange} />
                                        <FormHelperText id="name-error-text">Error</FormHelperText>
                                    </FormControl>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            
                        </CardContent>
                    </Card>
                </form>
            </Grid>
            <AddEditSituationModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

AddEditSituationModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const AddEditSituationModalWrapped = withStyles(styles)(AddEditSituationModal);

export default AddEditSituationModalWrapped;