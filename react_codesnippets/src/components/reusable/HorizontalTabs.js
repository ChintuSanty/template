import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

const HorizontalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        {tabs.map((tab, index) => (
          <NavItem key={index}>
            <NavLink
              className={classnames({ active: activeTab === (index + 1).toString() })}
              onClick={() => { toggle((index + 1).toString()); }}
            >
              {tab.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {tabs.map((tab, index) => (
          <TabPane tabId={(index + 1).toString()} key={index}>
            {tab.content}
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
}

export default HorizontalTabs;
