import React from "react";
import styled from "styled-components";

interface TabProps {
  label: string;
  children: React.ReactChildren | string | React.ReactElement | null;
}

const TabListItem = styled.div<Partial<TabProps>>``;

const Tab = ({ label, children }: TabProps) => {
  return <TabListItem label={label}>{children}</TabListItem>;
};

export default Tab;
