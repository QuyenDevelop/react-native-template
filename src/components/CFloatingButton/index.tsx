import { FunctionComponent } from "react";
import {
  FloatingButtonProps,
  IFloatingButton,
} from "@phamquyen/rn-core-components";

interface CFloatingButtonProps extends FloatingButtonProps {}

export const CFloatingButton: FunctionComponent<
  CFloatingButtonProps
> = props => {
  const { ...arg } = props;
  return <IFloatingButton {...arg} />;
};
