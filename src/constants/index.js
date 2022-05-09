export const PUBLIC_LAYOUT = "default";

export const NAV_ITEMS = [
  {
    icon: "home",
    text: "Trang chủ",
    name: "Home",
  },
  {
    icon: "file-medical",
    text: "Bệnh án",
    name: "Appointments",
  },
  {
    icon: "satellite-dish",
    text: "Thiết bị",
    name: "Device",
  },
  {
    icon: "user",
    text: "Cá nhân",
    name: "Profile",
  },
];

export const PROFILE_OPTIONS = [
  {
    name: "Chỉnh sửa thông tin",
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
    name: "Giới thiệu",
    icon: "info-circle",
    route: {
      name: "not-found",
      params: {},
    },
  },
  {
    name: "Đăng xuất",
    icon: "power-off",
    route: {
      name: "Logout",
      params: {},
    },
  },
];
