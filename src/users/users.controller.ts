import { Controller,Get,Post,Put,Delete,Body,Param,ParseIntPipe,Patch } from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { updateUserDto } from './Dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService : UsersService){}

        @Get()
        getUsers(): Promise<User[]>{
            return this.usersService.getUsers();
        }

        @Get(':id')
        getUser(@Param('id', ParseIntPipe) id : number) : Promise<User>{
            return this.usersService.getUser(id);
        }

        @Post()
        CrearUsersDto(@Body() newUser:CreateUserDto){
            return this.usersService.createUser(newUser);
        }

        @Delete(':id')
        deleteUser(@Param('id',ParseIntPipe) id : number){
            return this.usersService.deleteUser(id)
        }

        @Patch(':id')
            updateUser(@Param('id', ParseIntPipe)id : number, @Body()user : updateUserDto){
            return this.usersService.updateUser(id,user)
            }
    }

