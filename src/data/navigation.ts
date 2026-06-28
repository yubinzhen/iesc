export interface navigation {
  name: string;
  link: string;
}
const navigations: navigation[] = [
  { name: "home", link: "/" },
  { name: "resources", link: "/resources" },
  { name: "explore", link: "/explore" },
  { name: "help & support", link: "/help" },
];

export default navigations;
