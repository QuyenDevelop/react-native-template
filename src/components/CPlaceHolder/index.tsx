import { FunctionComponent } from "react";
import { IPlaceHolder, PlaceHolderProps } from "rn-janbox-design-system-v2";

interface CPlaceHolderProps extends PlaceHolderProps {}

export const CPlaceHolder: FunctionComponent<CPlaceHolderProps> = props => {
  const { ...arg } = props;
  return <IPlaceHolder {...arg} />;
};
