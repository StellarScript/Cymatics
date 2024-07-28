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
               className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                  !isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
               }`}
            >
               {firstTabLabel}
            </span>
            <span
               className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                  isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
               }`}
            >
               {secondTabLabel}
            </span>
         </label>
      </>
   );
};
