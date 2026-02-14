import Button from "./Button";

interface PricingBoxProps {
  price: string;
  originalPrice?: string;
  buttonText?: string;
  guarantee?: string;
  onButtonClick?: () => void;
}

export default function PricingBox({
  price,
  originalPrice,
  buttonText = "Buy Now",
  guarantee,
}: PricingBoxProps) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
      <div className="flex items-end gap-3 mb-6">
        <span className="text-4xl font-black text-slate-900 dark:text-white">
          {price}
        </span>
        {originalPrice && (
          <span className="text-lg text-slate-400 line-through mb-1">
            {originalPrice}
          </span>
        )}
      </div>

      <Button fullWidth className="mb-4">
        {buttonText}
      </Button>

      {guarantee && (
        <p className="text-xs text-center text-slate-500 dark:text-slate-400">
          {guarantee}
        </p>
      )}
    </div>
  );
}
