import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const icon = theme === "dark" ? "solar:sun-linear" : "solar:moon-linear";

  return (
    <Button isIconOnly radius="full" variant="light" onPress={onChange}>
      <Icon className="text-default-500" icon={icon} width={24} />
    </Button>
  );
};

export default ThemeSwitcher;
