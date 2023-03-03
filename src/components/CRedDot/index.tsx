import { FunctionComponent } from "react";
import { IDot, DotProps } from "rn-janbox-design-system-v2";

interface CRedDotProps extends DotProps {}

export const CRedDot: FunctionComponent<CRedDotProps> = props => {
  const { ...arg } = props;
  return <IDot {...arg} />;
};
