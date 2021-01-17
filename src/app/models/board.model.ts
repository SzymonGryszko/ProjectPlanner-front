import { Column } from './column.model';
import { User } from './user.model';

export class Board {
    boardId: number;
    title: string;
    columns: Column[];
    owner: User;
    boardMembers: User[];
}