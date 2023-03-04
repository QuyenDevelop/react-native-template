import { FunctionComponent } from "react";
import { ITabView, ITabsProps } from "rn-janbox-design-system-v2";

interface CTabViewProps extends ITabsProps {}

export const CTabView: FunctionComponent<CTabViewProps> = props => {
  const { ...arg } = props;
  return <ITabView {...arg} />;
};