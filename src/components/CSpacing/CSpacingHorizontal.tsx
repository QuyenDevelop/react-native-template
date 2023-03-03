import { FunctionComponent } from "react";
import { ISpacingHorizontal, DotProps } from "rn-janbox-design-system-v2";

export interface CSpacingProps extends DotProps {}

export const CSpacingHorizontal: FunctionComponent<CSpacingProps> = props => {
  const { ...arg } = props;
  return <ISpacingHorizontal {...arg} />;
};
