import { cn } from '@client/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => (
   <button
      {...props}
      className={cn(
         'border-primary-500 bg-primary-600 rounded border p-3.5 text-base leading-6 text-white shadow-sm',
      )}
   >
      {children}
   </button>
);
