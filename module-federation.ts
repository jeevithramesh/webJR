import { routeMapping } from 'module-routes';

export default function loadRemoteModule(
  url: keyof typeof routeMapping
): Promise<any> {
  console.log('--in', 'fed');
  return routeMapping[url];
}
