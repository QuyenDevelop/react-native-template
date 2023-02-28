import React, { FunctionComponent } from "react";
import { BaseBottomSheet, BottomSheetProps } from "rn-janbox-design-system-v2";
import { CIcon } from "../CIcons";

interface CBottomSheetProps extends BottomSheetProps {
  headerRightIconName?: string;
  headerRightIconType?: string;
  headerRightView?: React.ReactNode;
}

export const CBottomSheet: FunctionComponent<CBottomSheetProps> = props => {
  const { headerRightView, headerRightIconName, headerRightIconType, ...arg } =
    props;

  const renderIcon = () => {
    return headerRightIconName ? (
      <CIcon type={headerRightIconType} name={headerRightIconName} size={16} />
    ) : null;
  };

  return (
    <BaseBottomSheet
      headerRightView={headerRightView ? headerRightView : renderIcon()}
      headerRightOnPress={props.headerRightOnPress}
      {...arg}
    >
      {props.children}
    </BaseBottomSheet>
  );
};
