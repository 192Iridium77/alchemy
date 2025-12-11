"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { spacing } from "alchemy-tech-ui";

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

interface TabListItemProps {
  active: boolean;
  onClick: () => void;
}

interface TabProps {
  children: React.ReactChildren;
  label: string;
}

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabList = styled.div`
  display: flex;
  gap: ${spacing(4)};
  margin-top: ${spacing(4)};
`;

const TabListItem = styled.div<TabListItemProps>`
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;

const TabContent = styled.div`
  margin-top: ${spacing(4)};
`;

export default function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <TabsContainer>
      <TabList>
        {children.map((child, index) => {
          return (
            <TabListItem
              key={index}
              active={index === activeTab}
              onClick={() => handleTabClick(index)}
            >
              {child.props.label}
            </TabListItem>
          );
        })}
      </TabList>
      <TabContent>{children[activeTab]}</TabContent>
    </TabsContainer>
  );
}
