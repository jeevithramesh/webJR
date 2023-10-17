interface ExposedModules {
  [key: string]: any;
}

async function loadRemoteModule(
  remoteUrl: string,
  moduleName: string
): Promise<ExposedModules> {
  try {
    console.log('--in', 'fed mfe');
    // Load the remote entry file
    const remoteEntry = await import(`${remoteUrl}/remoteEntry.js`);

    // Ensure the module is exposed by the remote
    if (remoteEntry[moduleName]) {
      const remoteModule = await import(
        `${remoteUrl}/${remoteEntry[moduleName]}`
      );
      console.log(remoteModule);
      return remoteModule;
    } else {
      throw new Error(`Module '${moduleName}' not found in the remote entry.`);
    }
  } catch (error) {
    console.error(`Error loading remote module '${moduleName}':`, error);
    throw error;
  }
}

export default loadRemoteModule;
