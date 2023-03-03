import { FunctionComponent } from "react";
import { EmptyStateProps, IEmptyState } from "rn-janbox-design-system-v2";

interface CEmptyStateProps extends EmptyStateProps {}

export const CEmptyState: FunctionComponent<CEmptyStateProps> = props => {
  const { ...arg } = props;
  return <IEmptyState {...arg} />;
};
