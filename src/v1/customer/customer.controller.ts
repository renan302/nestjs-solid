import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/common/validation.pipe';
import { CreateService } from './applications/create/create.service';
import { CustomerCreateDTO } from './applications/create/customer-create.dto';
import { FindAllService } from './applications/find-all/find-all.service';
import { Customer } from './domains/customer.model';

@Controller('v1/customer')
export class CustomerController {

    constructor(private createService : CreateService, private findAllService: FindAllService){}
    
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
