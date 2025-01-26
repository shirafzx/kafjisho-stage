import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const onChange = async () => {
    await document.startViewTransition(() => {
      flushSync(() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      });
    }).ready;
    document.documentElement.animate({
      easing: "ease-in-out",
      pseudoElement: "::view-transition-new(root)",
    });
  };
  const icon = theme === "dark" ? "solar:sun-linear" : "solar:moon-linear";

  return (
    <Button
      isIconOnly
      aria-label="ThemeSwitcher"
      radius="full"
      variant="light"
      onPress={onChange}
    >
      <Icon className="text-default-500" icon={icon} width={24} />
    </Button>
  );
};

export default ThemeSwitcher;
