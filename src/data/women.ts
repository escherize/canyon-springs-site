// Adapted from https://sites.google.com/view/csccwomensministry/ and its linked pages.
// Life Group contacts, the retreat date/fees, and the tea-party details were transcribed
// from the source flyers. The Bible Study and newsletter images say "Coming Soon";
// do not invent a study, a newsletter issue, or new retreat dates.
export const women = {
  intro: "Helping the women at Canyon Springs Christian Church find a place to grow, a place to serve, and a place to belong.",
  email: "women@canyonchristian.com",
  bibleStudy: {
    title: "Bible studies",
    schedule: "Monday evenings",
    description: "The Women's Ministry Leadership Team is planning the next Bible study. Email the team for the latest study details and dates.",
    contactLabel: "Ask about the next study",
  },
  coffee: {
    title: "Coffee & Connect",
    schedule: "Second Saturday of each month · September–May",
    description: "Join us for fellowship, coffee, a potluck brunch, worship, and often a craft or activity. All are welcome.",
    childcare: "Childcare is available. Contact the team to request it.",
    contactLabel: "Ask about Coffee & Connect",
    previous: {
      title: "Previous tea-party gathering",
      date: "Saturday, May 9 · 9:30 AM",
      description: "A special tea party for Mother's Day weekend. Dressing up was welcome, and guests could bring a dish to share for the potluck breakfast. Childcare was available upon request.",
    },
  },
  groups: [
    {
      title: "Wednesday evening group",
      schedule: "Wednesdays · 6:30 PM",
      location: "Canyon Springs Office on Highway 44",
      leader: "Janet Curry",
      phone: "(208) 660-9956",
      phoneHref: "tel:+12086609956",
    },
    {
      title: "Moms of Littles",
      schedule: "Wednesdays · 10:00 AM",
      leader: "Jess Booker",
      phone: "(804) 437-3826",
      phoneHref: "tel:+18044373826",
      email: "jesssbooker@gmail.com",
    },
    {
      title: "Friday morning group",
      schedule: "Fridays · 10:00 AM",
      location: "Canyon Springs",
      leader: "Monica Simpson",
      study: "Women of the Bible",
    },
  ],
  retreat: {
    title: "Refocus",
    status: "Past event",
    dates: "October 9–11, 2026",
    location: "Camp Pinewood · McCall, Idaho",
    description: "Email the leadership team with questions about future retreats.",
    fees: [
      { label: "Early bird", value: "$155 · through August 16, 2026" },
      { label: "Regular", value: "$195 · August 17–September 18, 2026" },
    ],
    registrationUrl: "https://ppay.co/QLuU8qBWRN0",
    registrationLabel: "Original 2026 registration page (past event)",
    registrationNote: "The source stated that more information would be sent to attendees after registration. These prices and the registration link are historical, not a new invitation to register.",
    contactLabel: "Ask about future retreats",
  },
  meals: {
    title: "Meal trains",
    description: "Help support families by providing dinners. Visit the shared meal train for recipient details, organizer instructions, and ways to help, or use the request form to ask the ministry to start a meal train.",
    trainUrl: "https://www.mealtrain.com/trains/neo266",
    trainLabel: "View the shared meal train",
    requestUrl: "https://forms.gle/AnLovtH6rjjQdjc5A",
    requestLabel: "Request a meal train",
  },
  facebook: {
    title: "Facebook group",
    description: "Join the Canyon Springs Women's Ministry Facebook group to keep up with events and happenings.",
    href: "https://www.facebook.com/share/g/1GBgJsWyUU/",
    label: "Join the Facebook group",
  },
  newsletter: {
    title: "Monthly newsletter",
    description: "Contact the Women's Ministry Leadership Team for monthly newsletter updates.",
    contactLabel: "Ask about the newsletter",
  },
} as const;
