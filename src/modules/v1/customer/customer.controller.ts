import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/common/validation.pipe';
import { CreateApplicationService } from './applications/create/create.application.service';
import { CustomerCreateDTO } from './applications/create/customer-create.dto';
import { FindAllApplicationService } from './applications/find-all/find-all.application.service';
import { Customer } from './domains/customer.model';

@Controller('v1/customer')
export class CustomerController {

    constructor(private createApplicationService : CreateApplicationService, private findAllApplicationService: FindAllApplicationService){}
    
    @Post()        
    async create(@Body() customer : CustomerCreateDTO) : Promise<void>{   
        console.log(customer);
        return await this.createApplicationService.execute(customer);
    }

    @Get()
    async findAll() : Promise<Array<Customer>>{
        return await this.findAllApplicationService.execute();
    }

}
