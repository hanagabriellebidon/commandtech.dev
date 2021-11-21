export default function Highlight({ children }) {
  return (
    <span className="bg-navy dark:bg-white text-white dark:text-navy rounded-lg px-2 max-w-min inline">
      {children}
    </span>
  );
}
