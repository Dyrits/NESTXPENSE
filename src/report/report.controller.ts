import {
  Body,
  Controller, Delete,
  Get, HttpCode,
  NotFoundException,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  Patch,
  Post
} from "@nestjs/common";

import { ReportType } from "./report.enum";
import { NewReportDTO, ReportDTO, UpdatedReportDTO } from "./report.dto";
import { ReportService } from "./report.service";

@Controller("/reports/:type")
export class ReportController {
  constructor(private readonly service: ReportService) {}

  @Get()
  getReports(@Param("type", new ParseEnumPipe(ReportType)) type: ReportType): ReportDTO[] {
    const reports = this.service.getReports(type);
    return reports.map((report) => new ReportDTO(report));
  }

  @Get(":id")
  getReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: ReportType,
    @Param("id", ParseUUIDPipe) id: string
  ): ReportDTO {
    const report = this.service.getReport(type, id);
    if (report) {
      return new ReportDTO(report);
    }
    throw new NotFoundException(`No report was found with the provided identifier (${id}).`);
  }

  @Post()
  createReport(@Body() body: NewReportDTO, @Param("type", new ParseEnumPipe(ReportType)) type: ReportType): ReportDTO {
    return this.service.createReport(type, body);
  }

  @Patch(":id")
  updateReport(
    @Body() body: UpdatedReportDTO,
    @Param("type", new ParseEnumPipe(ReportType)) type: ReportType,
    @Param("id", ParseUUIDPipe) id: string
  ): ReportDTO {
    const report = this.service.updateReport(type, id, body);
    if (report) {
      return new ReportDTO(report);
    }
    throw new NotFoundException(`No report was found with the provided identifier (${id}).`);
  }

  @Delete(":id")
  @HttpCode(204)
  deleteReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: ReportType,
    @Param("id", ParseUUIDPipe) id: string
  ): void {
    const result = this.service.deleteReport(type, id);
    if (!result) {
      throw new NotFoundException(`No report was found with the provided identifier (${id}).`);
    }
  }
}
