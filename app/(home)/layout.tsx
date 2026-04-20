import { Footer } from "@/components/common/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
