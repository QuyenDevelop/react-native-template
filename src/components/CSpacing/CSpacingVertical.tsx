import { FunctionComponent } from "react";
import { ISpacingVertical } from "rn-core-components";
import { CSpacingProps } from "./CSpacingHorizontal";

export const CSpacingVertical: FunctionComponent<CSpacingProps> = props => {
  const { ...arg } = props;
  return <ISpacingVertical {...arg} />;
};
