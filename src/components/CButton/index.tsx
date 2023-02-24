import { FunctionComponent } from "react";
import { Button, ButtonProps } from "rn-janbox-design-system-v2";
import { CIcon } from "../CIcons";

interface CButtonProps extends ButtonProps {
  buttonRightIconType?: string;
  buttonRightIconName?: string;
}

export const CButton: FunctionComponent<CButtonProps> = (props) => {
  const { buttonRightIconName, buttonRightIconType, ...arg } = props;
  return (
    <Button
      {...arg}
      buttonRightView={
        buttonRightIconName ? (
          <CIcon
            type={buttonRightIconType}
            name={buttonRightIconName}
            size={16}
          />
        ) : undefined
      }
    />
  );
};
