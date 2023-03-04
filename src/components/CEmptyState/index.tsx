import { FunctionComponent } from "react";
import { EmptyStateProps, IEmptyState } from "rn-core-components";

interface CEmptyStateProps extends EmptyStateProps {}

export const CEmptyState: FunctionComponent<CEmptyStateProps> = props => {
  const { ...arg } = props;
  return <IEmptyState {...arg} />;
};
