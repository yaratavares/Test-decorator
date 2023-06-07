import variables from './variables';

function settings(target: any, key: string) {
  if (!Object.keys(variables).includes(key)) {
    console.error(`Setting variable "${key}" not defined`);
    return;
  }

  const variable = variables[key];

  Object.defineProperty(target, key, {
    value: variable,
    enumerable: true,
    configurable: true,
  });
}

export default settings;
