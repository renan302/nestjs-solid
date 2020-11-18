import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class CustomerCreateDTO {

    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    @IsEmail()
    mail : string;

    @IsNotEmpty()
    @IsPhoneNumber("BR")
    phone : string;
    
}