import useFormItems, { FIELD_TYPES } from "@/utils/useFormItems";

const ConfiguredForm = (props) => {
  const { values, handleChange } = props;

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
  ];

  const { formItems } = useFormItems({ config });

  return <>{formItems}</>;
};

export default ConfiguredForm;
