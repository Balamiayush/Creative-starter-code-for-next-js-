export default function LayoutWrapper({ children }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] max-xl:px-8 max-md:px-4">
      {children}
    </div>
  );
}
