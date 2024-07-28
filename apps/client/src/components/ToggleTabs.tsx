import { cn } from '@client/lib/cn';
import { useState } from 'react';

interface ToggleTabsProps {
   firstTabLabel: string;
   secondTabLabel: string;
   onChange?: (state: boolean) => void;
}

export const ToggleTabs: React.FC<ToggleTabsProps> = ({ onChange, firstTabLabel, secondTabLabel }) => {
   const [isChecked, setIsChecked] = useState(false);

   const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      onChange?.(!isChecked);
   };

   return (
      <>
         <label className="shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
            <input type="checkbox" className="sr-only" checked={isChecked} onChange={handleCheckboxChange} />
            <span
               className={cn(
                  'flex items-center space-x-[6px] rounded rounded-r-none py-2 px-[18px] text-xs font-medium',
                  !isChecked ? 'text-dark-100 bg-light-200' : 'bg-primary-500 text-white-100',
               )}
            >
               {firstTabLabel}
            </span>
            <span
               className={cn(
                  'flex items-center space-x-[6px] rounded rounded-l-none py-2 px-[18px] text-xs font-medium',
                  isChecked ? 'text-dark-100 bg-light-200' : 'bg-primary-500 text-white-100',
               )}
            >
               {secondTabLabel}
            </span>
         </label>
      </>
   );
};
