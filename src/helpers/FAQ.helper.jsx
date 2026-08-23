import { FAQ_DATA } from "../myEnum/FAQText";

export const faqSections = [
  {
    title: FAQ_DATA.GENERAL_HEADING,
    questions: [
      {
        question: "What exactly is HELM?",
        answer:
          "HELM is a comprehensive, cloud-based event management platform designed to centralize all aspects of event operations.",
      },
      {
        question: "Who should use HELM?",
        answer:
          "HELM is designed for event managers, coordinators, corporate event teams, venue managers, and event professionals of all sizes.",
      },
      {
        question:
          "How is HELM different from spreadsheets and basic event planning apps?",
        answer:
          "HELM provides real-time collaboration, automatic task escalation, budget tracking, CRM functionality, marketing tools, and analytics.",
      },
      {
        question: "How long does it take to implement HELM?",
        answer:
          "Basic implementation typically takes 1-2 weeks including setup, training, and data migration.",
      },
      {
        question: "What kind of support does HELM provide?",
        answer:
          "HELM provides email support, phone support, training sessions, documentation, and an online help center.",
      },
    ],
  },

  {
    title: FAQ_DATA.FEATURES_HEADING,
    questions: [
      {
        question: "Can HELM handle multiple events running simultaneously?",
        answer:
          "Yes. HELM is specifically designed to manage multiple concurrent events.",
      },
      {
        question: "Does HELM include attendee registration and ticketing?",
        answer:
          "Yes. HELM includes registration forms, ticketing, confirmations, and attendee tracking.",
      },
      {
        question: "How does the vendor management system work?",
        answer:
          "Vendors can receive assignments, update progress, upload deliverables, and communicate directly through HELM.",
      },
      {
        question: "Can HELM integrate with our existing tools?",
        answer:
          "Yes. HELM integrates with CRM systems, accounting software, payment processors, Slack, Microsoft Teams, and more.",
      },
      {
        question: "Does HELM work on mobile devices?",
        answer:
          "Yes. HELM provides native iOS and Android apps with offline capabilities.",
      },
    ],
  },

  {
    title: FAQ_DATA.SECURITY_HEADING,
    questions: [
      {
        question: "How secure is HELM?",
        answer:
          "HELM uses enterprise-grade security, 256-bit encryption, role-based access control, and regular security audits.",
      },
      {
        question: "Is HELM GDPR compliant?",
        answer:
          "Yes. HELM is fully GDPR compliant and supports data subject requests and consent management.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "Data is stored in secure, redundant data centers with geographic backups.",
      },
      {
        question: "What happens if HELM goes down?",
        answer:
          "HELM maintains a 99.9% uptime SLA with automated failover and disaster recovery protocols.",
      },
    ],
  },

  {
    title: FAQ_DATA.PRICING_HEADING,
    questions: [
      {
        question: "What is HELM's pricing model?",
        answer:
          "Pricing is based on event volume, team size, and feature requirements.",
      },
      {
        question: "Is there a long-term contract requirement?",
        answer: "No. HELM offers flexible monthly and annual subscriptions.",
      },
      {
        question: "Does HELM charge per user or per event?",
        answer: "Pricing is primarily based on event volume and team size.",
      },
      {
        question: "What's included in the free trial?",
        answer: "A 14-day free trial with full access to all HELM features.",
      },
    ],
  },

  {
    title: FAQ_DATA.GETTING_STARTED_HEADING,
    questions: [
      {
        question: "How do I get started with HELM?",
        answer: "Start your free trial and follow the setup process provided.",
      },
      {
        question: "What information do I need to get started?",
        answer: "Company name, email address, and basic event information.",
      },
      {
        question: "Can I migrate my existing event data into HELM?",
        answer: "Yes. HELM provides migration tools and support.",
      },
      {
        question: "Do I need technical training to use HELM?",
        answer: "No. HELM is designed to be intuitive and user-friendly.",
      },
    ],
  },
];
