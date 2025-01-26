"use client";

import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Icon } from "@iconify/react";
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";

import ThemeSwitcher from "@/components/navigation/navbar/ThemeSwitcher";
import { navigationLink } from "@/constants";

const Navbar = () => {
  return (
    <HeroUINavbar
      classNames={{
        base: "bg-white/[.90] dark:bg-black/[.65]",
        item: "data-[active=true]:text-primary",
        wrapper: "px-4 sm:px-6 max-w-7xl",
      }}
    >
      <NavbarBrand>
        <Icon fontSize={32} icon="mdi:jellyfish" />
        <p className="font-bold text-inherit">KAFJisho</p>
      </NavbarBrand>
      <NavbarContent
        className="ml-4 hidden h-12 w-full max-w-fit gap-4 px-4 md:flex"
        justify="start"
      >
        {navigationLink.map((item) => (
          <NavbarItem key={item.route}>
            <Link className="flex gap-2 text-inherit" href={item.route}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}

        {/* <NavbarItem isActive>
          <Link
            aria-current="page"
            className="flex gap-2 text-inherit"
            href="#"
          >
            Deployments
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <Divider className="h-7 hidden md:flex" orientation="vertical" />
      <NavbarContent
        className="ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0  lg:px-1 "
        justify="end"
      >
        <NavbarItem>
          <Button isIconOnly aria-label="Search" radius="full" variant="light">
            <Icon
              className="text-default-500"
              icon="solar:magnifer-linear"
              width={22}
            />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {/* <NavbarItem className="hidden sm:flex">
          <Button isIconOnly radius="full" variant="light">
            <Icon
              className="text-default-500"
              icon="solar:settings-linear"
              width={24}
            />
          </Button>
        </NavbarItem> */}
        <NavbarItem className="px-2">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <button className="mt-1 h-8 w-8 outline-none transition-transform">
                <Badge
                  className="border-transparent"
                  color="success"
                  content=""
                  placement="bottom-right"
                  shape="circle"
                  size="sm"
                >
                  <Avatar
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a04258114e29526708c"
                  />
                </Badge>
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">johndoe@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenuToggle className="h-6 sm:hidden" />
      <NavbarMenu>
        {navigationLink.map((item) => (
          <NavbarMenuItem key={item.route}>
            <Link className="w-full" color="foreground" href={item.route}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
