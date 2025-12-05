import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#15171C] group-[.toaster]:text-[#F3F4F7] group-[.toaster]:border-[#2A2D35] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#9BA1B0]",
          actionButton:
            "group-[.toast]:bg-[#00FFC2] group-[.toast]:text-[#0D0E10]",
          cancelButton:
            "group-[.toast]:bg-[#1C1F26] group-[.toast]:text-[#9BA1B0]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
