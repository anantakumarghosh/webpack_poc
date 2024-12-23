// src/modules/index.js
import DashboardModule from './dashboard/DashboardRegistry';
import UserModule from './user/UserRegistry';

export const ModuleRegistry = {
  Dashboard: DashboardModule,
  User: UserModule
};

export const getModule = (moduleName) => {
  return ModuleRegistry[moduleName] || null;
};

export default ModuleRegistry;