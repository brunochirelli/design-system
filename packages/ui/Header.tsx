import { greeting, log, finalization, bye, oi } from "../tokens/src";

export const Header = ({ text }: { text: string }) => {
  () => log("hello");

  return <h1>{text + greeting + finalization + bye + oi}</h1>;
};
