// src/modules/dashboard/DashboardRegistry.js
import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import DashboardStats from './components/DashboardStats';
import DashboardLayout from './components/DashboardLayout';

export const DashboardComponents = {
  Header: DashboardHeader,
  Stats: DashboardStats,
  Layout: DashboardLayout
};

const DashboardModule = {
  components: DashboardComponents,
  moduleName: 'Dashboard',
  
  createDashboardView: (props = {}) => {
    const { Layout, Header, Stats } = DashboardComponents;
    const { headerProps = {}, statsProps = {} } = props;

    return (
      <Layout>
        <Header {...headerProps} />
        <Stats {...statsProps} />
      </Layout>
    );
  }
};

export default DashboardModule;