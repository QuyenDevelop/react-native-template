import { FunctionComponent } from "react";
import { ISquareSkeleton, ISkeletonProps } from "@phamquyen/rn-core-components";

interface CSquareSkeletonProps extends ISkeletonProps {
  size: number;
}

export const CSquareSkeleton: FunctionComponent<
  CSquareSkeletonProps
> = props => {
  const { size, ...arg } = props;
  return <ISquareSkeleton size={size} {...arg} />;
};
