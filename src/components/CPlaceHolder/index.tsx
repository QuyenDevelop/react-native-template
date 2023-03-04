import { FunctionComponent } from "react";
import { IPlaceHolder, PlaceHolderProps } from "@phamquyen/rn-core-components";

interface CPlaceHolderProps extends PlaceHolderProps {}

export const CPlaceHolder: FunctionComponent<CPlaceHolderProps> = props => {
  const { ...arg } = props;
  return <IPlaceHolder {...arg} />;
};
