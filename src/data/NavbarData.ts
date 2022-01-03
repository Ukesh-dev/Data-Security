interface DataType {
  to: string;
  text: string;
  id?: string | undefined;
}
export const data: DataType[] = [
  {
    to: "/",
    text: "About",
    id: "about",
  },
  {
    to: "/pricing",
    text: "Pricing",
  },
  {
    to: "/contact",
    text: "Contact",
  },
];
