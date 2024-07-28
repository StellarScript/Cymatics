import { cn } from '@client/lib/cn';

interface PopupProps extends React.PropsWithChildren {
   className?: string;
   content: string;
}

export const Popup: React.FC<PopupProps> = ({ children, className, content }) => {
   return (
      <div className="group">
         <div className="relative w-full">
            <div
               className={cn(
                  'absolute invisible group-hover:visible border rounded transition transition-200',
                  'bg-[#0C111D] w-[14rem] mt-[0.5rem] ml-3 border-dark-100 px-3 py-1 text-dark-100',
                  className,
               )}
            >
               <div className="tooltip-arrow text-white-100 text-[10px]">{content}</div>
            </div>
         </div>
         {children}
      </div>
   );
};
