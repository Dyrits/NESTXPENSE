import { Injectable } from '@nestjs/common';
import { v4 as uuid } from "uuid";

import { ReportType } from "./report.enum";
import { INewReport, IReport, IUpdatedReport } from "./report.interface";
import { reportData } from "./report.data";


@Injectable()
export class ReportService {
  getReports(type: ReportType): IReport[] {
    return reportData.reports.filter((report: IReport) => report.type === type);
  }

  getReport(type: ReportType, id: string): IReport {
    return reportData.reports.find((report: IReport) => report.type === type && report.id === id);
  }

  createReport(type: ReportType, body: INewReport): IReport {
    const { source, amount } = body;
    const report: IReport = {
      id: uuid(),
      source,
      amount,
      timestamps: {
        created: new Date(),
        updated: new Date()
      },
      type
    };
    reportData.reports.push(report);
    return report;
  }

  updateReport(type: ReportType, id: string, body: IUpdatedReport): IReport {
    const report: IReport = this.getReport(type, id);
    if (report) {
      report.source = body.source || report.source;
      report.amount = body.amount || report.amount;
      report.timestamps.updated = new Date();
    }
    return report;
  }

  deleteReport(type: ReportType, id: string) {
    const index: number = reportData.reports.findIndex((report: IReport) => report.type === type && report.id === id);
    if (~index) {
      reportData.reports.splice(index, 1);
      return {};
    }
  }
}
