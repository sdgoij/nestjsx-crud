import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@sdgoij/nestjsx-crud';

import { Company } from './company.entity';
import { CompaniesService } from './companies.service';

@Crud({
  model: {
    type: Company,
  },
  query: {
    join: {
      users: {},
      projects: {},
    },
  },
})
@ApiTags('companies')
@Controller('companies')
export class CompaniesController {
  constructor(public service: CompaniesService) {}
}
