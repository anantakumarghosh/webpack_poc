// src/utils/moduleLoader.js
export const loadModule = async (moduleName) => {
    try {
      // Dynamically import module registry
      const moduleRegistry = await import(`@modules/${moduleName}/${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}Registry`);
      return moduleRegistry.default;
    } catch (error) {
      console.error(`Failed to load module: ${moduleName}`, error);
      return null;
    }
  };
  
  export const getModuleComponent = async (moduleName, componentName) => {
    const module = await loadModule(moduleName);
    return module?.components?.[componentName] || null;
  };