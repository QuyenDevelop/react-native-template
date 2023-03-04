import { FunctionComponent } from "react";
import { IDot, DotProps } from "rn-core-components";

interface CRedDotProps extends DotProps {}

export const CRedDot: FunctionComponent<CRedDotProps> = props => {
  const { ...arg } = props;
  return <IDot {...arg} />;
};
