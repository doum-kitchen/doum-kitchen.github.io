/**
 * useLatestMenu
 *
 * Vite resolves import.meta.glob at build-time.
 * To publish a new weekly menu, the chef drops a new file named
 * YYYY-MM-DD.json into src/data/menus/ and rebuilds the site.
 * The file with the lexicographically highest name (= latest date) is used.
 */
const menuModules = import.meta.glob('../data/menus/*.json', { eager: true })

export function useLatestMenu() {
  const keys = Object.keys(menuModules).sort()

  if (!keys.length) {
    return { menu: null, weekLabel: 'Menu coming soon' }
  }

  const latestKey = keys[keys.length - 1]
  const menu = menuModules[latestKey]?.default ?? menuModules[latestKey]

  return { menu }
}
