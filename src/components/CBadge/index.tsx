import { FunctionComponent } from "react";
import { IBadge, BadgeProps } from "rn-core-components";

interface CBadgeProps extends BadgeProps {}

export const CBadge: FunctionComponent<CBadgeProps> = props => {
  const { ...arg } = props;
  return <IBadge {...arg} />;
};
