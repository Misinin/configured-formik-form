import useFormItems, { FIELD_TYPES } from "@/utils/useFormItems";

const ConfiguredForm = (props) => {
  const { values, handleChange, setFieldValue } = props;

  const config = [
    {
      type: FIELD_TYPES.text,
      name: "input",
      label: "Text input",
      placeholder: "",
      value: values.input,
      required: true,
      onChange: handleChange,
    },
    {
      type: FIELD_TYPES.number,
      name: "number",
      label: "Input number",
      placeholder: "",
      value: values.number,
      onChange: handleChange,
    },
    {
      type: FIELD_TYPES.select,
      name: "select",
      label: "Select",
      placeholder: "",
      value: values.select,
      options: [
        { value: "value1", label: "value1" },
        { value: "value2", label: "value2" },
        { value: "value3", label: "value3" },
      ],
      onChange(fieldValue) {
        setFieldValue(this.name, fieldValue);
      },
    },
    {
      type: FIELD_TYPES.range,
      name: "range",
      label: "Range",
      required: true,
      min: {
        name: "RangeMin",
        value: values.RangeMin,
        onChange: handleChange,
      },
      max: {
        name: "RangeMax",
        value: values.RangeMax,
        onChange: handleChange,
      },
    },
  ];

  const { formItems } = useFormItems({ config });

  return <>{formItems}</>;
};

export default ConfiguredForm;
