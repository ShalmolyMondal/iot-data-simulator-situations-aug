const DATA_VALUE = {
  contribution: '',
  range_type: '',
  range_values: {
    higher_bound: '',
    lower_bound: '',
    multiple_values: [],
  },
};

const CONTEXT_ATTRIBUTE = {
  context_attribute_name: '',
  context_attribute_description: '',
  unit: '',
  weight: '',
  data_values: [{ ...DATA_VALUE }],
};

export const DEFAULT_VALUES = {
  CONTEXT_ATTRIBUTE: CONTEXT_ATTRIBUTE,
  DATA_VALUE: DATA_VALUE,
};
