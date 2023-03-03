import { FunctionComponent } from "react";
import { ITooltip, IToolTipProps } from "rn-janbox-design-system-v2";

interface CTooltipProps extends IToolTipProps {}

export const CTooltip: FunctionComponent<CTooltipProps> = props => {
  const { ...arg } = props;
  return <ITooltip {...arg} />;
};
