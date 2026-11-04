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

The Nest 10 adapter pins old Express/body-parser versions. Compatible-major overrides now select Express 4.22.3 and body-parser 1.20.9 to fix additional request-body advisories without a framework migration. The HTTP check also sends an invalid gzipped JSON request with trailing bytes over a real socket, expects HTTP 400 within two seconds and confirms the app still responds afterward. Other high and moderate dependency findings still remain.

The November 4, 2026 compatible transitive refresh reduces distinct advisory IDs from 75 to 37 without new IDs. Final local npm audit has 36 package findings (0 critical, 7 high, 17 moderate, 12 low). Fresh install, build, and isolated dependency HTTP/malformed-gzip tests pass on Node.js 26. Framework/toolchain findings remain, and legacy default test fixtures are not represented as passing. No deployment was performed.

The scoped Nest core path-to-regexp override selects the patched 3.3.0 release without changing Express's separate 0.1.x route parser. Fresh install, build and existing dependency HTTP/gzip smoke tests pass on Node.js 26. One more distinct advisory ID is removed with none added. Framework-major PRs and remaining security findings are unresolved.

## Coherent Nest 11 verification (November 2026)

Framework, Express adapter, testing, CLI and schematics move together to Nest 11, with Reflect Metadata 0.2 and Express 5 types. Node.js 26.13.0 LTS is the tested runtime. Prettier 3 and its matching ESLint integration satisfy the new schematics peer requirement. Old Express 4/body-parser/Nest 10 route-parser overrides are removed; patched Multer 2.5, CLI Glob 14.0.3 and Minimatch 9.0.7 overrides are tested with their consumers.

Clean npm installation and build pass. All five unit tests pass after fixing the original test setup's omitted service providers and empty suite. An isolated real-module HTTP test covers in-memory expense create/read/update/delete, summary, validation, invalid enum/UUID route parameters, unknown routes, malformed JSON and malformed gzip rejection. A separate real Nest FileInterceptor fixture verifies valid upload 201 and unexpected field 400. The expense application itself has no upload route.

The local audit changes from 35 to 37 package findings: high 5 to 0, moderate 18 to 32, low 12 to 5, critical 0. Distinct advisory IDs fall from 36 to 3, with no new IDs. Package totals rise because tooling dependencies inherit the same advisories; this is not an all-clear. Existing in-memory persistence, UUID 9 dependency and zero-amount update behavior remain unchanged. No hosted service or deployment was tested.

Migration-sensitive route/DTO behavior was reviewed against the official versioned Nest 10-to-11 guide: https://github.com/nestjs/docs.nestjs.com/blob/ba85c6a2/content/migration.md . No inspected wildcard routes, nested query consumers or shutdown hooks need source changes.
