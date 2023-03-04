import React, { FunctionComponent } from "react";
import {
  BaseBottomSheet,
  BottomSheetProps,
} from "@phamquyen/rn-core-components";
import { CIcon } from "../CIcons";
import { DATA_CONSTANT } from "@configs";

interface CBottomSheetProps extends BottomSheetProps {
  headerLeftIconName?: string;
  headerLeftIconType?: string;
  headerRightIconName?: string;
  headerRightIconType?: string;
  headerRightView?: React.ReactNode;
}

export const CBottomSheet: FunctionComponent<CBottomSheetProps> = props => {
  const {
    headerLeftIconName = "close",
    headerLeftIconType = DATA_CONSTANT.ICON_TYPE.AntDesign,
    headerRightView,
    headerRightIconName,
    headerRightIconType,
    ...arg
  } = props;

  const renderIconHeaderRight = () => {
    return headerRightIconName ? (
      <CIcon type={headerRightIconType} name={headerRightIconName} size={16} />
    ) : null;
  };

  return (
    <BaseBottomSheet
      headerLeftView={
        <CIcon type={headerLeftIconType} name={headerLeftIconName} size={24} />
      }
      headerRightView={
        headerRightView ? headerRightView : renderIconHeaderRight()
      }
      headerRightOnPress={props.headerRightOnPress}
      {...arg}
    >
      {props.children}
    </BaseBottomSheet>
  );
};
