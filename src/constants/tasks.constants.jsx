import venueImg1 from "../assets/venue_imgs/venueImg1.jpeg";
import venueImg2 from "../assets/venue_imgs/venueImg2.jpg";
import venueImg3 from "../assets/venue_imgs/venueImg3.jpeg";
import venueImg4 from "../assets/venue_imgs/venueImg4.jpeg";
import venueImg5 from "../assets/venue_imgs/venueImg5.jpeg";
import venueImg6 from "../assets/venue_imgs/venueImg6.jpeg";

export const tasksMetadata = [
  // Tech Innovators Summit
  {
    title: "Finalize speakers list",
    description:
      "Confirm and lock the final list of keynote and panel speakers including session topics.",
    priority: "high",
    dueAt: "",
    assineeType: false,
    image: venueImg1,
    available: true,
  },
  {
    title: "Confirm venue booking",
    description:
      "Ensure the convention center booking is finalized and advance payment is completed.",
    priority: "high",
    dueAt: "",
    assineeType: false,
    image: venueImg2,
    available: true,
  },
  {
    title: "Setup stage and lighting",
    description:
      "Coordinate with vendors to complete stage, lighting, and audio setup as per event design.",
    priority: "high",
    dueAt: "",
    assineeType: false,
    image: venueImg3,
    available: true,
  },
  {
    title: "Send delegate invitations",
    description:
      "Send formal invitations and registration links to all conference delegates.",
    priority: "medium",
    dueAt: "",
    assineeType: false,
    image: venueImg4,
    available: true,
  },

  // Healthcare Conference
  {
    title: "Confirm keynote speaker",
    description:
      "Finalize agreement and session details with the primary keynote speaker.",
    priority: "high",
    dueAt: "",
    assineeType: false,
    image: venueImg5,
    available: true,
  },
  {
    title: "Design conference agenda",
    description:
      "Create the full conference agenda including session timing and speakers.",
    priority: "high",
    dueAt: "",
    assineeType: false,
    image: venueImg6,
    available: true,
  },
  {
    title: "Arrange accommodation for speakers",
    description:
      "Book hotels and transport for all visiting speakers and VIP guests.",
    priority: "medium",
    dueAt: "",
    assineeType: false,
    image: venueImg2,
    available: true,
  },

  // Annual Corporate Townhall
  {
    title: "Prepare annual report presentation",
    description:
      "Compile performance metrics and financials into the executive presentation deck.",
    priority: "high",
    dueAt: "",
    assineeType: false,
    image: venueImg4,
    available: true,
  },
  {
    title: "Stage setup and branding",
    description:
      "Install branding materials, banners, LED screens, and podium graphics.",
    priority: "medium",
    dueAt: "",
    assineeType: false,
    image: venueImg5,
    available: true,
  },
  {
    title: "Employee registration",
    description:
      "Manage employee registration, attendance tracking, and badge distribution.",
    priority: "Low",
    dueAt: "",
    assineeType: false,
    image: venueImg6,
    available: true,
  },
];

export const TASK_INITIAL_FILTERS = [
  { value: "not_started", selected: true },
  { value: "assigned", selected: true },
  { value: "in_progress", selected: true },
  { value: "ready_for_qa", selected: true },
  { value: "qa_in_progress", selected: true },
  { value: "completed", selected: true },
  { value: "cancelled", selected: true },
  { value: "deleted", selected: false },
];
