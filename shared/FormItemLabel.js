import { Form } from "antd";

const FormItemLabel = (props) => {
  const { label, required, children } = props;

  return (
    <Form.Item required={required} label={label}>
      {children}
    </Form.Item>
  );
};

export default FormItemLabel;
