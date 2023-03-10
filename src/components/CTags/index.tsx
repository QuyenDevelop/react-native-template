import { FunctionComponent } from "react";
import { ITags, ITagsProps } from "@phamquyen/rn-core-components";
import { CIcon } from "../CIcons";

interface CTagsProps extends ITagsProps {
  tagIconType?: string;
  tagIconIconName?: string;
}

export const CTags: FunctionComponent<CTagsProps> = props => {
  const { tagIconIconName, tagIconType, ...arg } = props;
  return (
    <ITags
      {...arg}
      leftIcon={
        tagIconIconName ? (
          <CIcon name={tagIconIconName} type={tagIconType} />
        ) : null
      }
    />
  );
};
