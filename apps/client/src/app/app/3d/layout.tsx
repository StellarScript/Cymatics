export const metadata = {
  title: 'cymatic 3D',
  description: 'cymatic visualization 3D',
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="relative flex h-screen w-full overflow-y-hidden">
      <div className="relative flex size-full items-start justify-start">
        <>{children}</>
      </div>
    </main>
  );
}
