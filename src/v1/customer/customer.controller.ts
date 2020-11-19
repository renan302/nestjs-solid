import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/common/validation.pipe';
import { CreateApplication } from './applications/create/create.application';
import { CustomerCreateDTO } from './applications/create/customer-create.dto';
import { FindAllApplication } from './applications/find-all/find-all.application';
import { Customer } from './domains/customer.model';

@Controller('v1/customer')
export class CustomerController {

    constructor(private createService : CreateApplication, private findAllService: FindAllApplication){}
    
    @Post()        
    async create(@Body() customer : CustomerCreateDTO) : Promise<void>{   
        console.log(customer);
        return await this.createService.execute(customer);
    }

    @Get()
    async findAll() : Promise<Array<Customer>>{
        return await this.findAllService.execute();
    }

}
