export const metadata = {
  title: {
    default: 'Cymatics',
    template: '%s | cymatics',
  },
  description: 'Cymatic Visulaization',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="size-full flex flex-col items-center justify-center">
      {children}
    </main>
  );
}
