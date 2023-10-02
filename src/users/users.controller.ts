import { Controller,Get,Post,Put,Delete,Body,Param,ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){}

        @Get()
        getUsers(): Promise<User[]>{
            return this.userService.getUsers();
        }
        @Post()
        CrearUsersDto(@Body() newUser:CreateUserDto): Promise<User>{
            return this.userService.createUser(newUser);
        }

    }

