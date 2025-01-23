import { Injectable } from '@nestjs/common';

import { ReportService } from "../report/report.service";
import { ReportType } from "../report/report.enum";

@Injectable()
export class SummaryService {
  constructor(private readonly reports: ReportService) {}

  getSummary() {
    const expenses = this.reports.getReports(ReportType.Expense).reduce((sum, report) => sum + report.amount, 0);
    const incomes = this.reports.getReports(ReportType.Income).reduce((sum, report) => sum + report.amount, 0);
    const balance = incomes - expenses;
    return { expenses, incomes, balance };
  }
}
