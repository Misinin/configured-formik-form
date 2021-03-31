import { Input, InputNumber } from "antd";

import FormItemLabel from "@/shared/FormItemLabel";

export const FIELD_TYPES = {
  text: "text",
  number: "number",
};

const useFormItems = ({ config = [] }) => {
  const formItems = config.map((itemConfig) => {
    switch (itemConfig.type) {
      case FIELD_TYPES.text:
        return (
          <FormItemLabel key={itemConfig.name} {...itemConfig}>
            <Input
              name={itemConfig.name}
              value={itemConfig.value}
              onChange={itemConfig.onChange}
            />
          </FormItemLabel>
        );

      case FIELD_TYPES.number:
        return (
          <FormItemLabel key={itemConfig.name} {...itemConfig}>
            <Input
              type="number"
              name={itemConfig.name}
              value={itemConfig.value}
              onChange={itemConfig.onChange}
            />
          </FormItemLabel>
        );

      default:
        return null;
    }
  });

  return { formItems };
};

export default useFormItems;
