import { FunctionComponent } from "react";
import { BaseLabel, LabelProps } from "rn-janbox-design-system-v2";
import { CIcon } from "../CIcons";

interface CLabelProps extends LabelProps {
  iconName?: string;
  iconType?: string;
}

export const CLabel: FunctionComponent<CLabelProps> = props => {
  const { iconName, iconType, ...arg } = props;

  const renderIcon = () => {
    return iconName ? <CIcon type={iconName} name={iconName} /> : null;
  };

  return <BaseLabel {...arg}>{props.children || renderIcon()}</BaseLabel>;
};
