import { Test, TestingModule } from '@nestjs/testing';
import { SummaryService } from './summary.service';
import { ReportService } from '../report/report.service';

describe('SummaryService', () => {
  let service: SummaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummaryService, { provide: ReportService, useValue: { getReports: () => [] } }],
    }).compile();

    service = module.get<SummaryService>(SummaryService);
  });

  it('should be defined', () => {
    expect(service.getSummary()).toEqual({ expenses: 0, incomes: 0, balance: 0 });
  });
});
