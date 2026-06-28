# Tichi QA Automation Assignment

## Overview

This repository contains the QA Automation Assignment developed for the **Tichi** application.

The project includes:

- ✅ Manual Test Cases
- ✅ Defect Report
- ✅ Cypress Automation Scripts
- ✅ Mochawesome HTML Execution Report

---

# Tech Stack

- Cypress 15
- JavaScript
- Node.js
- Mochawesome Reporter

---

# package.json Scripts

```json
"scripts": {
  "open": "cypress open",
  "login": "cypress run --browser chrome --headed --spec \"cypress/e2e/Login/login.cy.js\""
}
```

---

# Project Structure

```text
Tichi
│
├── cypress
│   ├── e2e
│   │   └── Login
│   │       └── login.cy.js
│   │
│   ├── fixtures
│   │   ├── Functions
│   │   │   └── login.js
│   │   │
│   │   └── testData
│   │       └── loginData.json
│   │
│   ├── reports
│   │   └── 2026
│   │       └── June
│   │           └── Login
│   │               ├── Login_Report.html
│   │               └── Login_Report.json
│   │
│   ├── screenshots
│   └── support
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Automated Test Scenarios

The following scenarios have been automated:

- ✅ Successful Login
- ✅ Login with Invalid Password
- ✅ Successful User Registration (Sign Up)

---

# Installation

Clone the repository

```bash
git clone https://github.com/JaySuryaa28/Hackathon_QA_KATOMARAN.git
```

Navigate to the project

```bash
cd Hackathon_QA_KATOMARAN
```

Install project dependencies

```bash
npm install
```

---

# Running the Project

## Open Cypress Test Runner

```bash
npm run open
```

This opens the Cypress UI where you can execute tests interactively.

---

## Run Login Automation

```bash
npm run login
```

This command will:

- Launch Google Chrome in headed mode
- Execute the Login automation suite
- Generate Mochawesome HTML & JSON reports automatically

---

# Available Commands

| Command | Description |
|----------|-------------|
| `npm install` | Install project dependencies |
| `npm run open` | Launch Cypress Test Runner (UI Mode) |
| `npm run login` | Execute Login Automation Suite |
| `npx cypress run` | Execute all Cypress test cases |

---

# Execution Report

The project uses **Mochawesome Reporter**.

Reports are automatically generated after every execution.

## Report Location

```text
cypress/reports/2026/June/Login/
```

Generated files:

```text
Login_Report.html
Login_Report.json
```

---

# Sample Execution Report


# Test Coverage

| Module | Test Scenario | Status |
|----------|--------------|--------|
| Login | Valid Login | ✅ Automated |
| Login | Invalid Password | ✅ Automated |
| Sign Up | New User Registration | ✅ Automated |

---

# Deliverables

- Manual Test Case Document
- Defect Report
- Cypress Automation Source Code
- Mochawesome HTML Execution Report
- README Documentation

---

# Author

**Jay Suryaa R**

