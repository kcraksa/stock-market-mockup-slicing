import React from "react";
import CaretRight from "../icons/caretright";

interface AssetClassProps {
  className?: string;
  title?: string;
  total?: string;
  data?: any;
}

const AssetClass: React.FC<AssetClassProps> = ({
  className,
  title,
  total,
  data,
}) => {
  return (
    <div className="my-3">
      <div
        className={`flex justify-between items-center font-medium p-2 rounded-full bg-${className}`}
      >
        <div className="text-white">- {title}</div>
        <div
          className={`bg-white text-${className} rounded-full py-1 px-2 text-sm`}
        >
          {total}
        </div>
      </div>
      <div>
        {data.map((entity: any) => (
          <div key={entity.name}>
            <div className="flex justify-between bg-slate-50 p-2 mt-2 shadow-md items-center">
              <div>{entity.name}</div>
              <div className="text-brand-50">{entity.totalAmount}</div>
            </div>

            <div className="p-2">
              {entity.child?.map((child: any) => (
                <div
                  className="flex justify-between py-7 border-b border-slate-200 items-center cursor-pointer"
                  key={child.name}
                >
                  <div>{child.name}</div>
                  <div className="flex gap-2 items-center">
                    <div>{child.totalAmount}</div>
                    <div>
                      <CaretRight />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetClass;
