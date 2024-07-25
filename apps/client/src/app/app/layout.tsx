export const metadata = {
  title: {
    default: 'Cymatics',
    template: '%s | cymatics',
  },
  description: 'Cymatic Visulaization',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex size-full flex-col items-center justify-center">
      {children}
    </main>
  );
}
