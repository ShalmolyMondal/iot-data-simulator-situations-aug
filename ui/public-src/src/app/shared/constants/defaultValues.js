const DATA_VALUE = {
    contribution: "",
    datatype: "",
    values: [],
    lowerBound: 0,
    higherBound: 0
};

const CONTEXT_ATTRIBUTE = {
    contextName: "",
    contextDescription: "",
    unit: "",
    weight: 0,
    dataValues: [{ ...DATA_VALUE }]
};

export const DEFAULT_VALUES = {
    CONTEXT_ATTRIBUTE: CONTEXT_ATTRIBUTE
};
