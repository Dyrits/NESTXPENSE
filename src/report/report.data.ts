import { randomUUID as uuid } from "node:crypto";

import { ReportType } from "./report.enum";
import { IData } from "./report.interface";

export const reportData: IData = {
  reports: [
    {
      id: uuid(),
      source: "Salary",
      amount: 1000,
      timestamps: {
        created: new Date(),
        updated: new Date()
      },
      type: ReportType.Income
    },
    {
      id: uuid(),
      source: "Rent",
      amount: 500,
      timestamps: {
        created: new Date(),
        updated: new Date()
      },
      type: ReportType.Expense
    }
  ]
};
