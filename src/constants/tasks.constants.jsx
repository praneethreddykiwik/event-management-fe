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
    dueAt: "2026-01-05T17:00:00Z",
    image: venueImg1,
    available: true,
  },
  {
    title: "Confirm venue booking",
    description:
      "Ensure the convention center booking is finalized and advance payment is completed.",
    priority: "high",
    dueAt: "2026-01-06T12:00:00Z",
    image: venueImg2,
    available: true,
  },
  {
    title: "Setup stage and lighting",
    description:
      "Coordinate with vendors to complete stage, lighting, and audio setup as per event design.",
    priority: "high",
    dueAt: "2026-01-10T09:00:00Z",
    image: venueImg3,
    available: true,
  },
  {
    title: "Send delegate invitations",
    description:
      "Send formal invitations and registration links to all conference delegates.",
    priority: "medium",
    dueAt: "2026-01-08T18:00:00Z",
    image: venueImg4,
    available: true,
  },

  // Healthcare Conference
  {
    title: "Confirm keynote speaker",
    description:
      "Finalize agreement and session details with the primary keynote speaker.",
    priority: "high",
    dueAt: "2026-01-12T14:00:00Z",
    image: venueImg5,
    available: true,
  },
  {
    title: "Design conference agenda",
    description:
      "Create the full conference agenda including session timing and speakers.",
    priority: "high",
    dueAt: "2026-01-14T16:00:00Z",
    image: venueImg6,
    available: true,
  },
  {
    title: "Arrange accommodation for speakers",
    description:
      "Book hotels and transport for all visiting speakers and VIP guests.",
    priority: "medium",
    dueAt: "2026-01-15T11:00:00Z",
    image: venueImg2,
    available: true,
  },

  // Annual Corporate Townhall
  {
    title: "Prepare annual report presentation",
    description:
      "Compile performance metrics and financials into the executive presentation deck.",
    priority: "high",
    dueAt: "2026-01-18T10:00:00Z",
    image: venueImg4,
    available: true,
  },
  {
    title: "Stage setup and branding",
    description:
      "Install branding materials, banners, LED screens, and podium graphics.",
    priority: "medium",
    dueAt: "2026-01-19T13:00:00Z",
    image: venueImg5,
    available: true,
  },
  {
    title: "Employee registration",
    description:
      "Manage employee registration, attendance tracking, and badge distribution.",
    priority: "Low",
    dueAt: "2026-01-20T09:30:00Z",
    image: venueImg6,
    available: true,
  },
];

export const TASKS_OPTIONS = [
  { value: "not_started", label: "Not started" },
  { value: "assigned", label: "Assigned" },
  { value: "in_progress", label: "In progress" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "deleted", label: "Deleted" },
];
// 'not_started'::text, 'assigned'::text, 'in_progress'::text, 'completed'::text, 'cancelled'::text, 'deleted'::text])))
