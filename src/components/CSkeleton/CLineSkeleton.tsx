import { FunctionComponent } from "react";
import { ILineSkeleton, ISkeletonProps } from "rn-janbox-design-system-v2";

interface CLineSkeletonProps extends ISkeletonProps {}

export const CLineSkeleton: FunctionComponent<CLineSkeletonProps> = props => {
  const { ...arg } = props;
  return <ILineSkeleton {...arg} />;
};
