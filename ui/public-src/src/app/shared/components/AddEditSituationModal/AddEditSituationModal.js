import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import ChipInput from "material-ui-chip-input";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import _ from "lodash";
import { DEFAULT_VALUES } from "../../constants/defaultValues";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const styles = (theme) => ({
    paper: {
        position: "absolute",
        width: theme.spacing.unit * 70,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
    ppaper: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    situationInfo: {
        // margin: '30px 0'
    },
    chip: {
        margin: theme.spacing.unit
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%"
    },
    chips: {
        p: {
            width: "fit-content",
            position: "absolute",
            bottom: "30px",
            right: 0
        }
    },
    menu: {
        width: 200
    },
    fullWidth: {
        width: "100%"
    },
    card: {
        marginBottom: "20px",
        boxShadow: "none",
        border: "1px solid #f3f3f3"
    },
    //expansion pannel
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    },
    formControl: {
        margin: theme.spacing.unit
    },
    panelContent: {
        flexDirection: "column"
    },
    //grid
    root: {
        flexGrow: 1
    },
    gridPaper: {
        height: 140,
        width: 100
    },
    control: {
        padding: theme.spacing.unit * 2
    },
    noMarginTop: {
        marginTop: 0
    }
});

class AddEditSituationModal extends React.Component {
    handleClose = () => {
        this.setState({
            values: false,
            expanded: 1,
            situationName: "",
            situationDescription: "",
            contextAttributes: [{ ...DEFAULT_VALUES.CONTEXT_ATTRIBUTE }]
        });
        this.props.closeModal();
    };

    state = {
        values: false,
        expanded: 1,
        situationName: "",
        situationDescription: "",
        contextAttributes: [{ ...DEFAULT_VALUES.CONTEXT_ATTRIBUTE }]
    };

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleContextAttributeChange = (name, index) => (event) => {
        const newCA = _.cloneDeep(this.state.contextAttributes);
        newCA[index][name] = event.target.value;
        this.setState({
            contextAttributes: newCA
        });
    };

    handleSelectChange = (name) => (event) => {
        if (event.target.value == "array") {
            this.setState({ values: true });
        } else {
            this.setState({ values: false });
        }
        this.setState({
            [name]: event.target.value
        });
    };

    handleDeleteChip(c, i) {
        alert("You clicked the delete icon."); // eslint-disable-line no-alert
    }

    handleAddChip(c) {
        alert("You clicked the Chip."); // eslint-disable-line no-alert
    }

    expandPannel(pannelNumber) {
        this.setState({ expanded: pannelNumber });
    }

    handleAddNewContextAttribute() {
        const newContextAttributes = [
            ..._.cloneDeep(this.state.contextAttributes),
            ...[_.cloneDeep(DEFAULT_VALUES.CONTEXT_ATTRIBUTE)]
        ];
        console.log(newContextAttributes);

        this.expandPannel(newContextAttributes.length);
        this.setState({
            contextAttributes: newContextAttributes
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.open ? true : false}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="form-dialog-title">
                        {this.props.modalTitle}
                    </DialogTitle>
                    <DialogContent>
                        <Grid className={classes.situationInfo}>
                            <form
                                className={classes.container}
                                noValidate
                                autoComplete="off"
                            >
                                <Card
                                    className={
                                        classes.fullWidth + " " + classes.card
                                    }
                                >
                                    <CardContent>
                                        <Typography variant="subheading">
                                            Situation Info
                                        </Typography>
                                        <Grid container spacing={24}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="situationName"
                                                    required
                                                    label="Situation Name"
                                                    className={
                                                        classes.textField
                                                    }
                                                    value={
                                                        this.state.situationName
                                                    }
                                                    onChange={this.handleChange(
                                                        "situationName"
                                                    )}
                                                    margin="normal"
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    required
                                                    id="situationDescription"
                                                    label="Situation Description"
                                                    className={
                                                        classes.textField
                                                    }
                                                    value={
                                                        this.state
                                                            .situationDescription
                                                    }
                                                    onChange={this.handleChange(
                                                        "situationDescription"
                                                    )}
                                                    margin="normal"
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                                <Card
                                    className={
                                        classes.fullWidth + " " + classes.card
                                    }
                                >
                                    <CardContent>
                                        <Typography
                                            variant="subheading"
                                            gutterBottom
                                        >
                                            Context attributes
                                        </Typography>
                                        {this.state.contextAttributes.map(
                                            (ca, index) => {
                                                return (
                                                    <ExpansionPanel
                                                        // defaultExpanded={this.state.contextAttributes.length == 1}
                                                        expanded={
                                                            this.state
                                                                .expanded ==
                                                            index + 1
                                                        }
                                                        onChange={(e) =>
                                                            this.expandPannel(
                                                                index + 1
                                                            )
                                                        }
                                                    >
                                                        <ExpansionPanelSummary
                                                            expandIcon={
                                                                <ExpandMoreIcon />
                                                            }
                                                        >
                                                            <Typography
                                                                className={
                                                                    classes.heading
                                                                }
                                                            >
                                                                {ca.contextName ? (
                                                                    <strong>
                                                                        {
                                                                            ca.contextName
                                                                        }
                                                                    </strong>
                                                                ) : (
                                                                    "New context attribute"
                                                                )}
                                                            </Typography>
                                                        </ExpansionPanelSummary>
                                                        <ExpansionPanelDetails
                                                            className={
                                                                classes.panelContent
                                                            }
                                                        >
                                                            <Grid
                                                                container
                                                                spacing={24}
                                                            >
                                                                <Grid
                                                                    item
                                                                    xs={6}
                                                                >
                                                                    <TextField
                                                                        id="contextName"
                                                                        required
                                                                        label="Context Name"
                                                                        className={
                                                                            classes.textField +
                                                                            " " +
                                                                            classes.noMarginTop
                                                                        }
                                                                        value={
                                                                            ca.contextName
                                                                        }
                                                                        onChange={this.handleContextAttributeChange(
                                                                            "contextName",
                                                                            index
                                                                        )}
                                                                        margin="normal"
                                                                    />
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={6}
                                                                >
                                                                    <TextField
                                                                        required
                                                                        id="contextDescription"
                                                                        label="Context Description"
                                                                        className={
                                                                            classes.textField +
                                                                            " " +
                                                                            classes.noMarginTop
                                                                        }
                                                                        value={
                                                                            ca.contextDescription
                                                                        }
                                                                        onChange={this.handleContextAttributeChange(
                                                                            "contextDescription",
                                                                            index
                                                                        )}
                                                                        margin="normal"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                            <Grid
                                                                container
                                                                spacing={24}
                                                            >
                                                                <Grid
                                                                    item
                                                                    xs={6}
                                                                >
                                                                    <TextField
                                                                        required
                                                                        id="unit"
                                                                        label="Unit"
                                                                        className={
                                                                            classes.textField
                                                                        }
                                                                        value={
                                                                            ca.unit
                                                                        }
                                                                        onChange={this.handleContextAttributeChange(
                                                                            "unit",
                                                                            index
                                                                        )}
                                                                        margin="normal"
                                                                    />
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={6}
                                                                >
                                                                    <TextField
                                                                        required
                                                                        id="weight"
                                                                        label="Weight"
                                                                        className={
                                                                            classes.textField
                                                                        }
                                                                        value={
                                                                            ca.weight
                                                                        }
                                                                        onChange={this.handleContextAttributeChange(
                                                                            "weight",
                                                                            index
                                                                        )}
                                                                        margin="normal"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography
                                                                    variant="subheading"
                                                                    gutterBottom
                                                                >
                                                                    Data value
                                                                    ranges
                                                                </Typography>
                                                                {ca.dataValues.map(
                                                                    (
                                                                        dataValue,
                                                                        dataValueIndex
                                                                    ) => {
                                                                        <Grid
                                                                            container
                                                                            spacing={
                                                                                24
                                                                            }
                                                                        >
                                                                            <Grid
                                                                                item
                                                                                xs={
                                                                                    3
                                                                                }
                                                                            >
                                                                                <Select
                                                                                    value={
                                                                                        dataValue.datatype
                                                                                    }
                                                                                    onChange={this.handleSelectChange(
                                                                                        "datatype"
                                                                                    )}
                                                                                    className={
                                                                                        classes.textField
                                                                                    }
                                                                                    inputProps={{
                                                                                        name: "age",
                                                                                        id: "age-simple"
                                                                                    }}
                                                                                >
                                                                                    <MenuItem value="">
                                                                                        <em>
                                                                                            None
                                                                                        </em>
                                                                                    </MenuItem>
                                                                                    <MenuItem value="bound">
                                                                                        Bound
                                                                                    </MenuItem>
                                                                                    <MenuItem value="array">
                                                                                        Array
                                                                                    </MenuItem>
                                                                                </Select>
                                                                            </Grid>
                                                                            <Grid
                                                                                item
                                                                                xs={
                                                                                    6
                                                                                }
                                                                            >
                                                                                <ChipInput
                                                                                    className={
                                                                                        classes.textField +
                                                                                        " " +
                                                                                        classes.noMarginTop +
                                                                                        " " +
                                                                                        classes.chips
                                                                                    }
                                                                                    value={
                                                                                        dataValue.values
                                                                                    }
                                                                                    label="Values"
                                                                                    onAdd={(
                                                                                        chip
                                                                                    ) =>
                                                                                        this.handleAddChip(
                                                                                            chip
                                                                                        )
                                                                                    }
                                                                                    onDelete={(
                                                                                        chip,
                                                                                        index
                                                                                    ) =>
                                                                                        this.handleDeleteChip(
                                                                                            chip,
                                                                                            index
                                                                                        )
                                                                                    }
                                                                                />
                                                                            </Grid>
                                                                            <Grid
                                                                                item
                                                                                xs={
                                                                                    3
                                                                                }
                                                                            >
                                                                                <TextField
                                                                                    id="lowerbound"
                                                                                    label="Lower bound"
                                                                                    className={
                                                                                        classes.textField +
                                                                                        " " +
                                                                                        classes.noMarginTop
                                                                                    }
                                                                                    value={
                                                                                        dataValue.lowerBound
                                                                                    }
                                                                                    onChange={this.handleChange(
                                                                                        "lowerBound"
                                                                                    )}
                                                                                    margin="normal"
                                                                                />
                                                                            </Grid>
                                                                            <Grid
                                                                                item
                                                                                xs={
                                                                                    3
                                                                                }
                                                                            >
                                                                                <TextField
                                                                                    id="upperBound"
                                                                                    label="upperBound"
                                                                                    className={
                                                                                        classes.textField +
                                                                                        " " +
                                                                                        classes.noMarginTop
                                                                                    }
                                                                                    value={
                                                                                        dataValue.upperBound
                                                                                    }
                                                                                    onChange={this.handleChange(
                                                                                        "upperBound"
                                                                                    )}
                                                                                    margin="normal"
                                                                                />
                                                                            </Grid>
                                                                            <Grid
                                                                                item
                                                                                xs={
                                                                                    3
                                                                                }
                                                                            >
                                                                                <TextField
                                                                                    id="contribution"
                                                                                    label="Contribution"
                                                                                    className={
                                                                                        classes.textField +
                                                                                        " " +
                                                                                        classes.noMarginTop
                                                                                    }
                                                                                    value={
                                                                                        dataValue.contribution
                                                                                    }
                                                                                    onChange={this.handleChange(
                                                                                        "contribution"
                                                                                    )}
                                                                                    margin="normal"
                                                                                />
                                                                            </Grid>
                                                                        </Grid>;
                                                                    }
                                                                )}
                                                            </Grid>
                                                        </ExpansionPanelDetails>
                                                    </ExpansionPanel>
                                                );
                                            }
                                        )}
                                        <Button
                                            color="primary"
                                            onClick={() =>
                                                this.handleAddNewContextAttribute()
                                            }
                                        >
                                            <AddIcon />
                                            Add new context attribute
                                        </Button>
                                    </CardContent>
                                </Card>
                            </form>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={this.handleClose}
                            color="primary"
                        >
                            Add Situation
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

AddEditSituationModal.propTypes = {
    classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const AddEditSituationModalWrapped = withStyles(styles)(AddEditSituationModal);

export default AddEditSituationModalWrapped;
