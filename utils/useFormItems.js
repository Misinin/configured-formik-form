import { Input, Select } from "antd";

import FormItemLabel from "@/shared/FormItemLabel";
import styles from "@/styles/Home.module.css";

const { Option } = Select;

export const FIELD_TYPES = {
  text: "text",
  number: "number",
  select: "select",
  range: 'range'
};

const getSelectOptions = (options) => {
  return options.length
    ? options.map((option, key) => {
        return (
          <Option key={key} value={option.value}>
            {option.label}
          </Option>
        );
      })
    : null;
};

const useFormItems = ({ config = [] }) => {
  const formItems = config.map((itemConfig, index) => {
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

      case FIELD_TYPES.select:
        return (
          <FormItemLabel key={itemConfig.name} {...itemConfig}>
            <Select
              disabled={itemConfig.disabled}
              name={itemConfig.name}
              loading={itemConfig.loading === true}
              value={itemConfig.value}
              onChange={itemConfig.onChange.bind(itemConfig)}
              placeholder={itemConfig.placeholder}
              allowClear={itemConfig.allowClear}
            >
              {getSelectOptions(itemConfig.options)}
            </Select>
          </FormItemLabel>
        );

      case FIELD_TYPES.range:
        return (
          <FormItemLabel key={itemConfig.name} {...itemConfig}>
            <div className={styles.rangeItem}>
              <Input
                name={itemConfig.min.name}
                value={itemConfig.min.value}
                className={styles.rangeMinItem}
                type="number"
                onChange={itemConfig.min.onChange}
                placeholder="от"
              />
              <div>
                <span className={styles.rangeSeparatorItem}>—</span>
              </div>
              <Input
                key={itemConfig.max.name}
                name={itemConfig.max.name}
                min={itemConfig.max.minValue}
                value={itemConfig.max.value}
                className={styles.rangeMaxItem}
                type="number"
                onChange={itemConfig.max.onChange}
                placeholder="до"
              />
            </div>
          </FormItemLabel>
        );

      case FIELD_TYPES.gap: // only grid template
        return <div className={styles.gapFormItem} key={index}></div>;

      default:
        return null;
    }
  });

  return { formItems };
};

export default useFormItems;
