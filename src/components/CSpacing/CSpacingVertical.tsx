import { FunctionComponent } from "react";
import { ISpacingVertical } from "rn-janbox-design-system-v2";
import { CSpacingProps } from "./CSpacingHorizontal";

export const CSpacingVertical: FunctionComponent<CSpacingProps> = props => {
  const { ...arg } = props;
  return <ISpacingVertical {...arg} />;
};
