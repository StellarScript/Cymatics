export const metadata = {
   title: 'cymatic 2D',
   description: 'cymatic visualization 2D',
};

export default function Layout({ children }: React.PropsWithChildren) {
   return (
      <div className="relative flex h-screen w-full overflow-y-hidden">
         <>{children}</>
      </div>
   );
}
