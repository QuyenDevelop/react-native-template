import { FunctionComponent } from "react";
import { IBadge, BadgeProps } from "rn-janbox-design-system-v2";

interface CBadgeProps extends BadgeProps {}

export const CBadge: FunctionComponent<CBadgeProps> = props => {
  const { ...arg } = props;
  return <IBadge {...arg} />;
};
