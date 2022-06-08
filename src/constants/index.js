export const PUBLIC_LAYOUT = "default";

export const NAV_ITEMS = [
  {
    icon: "home",
    text: "Home",
    name: "Home",
  },
  {
    icon: "file-medical",
    text: "Profile",
    name: "Appointments",
  },
  {
    icon: "satellite-dish",
    text: "Device",
    name: "Device",
  },
  {
    icon: "user",
    text: "User",
    name: "Profile",
  },
];

export const PROFILE_OPTIONS = [
  {
    name: "Edit profile",
    icon: "user-edit",
    route: "/edit-profile",
  },
  // `{
  //   name: "Công cụ",
  //   icon: "tools",
  //   route: {
  //     name: "not-found",
  //     params: {},
  //   },
  // },
  // {
  //   name: "Bảo mật",
  //   icon: "lock",
  //   route: {
  //     name: "not-found",
  //     params: {},
  //   },
  // },`
  {
    name: "About us",
    icon: "info-circle",
    route: {
      name: "not-found",
      params: {},
    },
  },
  {
    name: "Log out",
    icon: "power-off",
    route: {
      name: "Logout",
      params: {},
    },
  },
];
