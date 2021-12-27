export const PUBLIC_LAYOUT = "default";

export const NAV_ITEMS = [
  {
    icon: "home",
    text: "Trang chủ",
    name: "Home",
  },
  {
    icon: "calendar",
    text: "Lịch hẹn",
    name: "Appointments",
  },
  {
    icon: "file-medical",
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
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "Công cụ",
    icon: "tools",
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "Quyền lợi",
    icon: "lock",
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "Về chúng tối",
    icon: "info-circle",
    route: {
      name: "Home",
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
