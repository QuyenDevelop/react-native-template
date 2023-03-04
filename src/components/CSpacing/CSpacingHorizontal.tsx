import { FunctionComponent } from "react";
import { ISpacingHorizontal, DotProps } from "@phamquyen/rn-core-components";

export interface CSpacingProps extends DotProps {}

export const CSpacingHorizontal: FunctionComponent<CSpacingProps> = props => {
  const { ...arg } = props;
  return <ISpacingHorizontal {...arg} />;
};
