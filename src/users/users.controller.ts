import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { updateUserDto } from './Dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get(':id_user')
    getUser(@Param('id_user', ParseIntPipe) id_user: number) {
        return this.usersService.getUser(id_user);
    }

    @Post()
    CrearUsersDto(@Body() newUser: CreateUserDto) {
        return this.usersService.createUser(newUser);
    }

    @Delete(':id_user')
    deleteUser(@Param('id_user', ParseIntPipe) id_user: number) {
        return this.usersService.deleteUser(id_user)
    }

    @Patch(':id_user')
    updateUser(@Param('id_user', ParseIntPipe) id_user: number, @Body() user: updateUserDto) {
        return this.usersService.updateUser(id_user, user)
    }



}

