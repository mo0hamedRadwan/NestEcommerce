import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="font-sans dark:bg-slate-900 dark:text-white">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
