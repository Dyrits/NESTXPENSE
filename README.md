# NESTXPENSE

A simple back-end API built with NestJS to track incomes and expenses.

## About The Project

A NestJS REST API for tracking income and expense reports, with a summary endpoint aggregating totals.

### Built With

- NestJS (Node.js + TypeScript)
- class-validator / class-transformer
- Jest (tests)

## Getting Started

### Prerequisites

- Node.js

### Installation

```sh
npm install
```

### Development

```sh
npm run start:dev    # NestJS with watch mode
npm test             # unit tests (Jest)
npm run test:e2e     # end-to-end tests
```

## License

No license file is present in this repository.

## Contact

Dyrits - https://github.com/Dyrits

## Dependency verification (November 2026)

Targeted lockfile updates fix the form-data boundary randomness and proxy-addr trust-subnet advisories. Other dependency advisories remain, including high-severity findings; this is not a security clearance or a supported production-stack claim. Use Node.js 26.13.0 LTS and a clean `npm ci`, then `npm run build` and `npm run test:dependencies`.

The HTTP check uses in-process report data and verifies create/read/update/delete, summary and invalid-input rejection. The original Jest fixtures still include missing dependency providers and stale compile fixtures; the default unit-test suite is not passing. No real database or hosted service was tested.
