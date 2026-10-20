// The church's facts. Change them here; every page reads from this file.
export const church = {
  name: "Canyon Springs Christian Church",
  short: "Canyon Springs",
  street: "1444 Cornell Street",
  city: "Middleton, Idaho 83644",
  mapUrl: "https://maps.google.com/?q=1444+Cornell+St+Middleton+ID+83644",
  phone: "(208) 585-6788",
  phoneHref: "tel:+12085856788",
  email: "office@canyonchristian.com",
  services: ["9:00", "10:30"],
  giveUrl: "https://pushpay.com/g/canyonspringschristian?src=hpp",
  calendarUrl: "https://canyon-springs-christian-church-451724.churchcenter.com/calendar",
  signupsUrl: "https://canyon-springs-christian-church-451724.churchcenter.com/registrations",
  youtube: "https://www.youtube.com/@canyonchristian",
  facebook: "https://www.facebook.com/CanyonSpringsChristian",
  instagram: "https://www.instagram.com/canyonspringschristian/",
  appStore: "https://apps.apple.com/us/app/canyon-springs-christian/id1061796986",
  playStore: "https://play.google.com/store/apps/details?id=com.echurchapps.canyonsprings",
  // Where the "we're coming" and change-request forms post. Empty means the form opens an email instead.
  formEndpoint: "",
};

// When the snapshot of YouTube and Church Center was taken.
export const snapshot = "October 14, 2026";

export const ministries = [
  { label: "Students", to: "/students", description: "6th–12th grade · Sundays 10:30, Wednesdays 6:30 PM" },
  { label: "Kids", to: "/kids", description: "Newborn–5th grade · Sundays at 9:00 and 10:30" },
  { label: "Life Groups", to: "/groups", description: "Small groups that meet weekly" },
  { label: "Women", to: "/women", description: "Bible studies, retreats and a Friday morning group" },
  { label: "Garden", to: "/garden", description: "Gardening, teaching, and sharing the harvest" },
] as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Ministries", to: "/ministries", overviewLabel: "All ministries", children: ministries },
  { label: "Watch", to: "/watch" },
  { label: "Contact", to: "/contact" },
] as const;

export const footerNav = [
  { label: "Women's ministry", to: "/women" },
  { label: "Garden outreach", to: "/garden" },
  { label: "What we believe", to: "/beliefs" },
  { label: "Contact", to: "/contact" },
  { label: "Give", to: "/give" },
  { label: "Request a website change", to: "/request" },
] as const;
