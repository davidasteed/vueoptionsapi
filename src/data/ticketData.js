export const defaultCategories = {
  hardware: "Hardware",
  software: "Software",
  network: "Network",
  inProcessing: "In-Processing"
}

export const defaultTypes = {
  hardware: [
    "Laptop",
    "Mobile",
    "Peripherals",
    "Desk Phone",
    "Printers",
    "Other"
  ],
  software: [
    "Teams/Zoom",
    "Mobile Blackberry",
    "Adobe",
    "Outlook",
    "Microsoft Office",
    "Other"
  ],
  network: [
    "Network Access",
    "Connectivity",
    "VPN",
    "Drivers",
    "Other"
  ],
  inProcessing: [
    "Access Badge",
    "Common Access Card(CAC)",
    "SIPR",
    "Trello"
  ]
}

export const ticketFormErrors = {
  description: "* description is required *",
  type: "* type is required *",
  subject: "* subject is required *"
}

// used, proposal only
export const sampleTickets = [
  {
    id: 1,  // each ticket will require a unique identifier
    category: "Hardware",
    type: "Laptop",
    subject: "new laptop",
    description: "brand new Dell core i7 laptop",
    attachments: ["file1.txt", "file2.txt"]
  },
  {
    id: 2,
    category: "Hardware",
    type: "Mobile",
    subject: "new mobile phone",
    description: "default mobile phone",
    attachments: ["file1.txt", "file2.txt"]
  },
  {
    id: 3,
    category: "Software",
    type: "Teams/Zoom",
    subject: "Teams software",
    description: "teams software license info",
    attachments: ["file1.txt", "file2.txt"]
  },
  {
    id: 4,
    category: "Software",
    type: "Mobile Blackberry",
    subject: "default blackberry device",
    description: "info on default blackberry issue device",
    attachments: ["file1.txt", "file2.txt"]
  },
  {
    id: 5,
    category: "Network",
    type: "Network Access",
    subject: "new user",
    description: "how to create network access for a new user",
    attachments: ["file1.txt", "file2.txt"]
  },
  {
    id: 6,
    category: "Network",
    type: "Connectivity",
    subject: "Connectivity",
    description: "connectivity information",
    attachments: ["file1.txt", "file2.txt"]
  },
  {
    id: 7,
    category: "In-Processing",
    type: "Access Badge",
    subject: "access badge for D.C. branch office",
    description: "generic access badge template",
    attachments: ["file1.txt", "file2.txt"]
  },
  {
    id: 8,
    category: "In-Processing",
    type: "Common Access Card (CAC)",
    subject: "CAC card",
    description: "information for issuance of Common Access Card (CAC)",
    attachments: ["file1.txt", "file2.txt"]
  }
]